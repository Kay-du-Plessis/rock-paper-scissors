
let gamesPlayed = 0;
let userScore = 0;
let computerScore = 0;
const scoreDiv_div = document.querySelector(".scoreDiv");
const rockButton = document.getElementById("r");
const paperButton = document.getElementById("p");
const scissorsButton = document.getElementById("s");
const compScore_span = document.getElementById("compPoints");
const userScore_span = document.getElementById("userPoints");

rockButton.addEventListener('click', function() {
    (playRound("rock"));
})

paperButton.addEventListener('click', function() {
    playRound("paper");
})

scissorsButton.addEventListener('click', function() {
    playRound("scissors");
})


function computerPlay() {
    let choice = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * choice.length);
    return (choice[random])
}

//function for the round that takes two case insensitive parameters, playerSelection and
//computerSelection.

function playRound (userSelect) {
    const computerSelect = computerPlay();
    const result_div = document.querySelector(".result");
    const compChoice_p = document.querySelector(".compChoice")
    compChoice_p.textContent = "Computer chose "  + computerSelect + "!"

    if (
        (computerSelect == "rock" && userSelect == "scissors") ||
        (computerSelect == "scissors" && userSelect == "paper") ||
        (computerSelect == "paper" && userSelect == "rock")
        ) {
            result_div.textContent = "You lose this round, " + computerSelect + " beats " + userSelect;
            scoreTracker(result = "Lose");
}
    else if (
        (userSelect == "rock" && computerSelect == "scissors") ||
        (userSelect == "scissors" && computerSelect == "paper") ||
        (userSelect == "paper" && computerSelect == "rock")
        ) {
            result_div.textContent = "You win this round, " + userSelect + " beats " + computerSelect;
            scoreTracker(result = "Win");
    }

    else {
        result_div.textContent= "Tie!";
        scoreTracker(result = "Tie");
    }
}  

//game function that makes a five round game and keeps score. Call previous functions
//into this one.


function scoreTracker () {
    
        if (result == "Win") {
            userScore += 1;
            gamesPlayed +=1;
            userScore_span.textContent = userScore;
            console.log(userScore, computerScore);
        }

        else if (result == "Lose") {
             computerScore += 1;
             gamesPlayed +=1;
             compScore_span.textContent = computerScore;
             console.log(userScore, computerScore);
        }
        
        else if (result == "Tie") {
            computerScore += 0;
            userScore += 0;
            gamesPlayed +=1;
            userScore_span.textContent = userScore;
            compScore_span.textContent = computerScore;
            console.log(userScore, computerScore)
        }
        game();
}

function game () {
    
    const finalResult_div = document.getElementById("finalResult");

    if (gamesPlayed == 5 && userScore > computerScore) {
        finalResult_div.textContent= "Round: " + gamesPlayed + " You did it! You win!";
        userScore_span.textContent = 0;
        compScore_span.textContent = 0;
        userScore = 0;
        computerScore = 0;
        gamesPlayed = 0;
    }

    else if (gamesPlayed == 5 && userScore == computerScore) {
        finalResult_div.textContent="Round: " + gamesPlayed + " Tie! Try again to win";
        userScore_span.textContent = 0;
        compScore_span.textContent = 0;
        userScore = 0;
        computerScore = 0;
        gamesPlayed = 0;
    }

    else if (gamesPlayed == 5 && userScore < computerScore) {
        finalResult_div.textContent="Round: " + gamesPlayed + " You lost. Try again.";
        userScore_span.textContent = 0;
        compScore_span.textContent = 0;
        userScore = 0;
        computerScore = 0;
        gamesPlayed = 0;
    }

    else 
        finalResult_div.textContent= "Round: " + gamesPlayed + " Make your move."
}