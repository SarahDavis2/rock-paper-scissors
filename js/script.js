// Initialize global variables
let humanScore = 0,
    computerScore = 0;

// Play round through user input
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let humanChoice = e.target.className;
        playRound(humanChoice, getComputerChoice());
    });
});

function displayWinner() {
    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("You tied the game!");
    }
}

function playRound(humanChoice, computerChoice) {
    // Determine winner
    const roundWinner = determineRoundWinner(humanChoice, computerChoice);

    // Display winner
    displayRoundWinner(roundWinner, humanChoice, computerChoice);
}

function determineRoundWinner(humanChoice, computerChoice) {
    let roundWinner = "";

    // Determine if tie
    if (humanChoice === computerChoice) {
    }
    // Determine if user wins
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice == "paper")
    ) {
        roundWinner = "human";
        humanScore++;
    }
    // Determine if computer wins
    else {
        roundWinner = "computer";
        computerScore++;
    }

    return roundWinner;
}

function displayRoundWinner(roundWinner, humanChoice, computerChoice) {
    // Capitalize first letter
    humanChoice = capitalizeFirstLetter(humanChoice);
    computerChoice = capitalizeFirstLetter(computerChoice);

    // Display winner
    const displayResults = document.querySelector(".display-results")
    if (roundWinner === "human") {
        displayResults.textContent = `You won! ${humanChoice} beats ${computerChoice}`;

    }
    else if (roundWinner === "computer") {
        displayResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    // Display tie
    else {
        displayResults.textContent = "You Tie!";
    }
}

function capitalizeFirstLetter(str) {
    const firstChar = str.at(0).toUpperCase();
    const latterChars = str.slice(1);
    return firstChar + latterChars;
}

function getComputerChoice() {
    // Generate random number from 0-2 to be assigned to rock, paper, or scissors
    const intChoice = getRandInt(3);
    
    // Convert intChoice to string value
    const strChoice = convertToStr(intChoice);

    return strChoice;
}

// Generates random integer with Math.random()
function getRandInt(intRange) {
    return Math.floor(Math.random() * intRange);
}

// Convert intChoice to rock, paper, scissor string value
function convertToStr(intChoice) {
    // Initialize strChoice
    let strChoice = ""; 

    switch (intChoice) {
        case 0:
            strChoice = "rock";
            break;
        case 1:
            strChoice = "paper";
            break;
        case 2:
            strChoice = "scissors";            
    }

    return strChoice;
}