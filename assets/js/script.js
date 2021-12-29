var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var contentDiv = document.getElementById("content");
var qDiv = document.getElementById("questions");

var time = 100;
var timerInterval;

var gameIndex = -1;


function startQuiz() {
    timerEl.textContent = time;
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
    var initials = prompt("What're your initials?");
    var highscore = timerEl.textContent
    console.log(highscore)
    if( initials !== "") {
        var scores = JSON.parse(localStorage.getItem("highscores")) || [];
        var userScore = {
            initials,
            highscore
        }
        scores.push(userScore)
        localStorage.setItem("highscores",JSON.stringify(scores))
        window.location.href = "scores.html"
    } 
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
        btnEl.setAttribute("value", question.choices[i]);
        questionDiv.append(btnEl);
    }
    qDiv.append(questionDiv);
}


function checkAnswer() {
    if (this.value !== questions[gameIndex].answer) {
        time -= 10
        if (time < 0 ) {
            time = 0 
        }
        timerEl.textContent = time
    }   

    gameIndex++;
    if (gameIndex === questions.length) {
        endQuiz()
    } else {
        showQuestion()
    }
}


startBtn.onclick = startQuiz;