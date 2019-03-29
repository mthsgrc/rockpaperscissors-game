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

const rulesMsg = "Choose your force: Rock beats Scissors > Scissors beats Paper > Paper beats Rock";

// Event for buttons

rulesBtn.addEventListener('click', () => alert(rulesMsg));

roundBtn.addEventListener('click', () => {
	let nround = prompt('Insert number Rounds to win the Battle:');
	roundCount = +(nround);
});


rockBtn.addEventListener('click', function(e) {

    playRound("rock");
});

paperBtn.addEventListener('click', function(e) {

    playRound("paper");
});

scissorsBtn.addEventListener('click', function(e) {

    playRound("scissors");
});

newGame.addEventListener('click', () => resetGame());

playerScoreShow.textContent = 'Player > ' + playerScore;
computerScoreShow.textContent = computerScore + ' < Enemy' ;


// Random selection option for the Computer
function computerPlay() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerResult = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerResult;
}

//Play Single Round of the Game
function playRound(playerSelection, computerSelection = computerPlay()) {

    if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")) {

        let resultDescLose = document.createElement('p');
        resultDescLose = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n You lose this round!";
        results.textContent = resultDescLose;
        computerScore++;

        playerScoreShow.textContent = 'Player > ' + playerScore;
        computerScoreShow.textContent = computerScore + ' < Enemy';
        if (computerScore == roundCount) {
            const showWinner = document.createElement('p');
            showWinner.textContent = "The Winner is Computer!";
            results.appendChild(showWinner);
            btns.classList.toggle("hidden");
            newGame.classList.toggle("hidden");

        };

        return;

    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {

        let resultDescWin = document.createElement('p');
        resultDescWin = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n You won this round!";
        results.textContent = resultDescWin;
        playerScore++;
        playerScoreShow.textContent = 'Player > ' + playerScore;
        computerScoreShow.textContent = computerScore + ' < Enemy';
        if (playerScore == roundCount) {
            const showWinner = document.createElement('p');
            showWinner.textContent = "The Winner is Player!";
            results.appendChild(showWinner);
            btns.classList.toggle("hidden");
            newGame.classList.toggle("hidden");
        };
        return;

    } else if (playerSelection == computerSelection) {
        let resultDescTie = document.createElement('p');
        resultDescTie = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n It is a tie!";
        results.textContent = resultDescTie;
        return;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    btns.classList.toggle("hidden");
    newGame.classList.toggle("hidden");
    playerScoreShow.textContent = 'Player: ' + playerScore;
    computerScoreShow.textContent = 'Enemy: ' + computerScore;
    results.textContent = "";
    return;

}