let rockPaperScissors = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;

game();
if (wins > losses) {alert("Congratulations! You win the game!")}
else if (losses > wins) {alert("Sorry! You lost the game.")}

function computerPlay()
{return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];}

function playerPlay()
{return prompt("Rock…Paper…Scissors…Shoot!").toLowerCase();}

function playRound(playerselection, computerselection){
    if (playerselection === "rock" && computerselection === "rock") {return "it's a tie!";}
    else if (playerselection === "paper" && computerselection === "paper") {return "it's a tie!"}
    else if (playerselection === "scissors" && computerselection === "scissors") {return "it's a tie!"}
    else if (playerselection === "paper" && computerselection === "rock") {return "You win! Paper covers rock!";
    wins = wins + 1;}
    else if (playerselection === "rock" && computerselection === "paper") {return "You lose! Paper covers rock!";
    losses = losses + 1;}
    else if (playerselection === "paper" && computerselection === "scissors") {return "You lost! Scissors cuts paper!";
    losses = losses + 1;}
    else if (playerselection === "scissors" && computerselection === "paper") {return "You won! Scissors cuts paper!";
    wins = wins + 1;}
    else if (playerselection === "scissors" && computerselection === "rock") {return "You lost! Rock breaks scissors!";
    losses = losses + 1;}
    else if (playerselection === "rock" && computerselection === "scissors") {return "You won! Rock breaks scissors!";
    wins = wins + 1;}    
}

function game(){
for (let i = 0; i<5; i++) {
    let computerselection = computerPlay();
    let playerselection = playerPlay();
    console.log(computerselection);
    console.log(playerselection);
console.log(playRound(playerselection, computerselection));
}}