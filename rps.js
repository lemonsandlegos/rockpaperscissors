let rockPaperScissors = ["rock", "paper", "scissors"];
let computerselection = computerPlay();
let playerselection = playerPlay();
console.log(computerPlay());

function computerPlay()
{return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];}

function playerPlay()
{prompt("Rock…Paper…Scissors…Shoot!").toLowerCase();}

function playRound(playerselection, computerselection){
    if (playerselection === "rock" && computerselection === "rock") {return "it's a tie!"}
    else if (playerselection === "paper" && computerselection === "paper") {return "it's a tie!"}
    else if (playerselection === "scissors" && computerselection === "scissors") {return "it's a tie!"}
    else if (playerselection === "paper" && computerselection === "rock") {return "You win! Paper covers rock!"}
    else if (playerselection === "rock" && computerselection === "paper") {return "You lose! Paper covers rock!"}
    else if (playerselection === "paper" && computerselection === "scissors") {return "You lost! Scissors cuts paper!"}
    else if (playerselection === "scissors" && computerselection === "paper") {return "You won! Scissors cuts paper!"}
    else if (playerselection === "scissors" && computerselection === "rock") {return "You lost! Rock breaks scissors!"}
    else if (playerselection === "rock" && computerselection === "scissors") {return "You won! Rock breaks scissors!"}    
}
console.log(playRound(playerselection, computerselection));

function game(){
for (let i = 0; i<5; i++) {
playRound(playerselection, computerselection);
console.log(playRound(playerselection, computerselection));
}}