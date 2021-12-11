var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var contentDiv = document.getElementById("content")

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

    var question = questions[gameIndex];

    var questionDiv = document.createElement("div");
    var titleP = document.createElement("p");
    titleP.textContent = question.title;

    for(var i = 0; i < question.choices.length; i++) {
        var btnEl = document.createElement("button");
        var choice = question.choices[i];
        btnEl.textContent = question.choices[1];
        btnEl.onclick = checkAnswer
        btnEl.setAttribute("data-answer", question.answer);
        questionDiv.append(btnEl);
    }
    contentDiv.append(questionDiv);
}

function endQuiz() {
    clearInterval(timerEl);
}

function showQuestion() {
    var question = questions[gameIndex];
    qDiv.innerHTML = '';
    var questionDiv = document.createElement("div");
    var titleP = document.createElement("p");
    titleP.textContent = qu
}

function checkAnswer(choice, answer) {
    var answer = event.target.getAttribute("data-answer");
    var choice = event.target.textContent;
    if (choice === answer) {
        console.log("You got it right!")
    
    } else {
        time -= 10;
    }
    gameIndex++;
    showQuestion
}

startBtn.onclick = startQuiz;