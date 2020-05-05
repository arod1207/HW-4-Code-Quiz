var startButton = document.querySelector(".start-btn");
var button1 = document.createElement('button');
var button2 =  document.createElement('button');
var button3 =  document.createElement('button');
var button4 =  document.createElement('button');
var title = document.querySelector('.header-start');
var answerButtons = document.querySelector('.answerButtons');
var questions = document.querySelector('.questions');
var question = ''
var answer1 = '';
var answer2 = '';
var answer3 = '';




startButton.addEventListener('click', startQuiz);

//Starts the quiz,  it hides the title display and brings up the first question//
function startQuiz(){
   title.style.display = 'none';
   button1.innerHTML = ('answer1');
   button1.className = "btns";
   document.body.appendChild(button1);
   button2.innerHTML = ('answer2');
   button2.className = "btns";
   document.body.appendChild(button2);
   button3.innerHTML = ('answer3');
   button3.className = "btns";
   document.body.appendChild(button3);
//    questions.textContent = quizQuestions[0].question;
   
}
// Quiz Questions in an array //
var quizQuestions = [
    {
        question: "What is the capital of Texas?",
        answer: {
            a: "San Antonio",
            b: "Austin",
            c: "Dallas",
        },
        correctAnswer: "b"
    },
    {
        question: "What year was the Battle at the Alamo?",
        answer: {
            a: "1898",
            b: "1803",
            c: "1836",
        },
        correctAnswer: "c"
    },
    {
        question: "What is the state flower of Texas?",
        answer: {
            a: "Yellow Rose",
            b: "Bluebonnet",
            c: "Cactus",
        },
        correctAnswer: "b"
    },
]

 // loop through the area  for questions and answers //
for (var i = 0; i < quizQuestions.length; i++){
    if (quizQuestions[0] == "b"){
        console.log('correct')
    } else {
        console.log('wrong');
    }
}