let compOutput;
const arr = ["Rock", "Paper", "Scissors"]
let playerPoints = 0;
let computerPoints = 0;
// Input from player - choose one of 3 options 
let userInput = prompt("Welcome to Rock-Paper-Scissors, choose One and write it in the field below! Watch out for mistake while writing")

// Random one for Computer to compete with 
function getComputerOutput(){
    let compSelected = Math.floor(Math.random() * 3);
    compOutput = arr[compSelected]
    console.log(compOutput)
}

getComputerOutput();
// Compare 1st chose ones against each other 
if((userInput === "Rock" && compOutput === "Scissors") || (userInput === "Paper" && compOutput === "Rock") || (userInput === "Scissors" && compOutput === "Paper")){
    playerPoints ++
    console.log("Player wins")
}else if( userInput === compOutput){
    console.log("Tie");
}else{
    computerPoints++
    console.log("Computer wins")
}

//while (playerPoints <= 3 || computerPoints <=3) {}


// Winner, Loser, Tie 
// Add Points for Player and Comp. 
// Best of three -> Looping the game sequence till someone has point of 3 
// Winner Message  


