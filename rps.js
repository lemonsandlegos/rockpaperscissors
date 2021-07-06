let rockPaperScissors = ["rock", "paper", "scissors"];

game();

function game(){
    playerPoints = 0;
    computerPoints = 0;
    document.getElementById("rock").addEventListener("click", functionRock);
    document.getElementById("paper").addEventListener("click", functionPaper);
    document.getElementById("scissors").addEventListener("click", functionScissors);
}

function functionRock() {
    playerselection = "rock";
    computerselection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    playRound(playerselection, computerselection);
    if (playerPoints < 5 && computerPoints > 4) {
        document.getElementById("finalresults").innerHTML = "Sorry! You lost the game. Better luck next time :)"
    }
    if (playerPoints > 4 && computerPoints < 5) {
        document.getElementById("finalresults").innerHTML = "Congratulations! You won the game! :)"
    }
    if (playerPoints === 5 && computerPoints === 5) {
        document.getElementById("finalresults").innerHTML = "You tied the game. Good job...kinda."
    }
}

function functionPaper() {
    playerselection = "paper";
    computerselection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    playRound(playerselection, computerselection);
    if (playerPoints < 5 && computerPoints > 4) {
        document.getElementById("finalresults").innerHTML = "Sorry! You lost the game. Better luck next time :)"
    }
    if (playerPoints > 4 && computerPoints < 5) {
        document.getElementById("finalresults").innerHTML = "Congratulations! You won the game! :)"
    }
    if (playerPoints === 5 && computerPoints === 4) {
        document.getElementById("finalresults").innerHTML = "You tied the game. Good job...kinda."
    }
}

function functionScissors() {
    playerselection = "scissors";
    computerselection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    playRound(playerselection, computerselection);
    if (playerPoints < 5 && computerPoints > 4) {
        document.getElementById("finalresults").innerHTML = "Sorry! You lost the game. Better luck next time :)"
    }
    if (playerPoints > 4 && computerPoints < 5) {
        document.getElementById("finalresults").innerHTML = "Congratulations! You won the game! :)"
    }
    if (playerPoints === 5 && computerPoints === 4) {
        document.getElementById("finalresults").innerHTML = "You tied the game. Good job...kinda."
    }
}



function playRound(playerselection, computerselection) {
    if (playerselection === computerselection) {
        document.getElementById("results").innerHTML = "It's a tie!";
        document.getElementById("playerScore").innerHTML = "You: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent: " + computerPoints;
        return "it's a tie!";
    }
    else if (playerselection === "paper" && computerselection === "rock") {
        playerPoints = playerPoints + 1;
        document.getElementById("results").innerHTML = "You win! Paper covers rock!";
        document.getElementById("playerScore").innerHTML = "You: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent: " + computerPoints;
        return "You win! Paper covers rock!";
    }
    else if (playerselection === "rock" && computerselection === "paper") {
        computerPoints = computerPoints + 1;
        document.getElementById("results").innerHTML = "You lose! Paper covers rock!";
        document.getElementById("playerScore").innerHTML = "You: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent: " + computerPoints;
        return "You lose! Paper covers rock!";
    }
    else if (playerselection === "paper" && computerselection === "scissors") {
        computerPoints = computerPoints + 1;
        document.getElementById("results").innerHTML = "You lost! Scissors cut paper!";
        document.getElementById("playerScore").innerHTML = "You: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent: " + computerPoints;
        return "You lost! Scissors cuts paper!";
    }
    else if (playerselection === "scissors" && computerselection === "paper") {
        playerPoints = playerPoints + 1;
        document.getElementById("results").innerHTML = "You win! Scissors cut paper!";
        document.getElementById("playerScore").innerHTML = "You: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent: " + computerPoints;
        return "You won! Scissors cuts paper!";
    }
    else if (playerselection === "scissors" && computerselection === "rock") {
        computerPoints = computerPoints + 1;
        document.getElementById("results").innerHTML = "You lost! Rock breaks scissors!";
        document.getElementById("playerScore").innerHTML = "You: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent: " + computerPoints;
        return "You lost! Rock breaks scissors!";
    }
    else if (playerselection === "rock" && computerselection === "scissors") {
        playerPoints = playerPoints + 1;
        document.getElementById("results").innerHTML = "You won! Rock breaks scissors!";
        document.getElementById("playerScore").innerHTML = "You: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent: " + computerPoints;
        return "You won! Rock breaks scissors!";
    }
}