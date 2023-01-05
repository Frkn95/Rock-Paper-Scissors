const arr = ["rock", "paper", "scissors"]

let playerPoints = 0;
let computerPoints = 0;
let compOutput;

function getComputerChoice(){
    let compSelected = Math.floor(Math.random() * 3);
    compOutput = arr[compSelected]
}

function game(){
    let userInput = prompt("Welcome to Rock-Paper-Scissors, choose One and write it in the field below! Watch out for mistake while writing").toLowerCase()
    getComputerChoice();

    if((userInput === "rock" && compOutput === "scissors") || (userInput === "paper" && compOutput === "Rock") || (userInput === "Scissors" && compOutput === "Paper")){
        playerPoints ++
        console.log("Player: ",playerPoints, "Computer: ", computerPoints)
        return `You win! ${userInput} beats ${compOutput}`
    }else if( userInput === compOutput){
        return "Tie";
    }else{
        computerPoints++
        console.log("Player: ",playerPoints, "Computer: ", computerPoints)
        return `You lose! ${compOutput} beats ${userInput}`;
    }
}

for (let i = 0; i <= 5; i++) {
   game()
}

