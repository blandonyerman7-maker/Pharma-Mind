// --- 1. DATOS: El Array de Preguntas (¡Pega tus 200 preguntas aquí!) ---

const quizQuestions = [
    {
        question: "¿Cuál es el mecanismo de acción principal de los antibióticos betalactámicos?",
        options: [
            "Inhibición de la síntesis de pared celular",
            "Inhibición de la síntesis de proteínas",
            "Bloqueo de canales de potasio",
            "Activación de receptores de serotonina"
        ],
        answer: "Inhibición de la síntesis de pared celular"
    },
    {
        question: "La 'toxicidad de primer paso' se refiere a la metabolización del fármaco en:",
        options: [
            "Los riñones",
            "Los pulmones",
            "El hígado",
            "El bazo"
        ],
        answer: "El hígado"
    },
    // --- COMIENZA A PEGAR TUS OTRAS 198 PREGUNTAS AQUÍ ---
    // El formato debe ser: { question: "...", options: ["...", "..."], answer: "..." }
];


// --- 2. LÓGICA DEL QUIZ ---

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// Referencias a elementos de la interfaz
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const quizArea = document.getElementById('quiz-area');
const resultsArea = document.getElementById('results-area');
const scoreText = document.getElementById('score-text');


function loadQuestion() {
    // Si ya terminamos, muestra resultados
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    answered = false;
    submitBtn.disabled = true;
    optionsContainer.innerHTML = ''; // Limpia opciones anteriores

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${quizQuestions.length}: ${currentQuestion.question}`;
    submitBtn.textContent = "Comprobar Respuesta"; // Texto inicial del botón

    // Creación dinámica de los botones de opciones
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        // Al hacer clic, se selecciona la opción y se guarda temporalmente
        button.onclick = () => selectOption(button, option);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedButton, selectedAnswer) {
    if (answered) return; 

    // Quita la selección de cualquier botón previo
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
        btn.removeAttribute('data-selected');
    });

    // Selecciona el botón actual y guarda la respuesta en el botón
    selectedButton.classList.add('selected');
    selectedButton.setAttribute('data-selected', selectedAnswer);
    submitBtn.disabled = false; // Habilita el botón de acción
}


function checkAnswer() {
    // Si ya se comprobó la respuesta, pasamos a la siguiente pregunta
    if (answered) {
        currentQuestionIndex++;
        loadQuestion();
        return;
    }

    const selectedButton = document.querySelector('.option-btn.selected');
    
    if (!selectedButton) {
        alert("Por favor, selecciona una opción antes de continuar.");
        return;
    }

    answered = true;
    
    const selectedAnswer = selectedButton.getAttribute('data-selected');
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

    // Deshabilita todos los botones para que no se puedan cambiar
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
        // Muestra la respuesta correcta
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Cambia el botón para que diga "Siguiente"
    submitBtn.textContent = "Siguiente Pregunta";
}


function showResults() {
    quizArea.classList.add('hidden');
    resultsArea.classList.remove('hidden');

    const totalQuestions = quizQuestions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(1);

    scoreText.innerHTML = `Obtuviste **${score}** de **${totalQuestions}** correctas. (${percentage}%)`;
    
    // Feedback basado en el resultado
    if (percentage >= 80) {
        scoreText.innerHTML += '<p style="color: green; font-weight: bold;">¡Felicidades, tu conocimiento es sólido!</p>';
    } else if (percentage >= 50) {
        scoreText.innerHTML += '<p style="color: orange;">Sigue practicando; estás cerca de dominarlo.</p>';
    } else {
        scoreText.innerHTML += '<p style="color: red;">Es momento de repasar los temas más importantes.</p>';
    }
}

// --- Inicio del Quiz ---
submitBtn.addEventListener('click', checkAnswer);
loadQuestion();
