let roundCounter = 1;
let humanScore = 0;
let computerScore = 0;
let score;
const container = document.querySelector("#score-container");
const scoreboard = document.createElement("p");
scoreboard.textContent = "Player: 0 - Computer: 0";
container.appendChild(scoreboard);
const paraChoice = document.createElement("p");

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
  console.log("Human choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);

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
