var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var contentDiv = document.getElementById("content");
var qDiv = document.getElementById("questions");

var time = 100;
var timerInterval;

var gameIndex = -1;


function startQuiz() {
    timerEl. textContent = time;
    timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time;
        if(time <= 0) {
            endQuiz();
        }
    }, 1000);

    gameIndex++;
    showQuestion();
}


function endQuiz() {
    clearInterval(timerInterval);
}


function showQuestion() {
    var question = questions[gameIndex];
    qDiv.innerHTML = '';
    var questionDiv = document.createElement("div");
    var titleP = document.createElement("p");
    titleP.textContent = question.title;
    questionDiv.append(titleP);

    for (var i = 0; i < question.choices.length; i++) {
        var btnEl = document.createElement("button");
        var choice = question.choices[i];
        btnEl.textContent = choice;
        btnEl.onclick = checkAnswer;
        btnEl.setAttribute("data-answer", question.answer);
        questionDiv.append(btnEl);
    }
    qDiv.append(questionDiv);
}


function checkAnswer(choice, answer) {
    var answer = event.target.getAttribute("data-answer");
    var choice = event.target.textContent;
    if (choice === answer) {
        console.log("CORRECT!")
    } 
    else {
        time -= 10;
        console.log("WRONG")
    }
    gameIndex++;
    showQuestion();
}


startBtn.onclick = startQuiz;


// var question = questions[gameIndex];

// var questionDiv = document.createElement("div");
// var titleP = document.createElement("p");
// titleP.textContent = question.title;