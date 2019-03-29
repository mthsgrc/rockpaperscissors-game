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
const rulesBtn = document.querySelector('.rules-btn');
const roundBtn = document.querySelector('.round-btn');

const playerChoice = document.querySelector('.pl-ch');
const enemyChoice = document.querySelector('.en-ch');


const rulesMsg = "Choose your force: \nRock beats Scissors > Scissors beats Paper > Paper beats Rock";

playerScoreShow.textContent = 'Player > ' + playerScore;
computerScoreShow.textContent = computerScore + ' < Enemy';


//  ::::   Event for buttons  ::::


// Rules Button
rulesBtn.addEventListener('click', () => alert(rulesMsg));


// Rounds Button
roundBtn.addEventListener('click', () => {
    let nround = prompt('Insert number Rounds to win the Battle:');
    roundCount = +(nround);
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
		playerChoice.classList.remove('rock-img', 'paper-img','scissors-img');
		enemyChoice.classList.remove('rock-img', 'paper-img','scissors-img');

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

        let resultDescLose = document.createElement('p');

        resultDescLose = "YOU LOSE!";
        results.textContent = resultDescLose;
        computerScore++;

        playerScoreShow.textContent = 'Player > ' + playerScore;
        computerScoreShow.textContent = computerScore + ' < Enemy';
        if (computerScore == roundCount) {
            const showWinner = document.createElement('p');
            showWinner.textContent = "The Winner is Computer!";
            results.appendChild(showWinner);

        };

        return;

    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        let resultDescWin = document.createElement('p');
        resultDescWin = "YOU WIN!";
        results.textContent = resultDescWin;
        playerScore++;
        playerScoreShow.textContent = 'Player > ' + playerScore;
        computerScoreShow.textContent = computerScore + ' < Enemy';
        if (playerScore == roundCount) {
            const showWinner = document.createElement('p');
            showWinner.textContent = "The Winner is Player!";
            results.appendChild(showWinner);
        };
        return;

    } else if (playerSelection == computerSelection) {
        let resultDescTie = document.createElement('p');
        resultDescTie = "IT\'S A TIE!";
        results.textContent = resultDescTie;
        return;
    }
}


//Reset Game Function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreShow.textContent = 'Player > ' + playerScore;
    computerScoreShow.textContent = computerScore + ' < Enemy';
    results.textContent = "";
    return;

}