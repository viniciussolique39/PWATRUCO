window.onload = () => {
    "use strict";
    
    if("serviceWorker" in navigator){
       navigator.serviceWorker.register("./sw.js");
    }
};

const team1PointsElement = document.getElementById('team1Points');
const team2PointsElement = document.getElementById('team2Points');
const team1WinsElement = document.getElementById('team1Wins');
const team2WinsElement = document.getElementById('team2Wins');
const team1ScoreButton = document.getElementById('team1ScoreButton');
const team2ScoreButton = document.getElementById('team2ScoreButton');
const resetButton = document.getElementById('resetButton');


let team1Points = 0;
let team2Points = 0;
let team1Wins = 0;
let team2Wins = 0;

team1ScoreButton.addEventListener('click', () => {
    team1Points += 1;
    updatePoints();
});

team2ScoreButton.addEventListener('click', () => {
    team2Points += 1;
    updatePoints();
});

resetButton.addEventListener('click', () => {
    team1Points = 0;
    team2Points = 0;
    updatePoints();
});

function updatePoints() {
    team1PointsElement.textContent = team1Points;
    team2PointsElement.textContent = team2Points;

    if (team1Points === 12) {
        team1Wins++;
        team1WinsElement.textContent = team1Wins;
        resetGame();
    } else if (team2Points === 12) {
        team2Wins++;
        team2WinsElement.textContent = team2Wins;
        resetGame();
    }
}

function resetGame() {
    team1Points = 0;
    team2Points = 0;
    team1PointsElement.textContent = 0;
    team2PointsElement.textContent = 0;
}

  