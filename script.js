//function computerPlay that returns rock, paper or scissors. This will be the 
//value computerSelection
let choice = ["rock", "paper", "scissors"]

function computerPlay() {
    const random = Math.floor(Math.random() * choice.length);
    return (choice[random])
}
//function for the round that takes two case insensitive parameters, playerSelection and
//computerSelection.

//prompt user for selection
let playerSelection = prompt("Rock, Paper or Scissors?", "rock");
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

//if one player chose rock and the other paper, paper wins.
if (playerSelection == "rock" && computerSelection == "paper") {
     return "You lose! Paper beats rock.";
}
else if (playerSelection == "paper" && computerSelection == "rock") {
     return "You win! Paper beats rock.";
}

//if one player chose rock and the other scissors, rock wins.
else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats scissors.";
}
else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors.";
}

//if one player chose scissors and the other paper, scissors wins.
else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats paper.";
}
else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats paper.";
}

//if both players chose the same one, it is a tie.
else return "Tie!";
}

//game function that makes a five round game and keeps score. Call previous functions
//into this one.

function game () {
    playRound() {
        if 
    }
    playRound()
    playRound()
    playRound()
    playRound()
}