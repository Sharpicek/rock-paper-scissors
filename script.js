let roundCounter = 1;
let humanScore = 0;
let computerScore = 0;
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
    const container = document.querySelector("#score-container");
    paraChoice.textContent = `Round ${roundCounter}: Computer chose ${computerChoice}.`;
    container.appendChild(paraChoice);
    ++roundCounter;
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));