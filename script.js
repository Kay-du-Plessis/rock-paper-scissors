

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
            return result = "Lose";
}
    else if (
        (userSelect == "rock" && computerSelect == "scissors") ||
        (userSelect == "scissors" && computerSelect == "paper") ||
        (userSelect == "paper" && computerSelect == "rock")
        ) {
            console.log("You win this round, " + userSelect + " beats " + computerSelect);
            return result = "Win";
    }

    else {
        console.log("Tie!");
        return result = "Tie"
    }
}

//game function that makes a five round game and keeps score. Call previous functions
//into this one.


function playGame () {
    let gamesPlayed = 0;
        let userScore = 0;
        let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        
        let totalScore = playRound(computerPlay(), getUserSelect());
        if (result == "Win") {
            userScore += 1;
            gamesPlayed +=1;
            console.log(userScore, computerScore);
        }

        else if (result == "Lose") {
             computerScore += 1;
             gamesPlayed +=1;
            console.log(userScore, computerScore);
            }
        
        else if (result == "Tie") {
            computerScore += 0;
            userScore += 0;
            console.log(userScore, computerScore);
        }
    }  
    
    if (userScore > computerScore) {
        console.log("You did it! You win!")
    }

    else if (userScore == computerScore) {
        console.log("Tie! Try again to win")
    }

    else 
        console.log("You lost. Try again.")
}
playGame()