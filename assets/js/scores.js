function getHighScores() {
    var scores = JSON.parse(localStorage.getItem("highscores")) || [];
    scores.sort((a, b)=>{return b.score-a.score;});
    scores.forEach(score => {
        var listEl = document.createElement("li");
        listEl.textContent = `${score.initials} -- ${score.highscore}`;
        var olEl = document.getElementById("highscoreEl");
        olEl.appendChild(listEl)
    });
}

getHighScores();