// Function that plays 5 round and returns the game result
function game() {
  // Variable to store game score
  let playerScore = 0;
  let computerScore = 0;
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
    let gameResult;

    if (playerSelection == computerSelection) {
      gameResult = `Equal! ${playerSelection} and ${computerSelection} are friends.`;
    } else if (
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Paper" && computerSelection == "Rock") ||
      (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
      gameResult = `You Won! ${playerSelection} beats ${computerSelection}.`;
      playerScore += 1;
    } else {
      gameResult = `You Lose! ${computerSelection} beats ${playerSelection}.`;
      computerScore += 1;
    }
    console.log(gameResult);
  }
  // Plays the game 5 times
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Please choose your fighter from: Rock, Paper, Scissors"
    );
    playerSelection =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase();
    if (!((playerSelection == "Rock")||(playerSelection == "Paper")||(playerSelection == "Scissors"))) {
      playerSelection = prompt("Please choose a valid fighter from: Rock, Paper, Scissors");
      playRound(playerSelection);
    } else {
    playRound(playerSelection);
    }
  }
  // Returns the game winner
  if (playerScore > computerScore) {
    console.log("%cYou are the winner!", "color: green");
  } else if (computerScore > playerScore) {
    console.log("%cUnfortunately, you lose the game!", "color: red");
  } else {
    console.log("%cNo one wins, let's play another round!", "color: blue");
  }
}
