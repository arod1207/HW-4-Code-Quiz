var startBtn = document.querySelector('.startBtn');
var quiz = document.querySelector('#quiz');
var question = document.querySelector('#question');
var counter = document.querySelector('#counter');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var button4 = document.querySelector('#button4');
var socre = document.querySelector('#score');
var score = 0;


var quizQuestions = [
    {
        question : "This is question 1?",
        answer1 : "Correct",
        answer2 : "wrong",
        answer3 : "Wrong",
        answer4 : "Wrong",
        correct : "A",
    },
    {
        question : "This is question 2?",
        answer1 : "Wrong",
        answer2 : "Correct",
        answer3 : "Wrong",
        answer4 : "Wrong",
        correWrong : "B",
    },
    {
        question : "This is question 3?",
        answer1 : "Wrong",
        answer2 : "Wrong",
        answer3 : "Correct",
        answer4 : "Wrong",
        correWrong : "C",
    },
    {
        question : "This is question 4?",
        answer1 : "Wrong",
        answer2 : "Wrong",
        answer3 : "Wrong",
        answer4 : "Correct",
        correct : "D",
    },
]



var lastQuestion = quizQuestions.length - 1;
var runningQuestion = 0;

function renderQuestion(){
    var questionsToAsk = quizQuestions[runningQuestion];

    question.innerHTML = "<p>" + questionsToAsk.question + "</p>";
    button1.innerHTML = questionsToAsk.answer1;
    button2.innerHTML = questionsToAsk.answer2;
    button3.innerHTML = questionsToAsk.answer3;
    button4.innerHTML = questionsToAsk.answer4;

    console.log(questionsToAsk.answer1)
}

startBtn.addEventListener('click', startQuiz);

function startQuiz(){
    startBtn.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
};

// CHECK ANSWER //
function checkAnswer(answer){
    if(answer == quizQuestions[runningQuestion].correct){
        score++
    } else {
         
    }
}

// function renderCounter() {
//     let count = 0;
//     var quizTime = 100; seconds
//     if(count <= quiztime){
//         counter.innerHTML = count
//     }


