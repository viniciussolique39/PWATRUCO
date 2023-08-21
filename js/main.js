window.onload = () => {
    "use strict";
    
    if("serviceWorker" in navigator){
       navigator.serviceWorker.register("./sw.js");
    }
};


let currentScore = 0;

const scoreElement = document.getElementById('score');
const umPontoButton = document.getElementById('umPonto');
const tresPontosButton = document.getElementById('tresPontos');
const seisPontosButton = document.getElementById('seisPontos');
const dozePontosButton = document.getElementById('dozePontos');
const resetButton = document.getElementById('reset');


function adicionarPontos(pontos) {
    currentScore += pontos;
    scoreElement.textContent = currentScore;
}

function resetScore() {
    currentScore = 0;
    scoreElement.textContent = currentScore;
}

umPontoButton.addEventListener('click', () => adicionarPontos(1));
tresPontosButton.addEventListener('click', () => adicionarPontos(3));
seisPontosButton.addEventListener('click', () => adicionarPontos(6));
dozePontosButton.addEventListener('click', () => adicionarPontos(12));
resetButton.addEventListener('click', resetScore);


  