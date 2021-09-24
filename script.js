//function computerPlay that returns rock, paper or scissors. This will be the 
//value computerSelection
let choice = ["rock", "paper", "scissors"]

function computerPlay() {
    const random = Math.floor(Math.random() * choice.length);
    console.log(choice[random])
}
//function for the round that takes two case insensitive parameters, playerSelection and
//computerSelection.

const playerSelection = "rock";
const computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
//prompt user for selection
prompt("Rock, Paper or Scissors?", "rock")
//if one player chose rock and the other paper, paper wins.
if (playerSelection = "rock" && computerSelection = "paper") {
     console.log("You lose! Paper beats rock.")
}
else if (playerSelection = "paper" && computerSelection = "rock") {
     console.log("You win! Paper beats rock.")
}

//if one player chose rock and the other scissors, rock wins.
else if (playerSelection = "scissors" && computerSelection = "rock") {
    console.log("You lose! Rock beats scissors.")
}
else if (playerSelection = "rock" && computerSelection = "scissors") {
    console.log("You win! Rock beats scissors.")
}

//if one player chose scissors and the other paper, scissors wins.
else if (playerSelection = "paper" && computerSelection = "scissors") {
    console.log("You lose! Scissors beats paper.")
}
else if (playerSelection = "scissors" && computerSelection = "paper") {
    console.log("You win! Scissors beats paper.")
}

//if both players chose the same one, it is a tie.
else console.log("Tie!")
}

//game function that makes a five round game and keeps score. Call previous functions
//into this one.