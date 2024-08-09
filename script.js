let roundCounter = 1;
let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("#score-container");
const scoreboard = document.createElement("p");
scoreboard.textContent = "Player: 0 - Computer: 0";
container.appendChild(scoreboard);
const paraChoice = document.createElement("p");
const gameEndText = document.createElement("h2");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNumber) {
    case 2:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 0:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {

  if (gameEndText.textContent !== "") {
    gameEndText.textContent = "";    
    container.removeChild(gameEndText)  
  };

  if (humanChoice === computerChoice) {
    paraChoice.textContent = `Round ${roundCounter}: It's a draw! Computer also chose ${computerChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    paraChoice.textContent = `Round ${roundCounter}: You win! Computer chose ${computerChoice}.`;
    ++humanScore;
  } else {
    paraChoice.textContent = `Round ${roundCounter}: You lose! Computer chose ${computerChoice}.`;
    ++computerScore;
  }

  ++roundCounter;
  scoreboard.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
  container.appendChild(paraChoice);
  if (humanScore === 5 || computerScore === 5) gameEnd();
}

function gameEnd() {
  if (humanScore === 5) {
    gameEndText.textContent = `You win this game of Rock Paper Scissors! ${humanScore} : ${computerScore}`;
  } else {
    gameEndText.textContent = `Computer wins this game of Rock Paper Scissors! ${humanScore} : ${computerScore}`;
  }

  container.appendChild(gameEndText);
  roundCounter = 1;
  humanScore = 0;
  computerScore = 0;
  scoreboard.textContent = "";
  paraChoice.textContent = "";
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
