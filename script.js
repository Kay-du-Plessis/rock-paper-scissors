

//function computerPlay that returns rock, paper or scissors. This will be the 
//value computerSelection


function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * choice.length);
    return (choice[random])
}

function getUserSelect () {
    let userSelect = prompt("Rock, Paper or Scissors?", "rock");
    userSelect.toLowerCase(); 
    return userSelect;
}
//function for the round that takes two case insensitive parameters, playerSelection and
//computerSelection.

function playRound (computerSelect, userSelect) {
    console.log(computerSelect)
//prompt user for selection

    if (
        (computerSelect == "rock" && userSelect == "scissors") ||
        (computerSelect == "scissors" && userSelect == "paper") ||
        (computerSelect == "paper" && userSelect == "rock")
        ) {
            console.log("You lose this round, " + computerSelect + " beats " + userSelect);
            return computerScore =  +1;
    }

    else if (
        (userSelect == "rock" && computerSelect == "scissors") ||
        (userSelect == "scissors" && computerSelect == "paper") ||
        (userSelect == "paper" && computerSelect == "rock")
        ) {
            console.log("You win this round, " + userSelect + " beats " + computerSelect);
            return userScore = +1;
    }

    else {
        console.log("Tie!");
    }
}

//game function that makes a five round game and keeps score. Call previous functions
//into this one.

function score(userScore, computerScore) {
    userScore = +1;
    computerScore = +1;
    console.log(userScore, computerScore);
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound(computerPlay(), getUserSelect())
        score(userScore, computerScore)
    }
    

}


playGame()