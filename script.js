let startingComputerScore = 0
let startingPlayerScore = 0

//function for the round that takes two case insensitive parameters, playerSelection and
//computerSelection.
function playRound(prevComputerScore, prevPlayerScore) {
    let computerScore = startingComputerScore
    let playerScore = startingPlayerScore

    //prompt user for selection
    let playerSelect = prompt("Rock, Paper or Scissors?", "rock");

    //function computerPlay that returns rock, paper or scissors. This will be the 
    //value computerSelection
    let choice = ["rock", "paper", "scissors"]

    function computerPlay() {
        let random = Math.floor(Math.random() * choice.length);
        return (choice[random])
    }
    const computerSelect = computerPlay();

    //if one player chose rock and the other paper, paper wins.
    if (playerSelect == "rock" && computerSelect == "paper") {
        return { score: ++computerScore, 
                 text: "You lose! Paper beats rock."}
    }
    else if (playerSelect == "paper" && computerSelect == "rock") {
        ++playerScore;
        return "You win! Paper beats rock.";
    }

    //if one player chose rock and the other scissors, rock wins.
    else if (playerSelect == "scissors" && computerSelect == "rock") {
        ++computerScore;
        return "You lose! Rock beats scissors.";
    }
    else if (playerSelect == "rock" && computerSelect == "scissors") {
        ++playerScore;
        return "You win! Rock beats scissors.";
    }

    //if one player chose scissors and the other paper, scissors wins.
    else if (playerSelect == "paper" && computerSelect == "scissors") {
        ++computerScore;
        return "You lose! Scissors beats paper.";
    }
    else if (playerSelect == "scissors" && computerSelect == "paper") {
        ++playerScore;
        return "You win! Scissors beats paper.";
    }

    //if both players chose the same one, it is a tie.
    else return "Tie!";

    }

//game function that makes a five round game and keeps score. Call previous functions
//into this one.

function game () {
    for (var i = 0; i <= 5; i++) {
        let resultRound = playRound();
    }
    if (playerScore >= 3) {
        console.log("You are the winner!")
    }
    else console.log("You lose, computer is the winner")
}

game()



