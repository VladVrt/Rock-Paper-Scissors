// Function that returns the computer choice
function getComputerChoice() {
  let choise = Math.floor(Math.random() * 3);
  let computerChoise;
  switch (choise) {
    case 0:
      computerChoise = "rock";
      break;
    case 1:
      computerChoise = "paper";
      break;
    case 2:
      computerChoise = "scissors";
      break;
  }
  return computerChoise;
}
// Function that plays one round and returns the winner
function playRound() {
  const newParagraph = document.createElement("p");
  // Gets the id from the button pressed
  let playerSelection = this.id;
  // Variable to store the computer choise
  let computerChoise = getComputerChoice();

  // Game logic one round
  if (playerSelection == computerChoise) {
    gameResult = `Equal! ${playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase()} and ${computerChoise.charAt(0).toUpperCase() +
        computerChoise.slice(1).toLowerCase()} are friends.`;
  } else if (
    (playerSelection == "rock" && computerChoise == "scissors") ||
    (playerSelection == "paper" && computerChoise == "rock") ||
    (playerSelection == "scissors" && computerChoise == "paper")
  ) {
    gameResult = `You Won! ${playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase()} beats ${computerChoise.charAt(0).toUpperCase() +
        computerChoise.slice(1).toLowerCase()}.`;
        playerScore+=1;
  } else {
    gameResult = `You Lose! ${computerChoise.charAt(0).toUpperCase() +
      computerChoise.slice(1).toLowerCase()} beats ${playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1).toLowerCase()}.`;
      computerScore+=1;
  }
  // Keeps track the number of games played
 
  // Displays gameResult
  
  roundNumber+=1;
  if (roundNumber==5) {
    if (playerScore==computerScore){
      newParagraph.innerText="EQUAL" 
    }
    else if (playerScore>computerScore){
      newParagraph.innerText="YOU WON!"
    }
    else {
      newParagraph.innerText="YOU LOSE!"
    }
    document.querySelector(".gameRoundResult").appendChild(newParagraph);
     playerScore=0;
     computerScore=0;
     roundNumber=0;
  } else {
    newParagraph.innerText = gameResult;
    document.querySelector(".gameRoundResult").appendChild(newParagraph);  
  };
}

let playerScore=0;
let computerScore=0;
let roundNumber=0;
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => button.addEventListener("click", playRound));
