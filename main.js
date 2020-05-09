var startBtn = document.querySelector('#startBtn');
var question = document.querySelector('#question');
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var button4 = document.querySelector('#button4');
var restartBtn1 = document.querySelector('#restartBtn1');
var restartBtn2 = document.querySelector('#restartBtn2');
var clearBtn = document.querySelector('#clearScoresBtn');
var title = document.querySelector('#title');
var displayScore = document.querySelector('#displayScore');
var scoreContainer = document.querySelector('#score-container');
var quizContainer = document.querySelector('#quiz-container');
var highScoreContainer = document.querySelector('#highScore-container');
var gameOverContainer = document.querySelector('#gameOver-container'); 
var highScoresList = document.querySelectorAll('li');
var form = document.querySelector('#addName');
var quizScores = document.querySelector('#quizScores');
var timer = document.querySelector('#timer');
var questionCount = 0;
var score = 0;
var timeLeft = 30;
var stopTime;
var highScoreArray = [];


//  questions to ask //
var quizQuestions = [
    {
        question : "What is the capital of Texas?",
        choice1 : "San Antonio",
        choice2 : "Austin",
        choice3 : "Dallas",
        choice4 : "Houston",
        correct : "B",
    },
    {
        question : "What is the capital of New Mexico?",
        choice1 : "Taos",
        choice2 : "Las Cruces",
        choice3 : "Albuquerque",
        choice4 : "Santa Fe",
        correct : "D",
    },
    {
        question : "What is the capital of Colorado?",
        choice1 : "Colorado Springs",
        choice2 : "Boulder",
        choice3 : "Denver",
        choice4 : "Aspen",
        correct : "C",
    },
    {
        question : "What is the capital of New York?",
        choice1 : "Albany",
        choice2 : "Buffalo",
        choice3 : "Rochester",
        choice4 : "Queens",
        correct : "A",
    }
]


//  goes through the questions and assigns them to <p> and to the <buttons>  //
var lastQuestion = quizQuestions.length - 1;
var currentQuestion = 0;

function renderQuestion(){
    var questionsToAsk = quizQuestions[currentQuestion];

    question.innerHTML = "<p>" + questionsToAsk.question + "</p>";
    button1.innerHTML = questionsToAsk.choice1;
    button2.innerHTML = questionsToAsk.choice2;
    button3.innerHTML = questionsToAsk.choice3;
    button4.innerHTML = questionsToAsk.choice4;

    
} 


// This starts the quiz //
startBtn.addEventListener('click', startQuiz);

function startQuiz(){
    title.style.display = "none";
    startBtn.style.display = "none";
    document.body.style.background = 'blue';
    renderQuestion();
    quizContainer.style.display = "block";
    stopTime = setInterval(gameTimer, 1000);
    timer.innerHTML = timeLeft;
    
};

// Adding click function and assigning a letter to check if answer is correct in the array//
button1.addEventListener('click', function() { checkAnswer("A") } );
button2.addEventListener('click', function() { checkAnswer("B") } );
button3.addEventListener('click', function() { checkAnswer("C") } );
button4.addEventListener('click', function() { checkAnswer("D") } );

// CHECK ANSWER //
function checkAnswer(answer){
     if(answer == quizQuestions[currentQuestion].correct){
        score++
        answerIsCorrect();
    } else if (answer != quizQuestions[currentQuestion].correct) {
        answerIsWrong();
       
    } 
    if (currentQuestion < lastQuestion) {
            currentQuestion++
            renderQuestion();       
    }else {
        finaleScore();
    }
}

//If answer is correct //
function answerIsCorrect(){
document.body.style.background = "green";
}

//If answer is wrong //
function answerIsWrong(){
    document.body.style.background = "red";
    }


// Go to final Code Screen //
function finaleScore(){
    document.body.style.background = "gold"
    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";
    highScoreContainer.style.display = 'none';
    displayScore.innerHTML = score; 
}


// add highScore
form.addEventListener('submit', addNames);

    function addNames(e) {
    e.preventDefault();
    // created a variable to take in a new name from the input box //
    var newName = document.querySelector('#names').value;
    //  created a new list item to place the name in //
    var li = document.createElement('li');
    // gave it a class name so i can style it in css //
    li.className = 'highScoreList';
    // added the name into an li //
    li.appendChild(document.createTextNode(newName));
    // add the 
    quizScores.appendChild(li);
    // li.textContent = `${newName} you got ${quizScores} right`
    li.appendChild(document.createTextNode(score));
    li.textContent = `${newName} you got ${score} right`

    highScoreContainer.style.display = 'block';
    scoreContainer.style.display = 'none';
    }
    

// the countdown timer for my game //
function gameTimer(){
   timeLeft--;
   timer.innerHTML = `${timeLeft}`; 
   if (timeLeft <= 0){
    clearInterval(stopTime);
    gameOverIncomplete()
   }
   else if (currentQuestion >= lastQuestion){
       clearInterval(stopTime)
        gameOverComplete();
   }
}

function gameOverComplete() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';

}

function gameOverIncomplete() {
    quizContainer.style.display = 'none';
    gameOverContainer.style.display = 'block';
    document.body.style.background = 'red';
}


// Restart The Game //
restartBtn1.addEventListener('click', function() {
    document.location.href = '';

});
restartBtn2.addEventListener('click', function(){
    document.location.href = '';
});


