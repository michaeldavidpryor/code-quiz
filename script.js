// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "I am the architect and father of the brigade system used in kitchens to this day",
        imgSrc : "img/Escoffier.jpeg",
        choiceA : "Who is Auguste Escoffier?",
        choiceB : "Who is Gordan Ramsey?",
        choiceC : "Who is Ruth Reichl?",
        correct : "A"
    },{
        question : "I authored the collection Modernist Cuisine and was formally the first Chief Technology Officer at Microsoft?",
        imgSrc : "img/myhrvold.jpeg",
        choiceA : "Who is Elon Musk?",
        choiceB : "Who is Nathan Myhrvold?",
        choiceC : "Who is Bill Gates?",
        correct : "B"
    },{
        question : "I own the 3 Michelin Star restaurant in Chicago, Alinea, and lost my sense of taste after developing tongue cancer? (I got it back though)",
        imgSrc : "img/achatz.png",
        choiceA : "Who is Charlie Trotter?",
        choiceB : "Who is Guy Fieri?",
        choiceC : "Who is Grant Achatz?",
        correct : "C"
    }
];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


function renderCounter() {
    if (runningQuestion < lastQuestion){
runningQuestion++;
        renderQuestion();
    }
    else {
        // end the quiz and show the score
        scoreRender();
        }
    }


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/ramseynice.jpeg" :
              (scorePerCent >= 60) ? "img/ramsey.jpeg" :
              (scorePerCent >= 40) ? "img/ramsey.jpeg" :
              (scorePerCent >= 20) ? "img/ramsey.jpeg" :
              "img/ramsey.jpeg";
             
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
            
}