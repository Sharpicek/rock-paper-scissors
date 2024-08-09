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
    alert("Computer chose " + computerChoice + ".");
    return computerChoice;
}

function getHumanChoice(humanChoice) {
    console.log("Human choice: " + humanChoice);
}

let humanScore = 0;
let computerScore = 0;

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






/*
function playGame(numberOfGames) {
    for (let i = 1; i <= numberOfGames; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    alert("Your score is " + humanScore + " computer score is " + computerScore + ".");
    if (humanScore > computerScore) {
        alert("You win this time");
    } else if (humanScore < computerScore) {
        alert("Computer wins! Better luck next time!")
    } else {
        alert("Its a draw! Nobody wins!")
    }
}

playGame(5);*/