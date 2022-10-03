function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "No one wins!"; // add which one was choosen
    } else if(playerSelection == "Rock" && computerSelection == "Scissor") {
        return "You Win! Rock beats Scissor";
    } else if(playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    } else if(playerSelection == "Scissor" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissor";
    } else if(playerSelection == "Scissor" && computerSelection == "Paper") {
        return "You Win! Scissor beats Paper";
    } else if(playerSelection == "Paper" && computerSelection == "Scissor") {
        return "You Loser! Scissor beats Paper";
    } else if(playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    } else {
        return "No valid choice, please re-do!";
    }
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    switch(randomChoice) {
        case 1: 
            return "Rock";
            break;
        case 2: 
            return "Paper";
            break;
        case 3: 
            return "Scissor";
            break;
    }
}

function getUserChoice() {
    return prompt("Make your choice", "");
    
}

function game() {
    for (let i = 0; i < 5; i++) {
            console.log(playRound(getUserChoice(), getComputerChoice()));
    }
}

game();




