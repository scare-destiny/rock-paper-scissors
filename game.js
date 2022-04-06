

const ITEMS = ["rock", "paper", "scissors"];
const MAX_ROUNDS = 5;
let gameScore = [0, 0, 0]
let currentRound = 0;



function declareWinner() {
	gameScore[0] > gameScore[1] ? alert('Player wins the game!')
		: gameScore[0] === gameScore[1] ? alert("Game Tie :(")
			: alert("Computer wins :(((");
	setTimeout(resetGlobals, 1000);
}

function resetGlobals() {
	gameScore = [0, 0, 0];
	currentRound = 0;
	document.getElementById('results-container').style.display = 'none';

};


function playRound(playerSelection, computerSelection) {

	displaySelection(playerSelection, computerSelection);

	if (playerSelection === "rock" && computerSelection === "scissors") {
		gameScore[0] += 1;
		declareRoundWinner('player');
	}
	else if (playerSelection === "paper" && computerSelection === "rock") {
		gameScore[0] += 1;
		declareRoundWinner('player');
	}
	else if (playerSelection === "scissors" && computerSelection === "paper") {
		gameScore[0] += 1;
		declareRoundWinner('player');
	}
	else if (playerSelection === computerSelection) {
		gameScore[2] += 1;
		declareRoundWinner('draw');
	}
	else {
		gameScore[1] += 1;
		declareRoundWinner('computer');
	}
	updateScore(gameScore);

	currentRound += 1;
	isFinalround(currentRound)


}

function isFinalround(round) {
	if (round === MAX_ROUNDS) {
		declareWinner();
	}
	return;
}

function displaySelection(firstSelection, secondSelection) {
	let para = document.getElementById('chosen-items');
	para.textContent = (`Player chose ${firstSelection} and computer picked ${secondSelection}`);

}

function declareRoundWinner(winner) {

	let para = document.getElementById('running-score');
	para.classList.remove('looser');
	switch (winner) {
		case 'player':
			para.textContent = 'Player won';
			break;
		case 'computer':
			para.classList.add('looser');
			para.textContent = 'Computer won';
			break;
		case 'draw':
			para.textContent = 'Draw, no one won';
			break;
	};
}

function updateScore(array) {
	let rows = document.querySelectorAll('td');
	for (i = 0; i < rows.length; i++) {
		rows[i].textContent = array[i];
	}
}

function computerPlay() {
	let computerItem = ITEMS[Math.floor(Math.random() * ITEMS.length)];
	return computerItem;
}

const btns = Array.from(document.querySelectorAll('button'));

btns.forEach(element => {
	element.addEventListener('click', choosePlayer);
});



function choosePlayer(event) {
	if (isFirstRound(currentRound)) document.getElementById('results-container').style.display = 'block';
	event.stopImmediatePropagation();
	const playerChoice = event.target.value;
	playRound(playerChoice, computerPlay());
}

function isFirstRound(round) {
	if (round === 0) {
		return true;
	}
	return;
}

window.onload = () => {
	const audio = document.querySelector('audio');
	console.log(`success ${audio}`);
	audio.play();
};
// game();
