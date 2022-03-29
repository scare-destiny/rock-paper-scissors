

const ITEMS = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
let playerScore = 0;
let computerScore = 0;
let gameDraw = 0;

function declareWinner() {
	console.log(`Final score by player: ${playerScore}. Computer: ${computerScore} Tie: ${gameDraw}`);
	playerScore > computerScore ? console.log('Player wins the game!')
		: playerScore === computerScore ? console.log("Game Tie :(")
			: console.log("Computer wins :(((");
}

function game() {
	for (let i = 0; i < MAX_ROUNDS; i++) {
		const playerSelection = prompt("What do you choose?", "Don't want to play, just kill me")
		const computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
	}
	declareWinner();

}


function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);

	if (!validateSelection(playerSelection)) {
		alert(`Item ${playerSelection} doesn't exist, generating item value for player`);
		playerSelection = ITEMS[Math.floor(Math.random() * ITEMS.length)] ;
	}

	let playerVictory = `Yay, you won this round: ${playerSelection} beats ${computerSelection}`;
	let computerVictory = `Phew, you lost, computer wins. 
	    ${computerSelection} is superior over ${playerSelection}`;
	// TODO return string declaring the winner

	if (playerSelection === "rock" && computerSelection === "scissors") {
		console.log(playerVictory);
		return playerScore += 1;
	}
	else if (playerSelection === "paper" && computerSelection === "rock") {
		console.log(playerVictory);
		return playerScore += 1;
	}
	else if (playerSelection === "scissors" && computerSelection === "paper") {
		console.log(playerVictory);
		return playerScore += 1;
	}
	else if (playerSelection === computerSelection) {
		console.log(gameDraw);
		return gameDraw += 1;
	}
	else {
		console.log(computerVictory);
		return computerScore += 1;
	}
}

function validateSelection(item) {
	return ITEMS.includes(item)
}


function computerPlay() {
	let computerItem = ITEMS[Math.floor(Math.random() * ITEMS.length)];
	return computerItem;
}


game();