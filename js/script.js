// *** Main ***

// Initialize global variables
let humanScore = 0,
    computerScore = 0;

// Run game
playGame();

// *** Functions ***

function playGame() {
    const MAX_ROUNDS = 5;

    // Each game consists of 5 rounds
    for (let i = 0; i < MAX_ROUNDS; i++)
    {
        beginRound();
    }

    displayWinner();
}

function beginRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

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
    if (roundWinner === "human") {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    }
    else if (roundWinner === "computer") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    // Display tie
    else {
        console.log(`You Tie!`);
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

// Skip user validation
function getHumanChoice() {
    return prompt('Please enter a choice of "rock", "paper", or "scissors": ').toLowerCase();
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