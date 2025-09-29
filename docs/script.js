// ====================================================================
// 1. DATOS: El Array de Preguntas (CON 50 EJEMPLOS)
// ====================================================================

const quizQuestions = [
    {
        question: "¿Cuál es el mecanismo de acción principal de los antibióticos betalactámicos?",
        options: [
            "Inhibición de la síntesis de proteínas",
            "Bloqueo de la bomba de protones",
            "Inhibición de la síntesis de pared celular",
            "Antagonismo de receptores muscarínicos"
        ],
        answer: "Inhibición de la síntesis de pared celular"
    },
    {
        question: "El Paracetamol (Acetaminofén) tiene propiedades:",
        options: [
            "Antiinflamatorias y antipiréticas",
            "Antipiréticas y analgésicas",
            "Anticoagulantes y analgésicas",
            "Antiinflamatorias y sedantes"
        ],
        answer: "Antipiréticas y analgésicas"
    },
    {
        question: "¿Qué fármaco se utiliza comúnmente como antídoto para la sobredosis de opioides?",
        options: [
            "Flumazenil",
            "Naloxona",
            "Atropina",
            "Protamin sulfato"
        ],
        answer: "Naloxona"
    },
    {
        question: "Los inhibidores de la enzima convertidora de angiotensina (IECA) suelen terminar en:",
        options: [
            "-olol",
            "-dipino",
            "-pril",
            "-sartán"
        ],
        answer: "-pril"
    },
    {
        question: "¿Qué clase de fármaco actúa bloqueando los receptores H1 de la histamina?",
        options: [
            "Antihipertensivos",
            "Antipiréticos",
            "Antihistamínicos",
            "Diuréticos"
        ],
        answer: "Antihistamínicos"
    },
    {
        question: "La Digoxina se utiliza para tratar la insuficiencia cardíaca debido a su efecto:",
        options: [
            "Inotrópico negativo",
            "Dromotrópico negativo",
            "Inotrópico positivo",
            "Cronotrópico positivo"
        ],
        answer: "Inotrópico positivo"
    },
    {
        question: "La 'toxicidad de primer paso' de un fármaco ocurre principalmente en:",
        options: [
            "Los riñones",
            "El hígado",
            "El cerebro",
            "Los pulmones"
        ],
        answer: "El hígado"
    },
    {
        question: "¿Qué efecto adverso es común en pacientes que toman antibióticos de amplio espectro?",
        options: [
            "Hipotensión severa",
            "Fotosensibilidad",
            "Superinfección por C. difficile",
            "Hiperglucemia"
        ],
        answer: "Superinfección por C. difficile"
    },
    {
        question: "El Warfarin es un anticoagulante que antagoniza la acción de la vitamina:",
        options: [
            "Vitamina B12",
            "Vitamina D",
            "Vitamina K",
            "Vitamina C"
        ],
        answer: "Vitamina K"
    },
    {
        question: "¿Cuál es un fármaco típico para el tratamiento de crisis de asma bronquial?",
        options: [
            "Salbutamol (Albuterol)",
            "Lisinopril",
            "Metformina",
            "Fluoxetina"
        ],
        answer: "Salbutamol (Albuterol)"
    },
    // Pregunta 11
    {
        question: "El Omeprazol es un ejemplo de un inhibidor de:",
        options: [
            "Receptores H2",
            "Bomba de protones",
            "Alfa-adrenérgicos",
            "Canales de calcio"
        ],
        answer: "Bomba de protones"
    },
    // Pregunta 12
    {
        question: "Los fármacos que terminan en -estatina se usan principalmente para tratar:",
        options: [
            "Hipertensión",
            "Dislipidemia (colesterol alto)",
            "Diabetes tipo 2",
            "Artritis reumatoide"
        ],
        answer: "Dislipidemia (colesterol alto)"
    },
    // Pregunta 13
    {
        question: "La Neomicina es un antibiótico comúnmente usado por vía:",
        options: [
            "Intravenosa",
            "Oral para infecciones sistémicas",
            "Tópica o enteral",
            "Intramuscular"
        ],
        answer: "Tópica o enteral"
    },
    // Pregunta 14
    {
        question: "¿Qué receptor es el objetivo principal de la Morfina?",
        options: [
            "Receptores GABA",
            "Receptores Alfa-2",
            "Receptores Opioides Mu",
            "Receptores Nicotínicos"
        ],
        answer: "Receptores Opioides Mu"
    },
    // Pregunta 15
    {
        question: "El Diazepam pertenece a qué clase de fármaco ansiolítico e hipnótico:",
        options: [
            "Barbitúricos",
            "Antidepresivos Tricíclicos",
            "Benzodiacepinas",
            "Inhibidores de la recaptación de serotonina"
        ],
        answer: "Benzodiacepinas"
    },
    // Pregunta 16
    {
        question: "La Metformina es la primera línea de tratamiento para:",
        options: [
            "Diabetes tipo 1",
            "Hipertensión arterial",
            "Diabetes tipo 2",
            "Hipotiroidismo"
        ],
        answer: "Diabetes tipo 2"
    },
    // Pregunta 17
    {
        question: "¿Qué diurético es conocido por su potencial efecto ahorrador de potasio?",
        options: [
            "Furosemida",
            "Hidroclorotiazida",
            "Espironolactona",
            "Bumetanida"
        ],
        answer: "Espironolactona"
    },
    // Pregunta 18
    {
        question: "La Amoxicilina es un antibiótico de la familia de:",
        options: [
            "Macrólidos",
            "Fluoroquinolonas",
            "Penicilinas",
            "Tetraciclinas"
        ],
        answer: "Penicilinas"
    },
    // Pregunta 19
    {
        question: "¿Qué fármaco se usa para tratar la gota aguda al inhibir la migración de leucocitos?",
        options: [
            "Alopurinol",
            "Febuxostat",
            "Colchicina",
            "Probenecid"
        ],
        answer: "Colchicina"
    },
    // Pregunta 20
    {
        question: "La Atropina es un antagonista del receptor:",
        options: [
            "Adrenérgico beta",
            "Muscarínico",
            "Nicotínico",
            "Dopaminérgico"
        ],
        answer: "Muscarínico"
    },
    // Pregunta 21
    {
        question: "Los fármacos que terminan en -olol se usan para tratar:",
        options: [
            "Úlceras gástricas",
            "Angina e hipertensión",
            "Infecciones fúngicas",
            "Depresión"
        ],
        answer: "Angina e hipertensión"
    },
    // Pregunta 22
    {
        question: "El antagonista H2 usado para reducir la secreción de ácido gástrico es:",
        options: [
            "Omeprazol",
            "Ranebutal",
            "Cimetidina",
            "Misoprostol"
        ],
        answer: "Cimetidina"
    },
    // Pregunta 23
    {
        question: "La Ciprofloxacina pertenece a la clase de antibióticos:",
        options: [
            "Cefalosporinas",
            "Aminoglucósidos",
            "Fluoroquinolonas",
            "Lincosamidas"
        ],
        answer: "Fluoroquinolonas"
    },
    // Pregunta 24
    {
        question: "Un efecto adverso común de la Levotiroxina es:",
        options: [
            "Hipotermia",
            "Bradicardia",
            "Palpitaciones y taquicardia",
            "Ganancia de peso"
        ],
        answer: "Palpitaciones y taquicardia"
    },
    // Pregunta 25
    {
        question: "¿Qué antidepresivo es un inhibidor selectivo de la recaptación de serotonina (ISRS)?",
        options: [
            "Amitriptilina",
            "Fluoxetina",
            "Venlafaxina",
            "Fenelzina"
        ],
        answer: "Fluoxetina"
    },
    // Pregunta 26
    {
        question: "El alopurinol se utiliza en el tratamiento crónico de la gota para reducir la producción de:",
        options: [
            "Ácido láctico",
            "Ácido úrico",
            "Creatinina",
            "Glucosa"
        ],
        answer: "Ácido úrico"
    },
    // Pregunta 27
    {
        question: "El uso prolongado de corticoides puede provocar:",
        options: [
            "Hipotensión",
            "Síndrome de Cushing",
            "Hipoglucemia",
            "Hipertrofia muscular"
        ],
        answer: "Síndrome de Cushing"
    },
    // Pregunta 28
    {
        question: "La Heparina actúa potenciando la acción de:",
        options: [
            "Trombina",
            "Factores de coagulación",
            "Antitrombina III",
            "Fibrinógeno"
        ],
        answer: "Antitrombina III"
    },
    // Pregunta 29
    {
        question: "Los antagonistas de los receptores de angiotensina II (ARA II) suelen terminar en:",
        options: [
            "-pril",
            "-sartán",
            "-olol",
            "-glitazona"
        ],
        answer: "-sartán"
    },
    // Pregunta 30
    {
        question: "La insulina NPH tiene un inicio de acción:",
        options: [
            "Ultrarrápido",
            "Rápido",
            "Intermedio",
            "Prolongado"
        ],
        answer: "Intermedio"
    },
    // Pregunta 31
    {
        question: "El efecto adverso más común de la Aspirina (Ácido acetilsalicílico) es:",
        options: [
            "Hepatotoxicidad",
            "Hemorragia gastrointestinal",
            "Nefrotoxicidad",
