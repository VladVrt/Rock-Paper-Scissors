// Function that returns the computer choice
function getComputerChoice() {
  let choise = Math.floor(Math.random() * 3);
  let computerChoise;
  switch (choise) {
    case 0:
      computerChoise = "Rock";
      break;
    case 1:
      computerChoise = "Paper";
      break;
    case 2:
      computerChoise = "Scissors";
      break;
  }
  return computerChoise;
}

// Function that plays one round and returns the winner
function playRound(playerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  let computerSelection = getComputerChoice();
  let gameStatus;
  let gameResult;

  if (playerSelection == computerSelection) {
    gameStatus = "equal";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    gameStatus = "player";
  } else {
    gameStatus = "computer";
  }

  if (gameStatus == "equal") {
    gameResult = `Equal! ${playerSelection} and ${computerSelection} are friends.`;
  } else if (gameStatus == "player") {
    gameResult = `You Won! ${playerSelection} beats ${computerSelection}.`;
  } else {
    gameResult = `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }

  return gameResult;
}

function game() {
    for (let i=0; i<5; i++){
        let playerSelection=prompt("Please choose your fighter from: Rock, Paper, Scissors");
        playRound(playerSelection);
    }
}
