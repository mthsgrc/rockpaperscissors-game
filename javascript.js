
let playerScore = 0;
let computerScore = 0;
let roundsCount = 0;
let computerSelection = computerPlay();
let playerSelection;

// Event for buttons
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function(e){
	computerSelection = computerPlay()
	playerSelection = rockBtn.id;
	playRound(playerSelection, computerSelection);
});


const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function(e){
	computerSelection = computerPlay()
	playerSelection = paperBtn.id;
	playRound(playerSelection, computerSelection);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function(e){
	computerSelection = computerPlay()
	playerSelection = scissorsBtn.id;
	playRound(playerSelection, computerSelection);
});

// const results = document.querySelector('.results');
// const para = document.createElement('p');
// para.textContent = rockBtn.id;
// results.appendChild(para);


// Random selection option for the Computer
function computerPlay(){ 
	// let r = "rock";
	// let p = "paper";
	// let s = "scissors";

	// let computerResult = Math.random(); 			
	// if (computerResult <= 0.3333) {
	// 	computerResult = r;
	// } else if (computerResult > 0.3333 && computerResult <= 0.6666) {
	// 	computerResult = p;
	// } else {
	// 	computerResult = s;
	// }
	// return computerResult;
	let computerOptions = ['rock', 'paper', 'scissors'];
	let computerResult = computerOptions[Math.floor(Math.random() * computerOptions.length)];
	return computerResult;
}

//Play Single Round of the Game
function playRound(playerSelection, computerSelection){
	const results = document.querySelector('.results');


	if ((playerSelection == "rock" && computerSelection == "paper") 
		||(playerSelection == "paper" && computerSelection == "scissors")
		||(playerSelection == "scissors" && computerSelection == "rock")){

		let resultDescLose = document.createElement('p');
		resultDescLose.textContent = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n You lose this round!";
		results.appendChild(resultDescLose);
		computerScore ++;


		return "You lose this round!";

	} else if ((playerSelection == "rock" && computerSelection == "scissors")
		||(playerSelection == "paper" &&computerSelection == "rock") 
		||(playerSelection == "scissors" && computerSelection == "paper")) {

		let resultDescWin = document.createElement('p');
		resultDescWin.textContent = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n You won this round!";
		results.appendChild(resultDescWin);
		playerScore ++;

		return "You win this round!";
		
	}	else if (playerSelection == computerSelection){
		let resultDescTie = document.createElement('p');
		resultDescTie.textContent = "You've choosen: " + playerSelection + " - " + "Computer's choosen: " + computerSelection + "\n It is a tie!";
		results.appendChild(resultDescTie);		
		roundsCount--;

		return "It's a tie";

	} else {
		return "Choose Paper, Rock or Scissors";

	}
}
	
// Run five times and shows winner
// function game(){	
	
// 	while (roundsCount != 5){
// 	let playerSelection = prompt("Choose your force", "Paper - Rock - Scissors").toLowerCase();
// 	console.log(playRound(playerSelection, computerSelection));
// 	console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);

// 	roundsCount ++;
// }
// 	if (playerScore > computerScore) {
// 		console.log("You win this Game =)")
// 	} else {
// 		console.log("You lose this Game =(")
// 	}
// }

