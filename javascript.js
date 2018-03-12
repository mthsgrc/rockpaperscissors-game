
let playerScore = 0;
let computerScore = 0;
// let computerSelection = computerPlay();
let playerSelection;

// Event for buttons
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function(e){
	// computerSelection = computerPlay()
	playerSelection = rockBtn.id;
	playRound("rock");
});


const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function(e){
	// computerSelection = computerPlay()
	playerSelection = paperBtn.id;
	playRound("paper");
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function(e){
	// computerSelection = computerPlay()
	playerSelection = scissorsBtn.id;
	playRound("scissors");
});

const playerScoreShow = document.querySelector('.playerScore');
playerScoreShow.textContent = 'Player Score: ' + playerScore;

const computerScoreShow = document.querySelector('.computerScore');
computerScoreShow.textContent = 'Computer Score: ' + computerScore;


// Random selection option for the Computer
function computerPlay(){ 
	let computerOptions = ['rock', 'paper', 'scissors'];
	let computerResult = computerOptions[Math.floor(Math.random() * computerOptions.length)];
	return computerResult;
}

//Play Single Round of the Game
function playRound(playerSelection, computerSelection = computerPlay()){
	const results = document.querySelector('.results');

	if ((playerSelection == "rock" && computerSelection == "paper") 
		||(playerSelection == "paper" && computerSelection == "scissors")
		||(playerSelection == "scissors" && computerSelection == "rock")){

		let resultDescLose = document.createElement('p');
		resultDescLose  = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n You lose this round!";
		results.textContent = resultDescLose;
		computerScore ++;

		playerScoreShow.textContent = 'Player Score: ' + playerScore;
		computerScoreShow.textContent = 'Computer Score: ' + computerScore;
			if (computerScore == 5){
				const showWinner = document.createElement('p');
				showWinner.textContent = "The Winner is Computer!";
				results.appendChild(showWinner);
			};

		return;

	} else if ((playerSelection == "rock" && computerSelection == "scissors")
		||(playerSelection == "paper" &&computerSelection == "rock") 
		||(playerSelection == "scissors" && computerSelection == "paper")) {

		let resultDescWin = document.createElement('p');
		resultDescWin = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n You won this round!";
		results.textContent = resultDescWin;
		playerScore ++;
		playerScoreShow.textContent = 'Player Score: ' + playerScore;
		computerScoreShow.textContent = 'Computer Score: ' + computerScore;
			if (playerScore == 5){
					const showWinner = document.createElement('p');
					showWinner.textContent = "The Winner is Player!";
					results.appendChild(showWinner);
				};
		return;
		
	}	else if (playerSelection == computerSelection){
		let resultDescTie = document.createElement('p');
		resultDescTie = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n It is a tie!";
		results.textContent = resultDescTie;		
		return;	
	} 



}
	

