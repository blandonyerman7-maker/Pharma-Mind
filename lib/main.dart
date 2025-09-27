import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final data = await rootBundle.loadString('assets/questions.json');
  final List<dynamic> raw = json.decode(data);
  final questions = raw.map((e) => Question.fromJson(e)).toList();
  runApp(QuizMedApp(questions: questions));
}

class QuizMedApp extends StatelessWidget {
  final List<Question> questions;
  QuizMedApp({required this.questions});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'QuizMed (offline)',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.teal),
      home: HomePage(questions: questions),
    );
  }
}

class HomePage extends StatelessWidget {
  final List<Question> questions;
  HomePage({required this.questions});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('QuizMed - Banco offline')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const SizedBox(height: 20),
            const Text('Bienvenido a QuizMed', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            const Text('Practica medicina general. Contenido educativo; verificar guías oficiales.'),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => QuizPage(questions: questions))),
              child: const Text('Iniciar quiz'),
            ),
            const SizedBox(height: 12),
            OutlinedButton(
              onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => QuizPage(questions: questions, alwaysShowExplanation: true))),
              child: const Text('Modo estudio (explicaciones)'),
            ),
            const SizedBox(height: 12),
            TextButton(
              onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => QuestionListPage(questions: questions))),
              child: const Text('Ver preguntas (lista)'),
            )
          ],
        ),
      ),
    );
  }
}

class Question {
  final String question;
  final List<String> options;
  final int correctIndex;
  final String explanation;
  final String topic;
  Question({required this.question, required this.options, required this.correctIndex, required this.explanation, required this.topic});
  factory Question.fromJson(Map<String, dynamic> j) {
    return Question(
      question: j['question'] ?? '',
      options: List<String>.from(j['options'] ?? []),
      correctIndex: j['correctIndex'] ?? 0,
      explanation: j['explanation'] ?? '',
      topic: j['topic'] ?? ''
    );
  }
}

class QuizPage extends StatefulWidget {
  final List<Question> questions;
  final bool alwaysShowExplanation;
  QuizPage({required this.questions, this.alwaysShowExplanation = false});
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  late List<Question> pool;
  int currentIndex = 0;
  bool answered = false;
  int? selectedIndex;
  int score = 0;
  List<int> wrong = [];

  @override
  void initState() {
    super.initState();
    pool = List<Question>.from(widget.questions)..shuffle();
  }

  void submit(int idx) {
    if (answered) return;
    setState(() {
      answered = true;
      selectedIndex = idx;
      if (pool[currentIndex].correctIndex == idx) score++;
      else wrong.add(currentIndex);
    });
  }

  void next() {
    if (currentIndex < pool.length - 1) {
      setState(() {
        currentIndex++;
        answered = false;
        selectedIndex = null;
      });
    } else {
      Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => ResultsPage(score: score, total: pool.length, wrong: wrong, pool: pool)));
    }
  }

  @override
  Widget build(BuildContext context) {
    final q = pool[currentIndex];
    return Scaffold(
      appBar: AppBar(title: Text('Pregunta ${currentIndex+1} / ${pool.length}')),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            Text(q.topic, style: TextStyle(fontWeight: FontWeight.w600, color: Colors.black54)),
            const SizedBox(height: 8),
            Text(q.question, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const SizedBox(height: 12),
            ...List.generate(q.options.length, (i) {
              Color? bg;
              if (answered) {
                if (i == q.correctIndex) bg = Colors.green[100];
                else if (i == selectedIndex && i != q.correctIndex) bg = Colors.red[100];
              }
              return Card(
                color: bg,
                child: ListTile(
                  title: Text(q.options[i]),
                  onTap: () => submit(i),
                ),
              );
            }),
            const SizedBox(height: 10),
            if (answered || widget.alwaysShowExplanation)
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(pool[currentIndex].correctIndex == selectedIndex ? 'Correcto' : 'Explicación', style: TextStyle(fontWeight: FontWeight.bold)),
                    SizedBox(height: 6),
                    Text(q.explanation),
                  ]),
                ),
              ),
            Spacer(),
            ElevatedButton(onPressed: (answered || widget.alwaysShowExplanation) ? next : null, child: Text(currentIndex == pool.length-1 ? 'Finalizar' : 'Siguiente'))
          ],
        ),
      ),
    );
  }
}

class ResultsPage extends StatelessWidget {
  final int score;
  final int total;
  final List<int> wrong;
  final List<Question> pool;
  ResultsPage({required this.score, required this.total, required this.wrong, required this.pool});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Resultados')),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            Text('Puntaje: $score / $total', style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
            SizedBox(height: 12),
            if (wrong.isNotEmpty)
              Expanded(child: ListView.builder(itemCount: wrong.length, itemBuilder: (_, i) {
                final qi = pool[wrong[i]];
                return Card(child: ListTile(title: Text(qi.question), subtitle: Text('Respuesta: ${qi.options[qi.correctIndex]}\\n${qi.explanation}')));
              })),
            SizedBox(height: 12),
            ElevatedButton(onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => QuizPage(questions: pool))), child: Text('Volver a intentar (mezclar)')),
            SizedBox(height: 8),
            OutlinedButton(onPressed: () => Navigator.popUntil(context, (route) => route.isFirst), child: Text('Volver al inicio'))
          ],
        ),
      ),
    );
  }
}

class QuestionListPage extends StatelessWidget {
  final List<Question> questions;
  QuestionListPage({required this.questions});
  @override
  Widget build(BuildContext context) {
    return Scaffold(appBar: AppBar(title: const Text('Banco de preguntas')), body: ListView.builder(itemCount: questions.length, itemBuilder: (_, i) {
      final q = questions[i];
      return Card(child: ListTile(title: Text(q.question), subtitle: Text('Respuesta: ${q.options[q.correctIndex]}\\n${q.explanation}')));
    }));
  }
}
