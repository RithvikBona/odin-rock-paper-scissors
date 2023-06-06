// 1 is rock, 2 is paper, 3 is scissors



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
    if (pChoice.toLowerCase() === cChoice.toLowerCase()) {
        return `Tie! ${cChoice} ties with ${cChoice}`;
    }
    if ((pChoice === "Rock" && cChoice === "Paper") || (pChoice === "Paper" && cChoice === "Scissors") || (pChoice === "Scissors" && cChoice === "Rock")) {
        return `You Lose! ${cChoice} beats ${pChoice}`;
    }
    return `You Win! ${pChoice} beats ${cChoice}`;
}

function getInput() {
    let pChoice = prompt("Enter Your Selection (Rock, Paper, or Scissors):").toLowerCase();
    if (pChoice === "rock" || pChoice === "scissors" || pChoice === "paper") {
        pChoice = pChoice.slice(0, 1).toUpperCase() + pChoice.slice(1);
        return pChoice;
    }
    console.log("Invalid Input! Try Again")
    return getInput();
}
function retryGame() {
    let replay = prompt("Would you like to play again? (Y/N)").toLowerCase();

    if (replay === "y") {

        let numRounds = null;

        while (true) {
            numRounds = Number(prompt("How many rounds?"));
            if (typeof (numRounds) === "number" && numRounds > 0) { break; }
            console.log("Not a valid number, try again")
        }
        return numRounds;


    } else if (replay === "n") {
        console.log("Goodbye, thank you for playing!");
        return null;
    } else {
        console.log("Invalid Input! Try Again");
        return retryGame();
    }
}




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

//makes sure that can use button to start game
window.onload = init;
function init() {
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', () => {game(5)})
}
//const startButton = document.getElementById('#startButton');



