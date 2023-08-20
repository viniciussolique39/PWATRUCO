window.onload = () => {
    "use strict";
    
    if("serviceWorker" in navigator){
       navigator.serviceWorker.register("./sw.js");
    }
};

// Variável para armazenar a pontuação atual
let currentScore = 0;

// Selecionar os elementos do DOM
const scoreElement = document.getElementById('score');
const onePointButton = document.getElementById('onePoint');
const threePointsButton = document.getElementById('threePoints');
const sixPointsButton = document.getElementById('sixPoints');
const twelvePointsButton = document.getElementById('twelvePoints');
const resetButton = document.getElementById('reset');

// Funções para atualizar a pontuação
function addPoints(points) {
    currentScore += points;
    scoreElement.textContent = currentScore;
}

function resetScore() {
    currentScore = 0;
    scoreElement.textContent = currentScore;
}

// Adicionar event listeners aos botões
onePointButton.addEventListener('click', () => addPoints(1));
threePointsButton.addEventListener('click', () => addPoints(3));
sixPointsButton.addEventListener('click', () => addPoints(6));
twelvePointsButton.addEventListener('click', () => addPoints(12));
resetButton.addEventListener('click', resetScore);


  