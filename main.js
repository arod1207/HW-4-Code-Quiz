var startBtn = document.querySelector('.startBtn');
var quiz = document.querySelector('#quiz');
var question = document.querySelector('#question');
var counter = document.querySelector('#counter');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var button4 = document.querySelector('#button4');
var displayScore = document.querySelector('#displayScore');
var inGameTimer = document.querySelector('#inGameTimer');
var scoreContainer = document.querySelector('#score-container');
var timerContainer = document.querySelector('#timer-container');
var timer = document.querySelector('#timer');
var score = 0;
var startTime = 1;
var timeLeft = startTime * 60;




var quizQuestions = [
    {
        question : "This is question 1?",
        choice1 : "Correct",
        choice2 : "Wrong",
        choice3 : "Wrong",
        choice4 : "Wrong",
        correct : "A",
    },
    {
        question : "This is question 2?",
        choice1 : "Wrong",
        choice2 : "Correct",
        choice3 : "Wrong",
        choice4 : "Wrong",
        correct : "B",
    },
    {
        question : "This is question 3?",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Correct",
        choice4 : "Wrong",
        correct : "C",
    },
    {
        question : "This is question 4?",
        choice1 : "Wrong",
        choice2 : "Wrong",
        choice3 : "Wrong",
        choice4 : "Correct",
        correct : "D",
    }
]



var lastQuestion = quizQuestions.length - 1;
var currentQuestion = 0;

function renderQuestion(){
    var questionsToAsk = quizQuestions[currentQuestion];

    question.innerHTML = "<p>" + questionsToAsk.question + "</p>";
    button1.innerHTML = questionsToAsk.choice1;
    button2.innerHTML = questionsToAsk.choice2;
    button3.innerHTML = questionsToAsk.choice3;
    button4.innerHTML = questionsToAsk.choice4;

    console.log(questionsToAsk)
} 

startBtn.addEventListener('click', startQuiz);

function startQuiz(){
    startBtn.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    timerContainer.style.display = "block";
    setInterval(gameTimer, 1000);
    timer.innerHTML = timeLeft;
    
};

// TRYING DIFFERENT WAYS TO CHECK THAT IF ITS TRUE OR NOT //
button1.addEventListener('click', function() { checkAnswer("A") } );
button2.addEventListener('click', function() { checkAnswer("B") } );
button3.addEventListener('click', function() { checkAnswer("C") } );
button4.addEventListener('click', function() { checkAnswer("D") } );

// CHECK ANSWER //
function checkAnswer(answer){
    if(answer == quizQuestions[currentQuestion].correct){
        console.log("correct")
        document.body.style.background = "green";
        score++
        console.log(score);
    } else {
        console.log("wrong")
        document.body.style.background = "red";
         
    }
    var questionCount = 0;
    if(currentQuestion < lastQuestion){
        currentQuestion++
        renderQuestion()
    }else{
        highScore();
    }
}
function highScore(){
    document.body.style.background = "pink"
    quiz.style.display = "none";
    scoreContainer.style.display = "block";
    displayScore.innerHTML = score;
}

function gameTimer(){
   var minutes = Math.floor(timeLeft / 60);
   var seconds = timeLeft % 60;
   timer.innerHTML = `${minutes}:${seconds}`;
   timeLeft--;
   if (timeLeft == 0){
       alert("Time's UP!")
   }
}

// }
// function restartGame(){
//     if
// }
