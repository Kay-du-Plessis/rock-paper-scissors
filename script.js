
let computerScore = 0
let playerScore = 0
let score = [computerScore, playerScore]

//function for the round that takes two case insensitive parameters, playerSelection and
//computerSelection.
function playRound() {

//prompt user for selection
let playerSelect = prompt("Rock, Paper or Scissors?", "rock");

//function computerPlay that returns rock, paper or scissors. This will be the 
//value computerSelection
let choice = ["rock", "paper", "scissors"]

function computerPlay() {
    const random = Math.floor(Math.random() * choice.length);
    return (choice[random])
}
const computerSelect = computerPlay();

//if one player chose rock and the other paper, paper wins.
if (playerSelect == "rock" && computerSelect == "paper") {
     score[0] = ++computerScore;
    return "You lose! Paper beats rock.";
}
else if (playerSelect == "paper" && computerSelect == "rock") {
    score[1] = ++playerScore;
    return "You win! Paper beats rock.";
}

//if one player chose rock and the other scissors, rock wins.
else if (playerSelect == "scissors" && computerSelect == "rock") {
    score[0] = ++computerScore;
    return "You lose! Rock beats scissors.";
}
else if (playerSelect == "rock" && computerSelect == "scissors") {
    score[1] = ++playerScore;
    return "You win! Rock beats scissors.";
}

//if one player chose scissors and the other paper, scissors wins.
else if (playerSelect == "paper" && computerSelect == "scissors") {
    score[0] = ++computerScore;
    return "You lose! Scissors beats paper.";
}
else if (playerSelect == "scissors" && computerSelect == "paper") {
    score[1] = ++playerScore;
    return "You win! Scissors beats paper.";
}

//if both players chose the same one, it is a tie.
else return "Tie!";

}

//game function that makes a five round game and keeps score. Call previous functions
//into this one.

function game () {
    for (var i = 0; i <= 5; i++) {
    playRound ();
    console.log(score, playRound());
    }
    if (playerScore >= 3) {
        console.log("You are the winner!")
    }
    else console.log("You lose, computer is the winner")
}

game()



