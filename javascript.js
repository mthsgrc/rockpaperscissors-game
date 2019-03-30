let playerScore = 0;
let computerScore = 0;
let playerSelection;
let roundCount = 3;
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerScoreShow = document.querySelector('.playerScore');
const computerScoreShow = document.querySelector('.computerScore');
const newGame = document.querySelector('.newgame');
const results = document.querySelector('.results');
const resultStyle = document.querySelector('.result-style'); 
const rulesBtn = document.querySelector('.rules-btn');
const roundBtn = document.querySelector('.round-btn');
const choiceBtn = document.querySelectorAll('.rps-choice-btn');

const playerChoice = document.querySelector('.pl-ch');
const enemyChoice = document.querySelector('.en-ch');


const rulesMsg = "Choose your force: \nRock beats Scissors > Scissors beats Paper > Paper beats Rock \nYou can change number of rounds in the Round Button.";

updateScore();


//  ::::   Event for buttons  ::::


// Rules Button
rulesBtn.addEventListener('click', () => alert(rulesMsg));


// Rounds Button
roundBtn.addEventListener('click', () => {
    let nround = prompt('Insert number of rounds to win Battle:');
    roundCount = +(nround);
    resetGame();
});


// Rock Paper Scissors Listeners Button
rockBtn.addEventListener('click', function(e) {

    playRound("rock");
});

paperBtn.addEventListener('click', function(e) {

    playRound("paper");
});

scissorsBtn.addEventListener('click', function(e) {

    playRound("scissors");
});


// New Game Button
newGame.addEventListener('click', () => resetGame());



// Random selection option for the Computer
function computerPlay() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerResult = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerResult;
}


// Set chosen players icons in battle display
function setPlayersIcon(playerIcon, computerIcon) {
    playerChoice.classList.remove('rock-img', 'paper-img', 'scissors-img');
    enemyChoice.classList.remove('rock-img', 'paper-img', 'scissors-img');

    switch (playerIcon) {
        case 'rock':
            playerChoice.classList.add('rock-img');
            break;
        case 'paper':
            playerChoice.classList.add('paper-img');
            break
        default:
            playerChoice.classList.add('scissors-img');
    }
    switch (computerIcon) {
        case 'rock':
            enemyChoice.classList.add('rock-img');
            break;
        case 'paper':
            enemyChoice.classList.add('paper-img');
            break
        default:
            enemyChoice.classList.add('scissors-img');
    }
}


//Play Single Round of the Game
function playRound(playerSelection, computerSelection = computerPlay()) {

    setPlayersIcon(playerSelection, computerSelection);


    if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {

        let resultDescLose;
      	// resultDescLose = document.createElement('h2');
        resultDescLose = "You Lose!";
        resultStyle.textContent = resultDescLose;
        computerScore++;

        updateScore();
        checkWinner();
        return;

    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        // let resultDescWin = document.createElement('h2');
        resultDescWin = "You win!";
        resultStyle.textContent = resultDescWin;
        playerScore++;

        updateScore();
        checkWinner();

        return;

    } else if (playerSelection == computerSelection) {
        // let resultDescTie = document.createElement('h2');
        resultDescTie = "It is a Tie!";
        resultStyle.textContent = resultDescTie;
        return;
    }
}


//Reset Game Function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    showBtns();
    resultStyle.textContent = "";
    return;
}

//Update Score value
function updateScore() {
    playerScoreShow.textContent = 'Player > ' + playerScore;
    computerScoreShow.textContent = computerScore + ' < Enemy';

}


function checkWinner() {
    if (computerScore == roundCount) {
        const showWinner = document.createElement('h2');
        showWinner.textContent = "COMPUTER WINS GAME";
        resultStyle.appendChild(showWinner);
        hideBtns()


    } else if (playerScore == roundCount) {
        const showWinner = document.createElement('h2');
        showWinner.textContent = "PLAYER WINS GAME!";
        resultStyle.appendChild(showWinner);
        hideBtns()

    };
}

function hideBtns() {
    rockBtn.classList.add('hidden');
    paperBtn.classList.add('hidden');
    scissorsBtn.classList.add('hidden');
}

function showBtns() {
    rockBtn.classList.remove('hidden');
    paperBtn.classList.remove('hidden');
    scissorsBtn.classList.remove('hidden');
}