const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const questionEl = document.getElementById("question")
const radioBtnEls = document.querySelectorAll(".radio_btn");
const answerAEl = document.getElementById("a_a")
const answerBEl = document.getElementById("a_b")
const answerCEl = document.getElementById("a_c")
const answerDEl = document.getElementById("a_d")
const submitButton = document.getElementById("submit_button");


let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuestionData = quizData[currentQuestion];

    questionEl.innerText = currentQuestionData.question;
    answerAEl.innerText = currentQuestionData.a;
    answerBEl.innerText = currentQuestionData.b;
    answerCEl.innerText = currentQuestionData.c;
    answerDEl.innerText = currentQuestionData.d;
}

function getSelected() {
    let answer = undefined;

    radioBtnEls.forEach((radioBtnEl) => {
        if (radioBtnEl.checked) {
            radioBtn = radioBtnEl.tagName;
        }
    });

    return radioBtn;
}


function deselectAnswers() {
    radioBtnEls.forEach((radioBtnEl) => {
        radioBtnEl.checked = false;
    });
}

submitButton.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            questionEl.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});