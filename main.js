// 1 is rock, 2 is paper, 3 is scissors

//window.onload = init;
//function init() {
const rButton = document.getElementById('rButton');
const pButton = document.getElementById('pButton');
const sButton = document.getElementById('sButton');
const resultBox = document.getElementById('resultBox')
const pScoreBox = document.getElementById('pScoreBox');
const cScoreBox = document.getElementById('cScoreBox');
const retryBtn = document.getElementById('retryBtn');

rButton.addEventListener('click', () => round("Rock", getComputerChoice()));
pButton.addEventListener('click', () => round("Paper", getComputerChoice()));
sButton.addEventListener('click', () => round("Scissors", getComputerChoice()));
retryBtn.addEventListener('click', () => retryGame());
//startButton.addEventListener('click', () => {game(5)})
//}

let pScore = 0;
let cScore = 0;

function getComputerChoice() {
    let cChoice = Math.ceil(Math.random() * 3);
    switch (cChoice) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"
            break;
    }
}



function round(pChoice, cChoice) {
    //stop score above 5 when game ends
    if(pScore === 5 || cScore === 5) {
        return;
    }    

    let message = ``;
    if (pChoice.toLowerCase() === cChoice.toLowerCase()) {
        message = `Tie! ${cChoice} ties with ${cChoice}`
    }
    else if ((pChoice === "Rock" && cChoice === "Paper") || (pChoice === "Paper" && cChoice === "Scissors") || (pChoice === "Scissors" && cChoice === "Rock")) {
        message = `You Lose! ${cChoice} beats ${pChoice}`;
        cScoreBox.textContent = `Computer Score: ${++cScore}`;
        
    } else {
        message = `You Win! ${pChoice} beats ${cChoice}`;
        pScoreBox.textContent = `Player Score: ${++pScore}`;
    }
    

    if(pScore === 5) {
        message = `Congratulations, You Won!`
    } else if (cScore === 5) {
        message = `Sorry, You Lost!`;
    }
    resultBox.textContent = message;
}


function retryGame() {
    cScore = 0;
    pScore = 0;
    cScoreBox.textContent = `Computer Score: ${cScore}`;
    pScoreBox.textContent = `Player Score: ${pScore}`;
    resultBox.textContent = 'Pick Rock, Paper, or Scissors to Start The Game';
}




/*
function game(rounds) {
    let pScore = 0;
    let cScore = 0;

    for (let i = 0; i < rounds; i++) {
        let pChoice = getInput();
        let cChoice = getComputerChoice();
        let message = round(pChoice, cChoice);
        console.log(message);

        if (message.match("Win!")) {
            pScore++;
        } else if (message.match("Lose!")) {
            cScore++;
        }
        console.log(`Score: ${pScore} - ${cScore}`)
    }

    if (pScore > cScore) {
        console.log(`You Won the Game! The Score was ${pScore} - ${cScore}`);
    } else if (cScore > pScore) {
        console.log(`You Lost the Game! The Score was ${pScore} - ${cScore}`);
    } else {
        console.log(`You Tied the Game! The Score was ${pScore} - ${cScore}`);
    }

    let numRounds = retryGame();

    if(numRounds !== null) {
        console.log(`Starting new game! Number of rounds: ${numRounds}`)
        game(numRounds);
    }



}
*/

//makes sure that can use button to start game

//const startButton = document.getElementById('#startButton');

/*
function getInput() {
    let pChoice = prompt("Enter Your Selection (Rock, Paper, or Scissors):").toLowerCase();
    if (pChoice === "rock" || pChoice === "scissors" || pChoice === "paper") {
        pChoice = pChoice.slice(0, 1).toUpperCase() + pChoice.slice(1);
        return pChoice;
    }
    console.log("Invalid Input! Try Again")
    return getInput();
}
*/

