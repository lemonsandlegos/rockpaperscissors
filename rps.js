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
    const buttonsElement = document.querySelector(".threebuttons");
    const resultsElement = document.querySelector("#results");
    const h2Element = document.querySelector("h2");
    playRound(playerselection, computerselection);
    if (playerPoints < 5 && computerPoints > 4) {
        buttonsElement.remove();
        resultsElement.remove();
        h2Element.remove();
        document.getElementById("restart").style.opacity = "1";
        document.getElementById("finalresults").innerHTML = "Sorry! You lost the game. Better luck next time :)"
    }
    if (playerPoints > 4 && computerPoints < 5) {
        buttonsElement.remove();
        resultsElement.remove();
        h2Element.remove();
        document.getElementById("restart").style.opacity = "1";
        document.getElementById("finalresults").innerHTML = "Congratulations! You won the game! :)"
    }
}

function functionPaper() {
    playerselection = "paper";
    computerselection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    const buttonsElement = document.querySelector(".threebuttons");
    const resultsElement = document.querySelector("#results");
    const h2Element = document.querySelector("h2");
    const restartButton = document.querySelector("#restart");
    playRound(playerselection, computerselection);
    if (playerPoints < 5 && computerPoints > 4) {
        buttonsElement.remove();
        resultsElement.remove();
        h2Element.remove();
        document.getElementById("restart").style.opacity = "1";
        document.getElementById("finalresults").innerHTML = "Sorry! You lost the game. Better luck next time :)"
    }
    if (playerPoints > 4 && computerPoints < 5) {
        buttonsElement.remove();
        resultsElement.remove();
        h2Element.remove();
        document.getElementById("restart").style.opacity = "1";
        document.getElementById("finalresults").innerHTML = "Congratulations! You won the game! :)"
    }
}

function functionScissors() {
    playerselection = "scissors";
    computerselection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    const buttonsElement = document.querySelector(".threebuttons");
    const resultsElement = document.querySelector("#results");
    const h2Element = document.querySelector("h2");
    const restartButton = document.querySelector("#restart");
    playRound(playerselection, computerselection);
    if (playerPoints < 5 && computerPoints > 4) {
        buttonsElement.remove();
        resultsElement.remove();
        h2Element.remove();
        document.getElementById("restart").style.opacity = "1";
        document.getElementById("finalresults").innerHTML = "Sorry! You lost the game. Better luck next time :)"
    }
    if (playerPoints > 4 && computerPoints < 5) {
        buttonsElement.remove();
        resultsElement.remove();
        h2Element.remove();
        document.getElementById("restart").style.opacity = "1";
        document.getElementById("finalresults").innerHTML = "Congratulations! You won the game! :)"
    }
}



function playRound(playerselection, computerselection) {
    if (playerselection === computerselection) {
        document.getElementById("results").innerHTML = "It's a tie!";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent Score: " + computerPoints;
        return "it's a tie!";
    }
    else if (playerselection === "paper" && computerselection === "rock") {
        playerPoints = playerPoints + 1;
        document.getElementById("results").innerHTML = "You win! Paper covers rock!";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent Score: " + computerPoints;
        return "You win! Paper covers rock!";
    }
    else if (playerselection === "rock" && computerselection === "paper") {
        computerPoints = computerPoints + 1;
        document.getElementById("results").innerHTML = "You lose! Paper covers rock!";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent Score: " + computerPoints;
        return "You lose! Paper covers rock!";
    }
    else if (playerselection === "paper" && computerselection === "scissors") {
        computerPoints = computerPoints + 1;
        document.getElementById("results").innerHTML = "You lost! Scissors cut paper!";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent Score: " + computerPoints;
        return "You lost! Scissors cuts paper!";
    }
    else if (playerselection === "scissors" && computerselection === "paper") {
        playerPoints = playerPoints + 1;
        document.getElementById("results").innerHTML = "You win! Scissors cut paper!";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent Score: " + computerPoints;
        return "You won! Scissors cuts paper!";
    }
    else if (playerselection === "scissors" && computerselection === "rock") {
        computerPoints = computerPoints + 1;
        document.getElementById("results").innerHTML = "You lost! Rock breaks scissors!";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent Score: " + computerPoints;
        return "You lost! Rock breaks scissors!";
    }
    else if (playerselection === "rock" && computerselection === "scissors") {
        playerPoints = playerPoints + 1;
        document.getElementById("results").innerHTML = "You won! Rock breaks scissors!";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerPoints;
        document.getElementById("computerScore").innerHTML = "Opponent Score: " + computerPoints;
        return "You won! Rock breaks scissors!";
    }
}

document.getElementById("restart").addEventListener("click", restart);

function restart() {
    location.reload();
}