let roundCounter = 0;
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
    console.log("Computer choice: " + computerChoice);
    const container = document.querySelector("#score-container");
    paraChoice.textContent = `Round ${roundCounter}: Computer chose ${computerChoice}.`;
    container.appendChild(paraChoice);
    return computerChoice;
}

function getHumanChoice(humanChoice) {
    console.log("Human choice: " + humanChoice);
    ++roundCounter;
    getComputerChoice();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`Your ${humanChoice} ties with computers ${computerChoice}.`);
    } else if ((humanChoice == "rock" && computerChoice == "paper") || 
            (humanChoice == "paper" && computerChoice == "scissors") || 
            (humanChoice == "scissors" && computerChoice == "rock")) {
        alert(`Your ${humanChoice} loses against computers ${computerChoice}.`);
        ++computerScore;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice =="rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
        alert(`Your ${humanChoice} wins against computers ${computerChoice}.`);
        ++humanScore;        
    } else {}
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => getHumanChoice("rock"));
paperButton.addEventListener("click", () => getHumanChoice("paper"));
scissorsButton.addEventListener("click", () => getHumanChoice("scissors"));