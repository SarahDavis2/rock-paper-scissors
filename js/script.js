// Main
// Initialize global variables
let humanScore = 0,
    computerScore = 0;

// Begin Round
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Functions
function playRound(humanChoice, computerChoice) {
    // Determine who wins and through which choice
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerChoice++;
    }
    else if (humanChoice === "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else {
        console.log("It's a Tie!");
    }
}

function getComputerChoice() {
    // Generate random number from 0-2 to be assigned to rock, paper, or scissors
    const intChoice = getRandInt(3);
    
    // Convert intChoice to string value
    const strChoice = convertToStr(intChoice);

    return strChoice;
}

// Skip user validation
function getHumanChoice() {
    return prompt('Please enter a choice of "rock", "paper", or "scissors": ').toLowerCase();
}



// ******[START] Functions for getComputerChoice() [START]******

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

// ******[END] Functions for getComputerChoice() [END]******