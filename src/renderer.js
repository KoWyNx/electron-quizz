const quizContainer = document.getElementById('app');
let questionContainer = document.getElementById('question-container');
let optionsContainer = document.getElementById('options-container');

const quizData = [
    {
        question: "Quelle est la capitale de la France ?",
        options: [ "Berlin", "Paris", "Londres", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Qui a écrit 'Harry Potter' ?",
        options: ["Stephen King", "George Orwell","J.K. Rowling", "Mark Twain"],
        answer: "J.K. Rowling"
    },
    {
        question: "Quel film a été réalisé par Christopher Nolan et met en scène la manipulation des rêves ?",
        options: ["Inception", "Interstellar", "The Dark Knight", "Memento"],
        answer: "Inception"
    },
    {
        question: "Quelle série télévisée met en vedette un professeur de chimie devenu producteur de méthamphétamine ?",
        options: [ "The Wire", "Narcos", "Ozark", "Breaking Bad"],
        answer: "Breaking Bad"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => {
            checkAnswer(option);
        });
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct !");
    } else {
        alert("Mauvaise réponse. La bonne réponse était : " + currentQuestion.answer);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showQuizEnd();
    }
}

function showQuizEnd() {
    quizContainer.innerHTML = `
        <h2>Quiz terminé !</h2>
        <button id="restart-btn">Recommencer le quiz</button>
    `;
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    quizContainer.innerHTML = `
        <h1>Quiz App</h1>
        <div id="question-container"></div>
        <div id="options-container"></div>
    `;
    questionContainer = document.getElementById('question-container');
    optionsContainer = document.getElementById('options-container');
    loadQuestion();
}

loadQuestion();