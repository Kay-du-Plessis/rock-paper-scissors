//prompt user for selection
let userSelect = prompt("Rock, Paper or Scissors", "rock")

//function computerPlay that returns rock, paper or scissors. This will be the 
//value computerSelection

let choice = ["rock", "paper", "scissors"]

function computerPlay() {
        let random = Math.floor(Math.random() * choice.length);
        return (choice[random])
    }
const computerSelect = computerPlay();

//function for the round that takes two case insensitive parameters, playerSelection and
//computerSelection.

function playRound (computerSelect, userSelect) {
    if (
        (computerSelect == "rock" && userSelect == "scissors") ||
        (computerSelect == "scissors" && userSelect == "paper") ||
        (computerSelect == "paper" && userSelect == "rock")
        ) {
            console.log("You lose this round.");
            return computerScore = +1;
    }

    else if (
        (userSelect == "rock" && computerSelect == "scissors") ||
        (userSelect == "scissors" && computerSelect == "paper") ||
        (userSelect == "paper" && computerSelect == "rock")
        ) {
            console.log("You win this round! ");
            return userScore = +1;
    }

    else {
        console.log("Tie!")
    }
}

//game function that makes a five round game and keeps score. Call previous functions
//into this one.

function playGame () {
    playRound 5 Timess
    
}