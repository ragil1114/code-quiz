function getHighScores() {
    var scores = JSON.parse(localStorage.getItem("highscores")) || [];
    scores.forEach(score => {
        console.log(score)
    });
}
getHighScores();