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

console.log(getComputerChoice());