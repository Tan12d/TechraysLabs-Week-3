const questions = [
    {
        question: "HTML is considered as _____ language",
        answers: [
            { text: "Programming Language", correct: true },
            { text: "OOP Language", correct: false },
            { text: "High Level Language", correct: false },
            { text: "Markup Language", correct: false }
        ]
    }, 

    {
        question: "What is triggered when a user clicks a mouse button?",
        answers: [
            { text: "A property", correct: false },
            { text: "A function", correct: false },
            { text: "A click", correct: false },
            { text: "An event", correct: true }
        ]
    }, 

    {
        question: "The full form of CSS is:",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false }
        ]
    },

    {
        question: "Which of the following is not a valid CSS selector?",
        answers: [
            { text: "Class selector", correct: false },
            { text: "ID selector", correct: false },
            { text: "Element selector", correct: false },
            { text: "Group selector", correct: true }
        ]
    }, 

    {
        question: "Which of the following is the property that is triggered in response to JS errors?",
        answers: [
            { text: "onclick", correct: false },
            { text: "onerror", correct: true },
            { text: "onmessage", correct: false },
            { text: "onexception", correct: false }
        ]
    },
];

const question = document.getElementById("question");
const answers = document.getElementById("answers"); 
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    question.innerText = questionNumber + ". " + currentQuestion.question;
    
    // for(let i=0; i<currentQuestion.answers.length; i++) {        
    //     document.getElementById(`opt${i+1}`).innerHTML = currentQuestion.answers[i].text;
    // }

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("option");
        answers.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while(answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answers.children).forEach((button) => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    if(score>3) 
    {
        
        question.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
            <img src="Trophy.png" alt="Trophy" width="150" />
        </div>
    `;
        answers.innerHTML = `<h2 style="text-align: center; font-size: 24px; font-weight: bold">You scored ${score} out of ${questions.length}!</h2>`;
        nextBtn.innerHTML = "Play Again";
        nextBtn.style.display = "block";
    }

    else {
        question.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
            <img src="sadEmoji.webp" alt="Trophy" width="150" />
        </div>
    `;
    answers.innerHTML = `<h2 style="text-align: center; font-size: 24px; font-weight: bold">You scored ${score} out of ${questions.length}! <br /> Try Again!!!</h2>`;
        
        nextBtn.innerHTML = "Play Again";
        nextBtn.style.display = "block";
    }
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();