const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")

rockBtn.addEventListener("click", () => handleClick("rock"))
paperBtn.addEventListener("click", () => handleClick("paper"))
scissorsBtn.addEventListener("click", () => handleClick("scissors"))

let playerPoints = 0;
let computerPoints = 0;


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2: 
            return "scissors"
    }
}

function playRound(playerSelection,compOutput){
    if((playerSelection === "rock" && compOutput === "scissors") || (playerSelection === "paper" && compOutput === "Rock") || (playerSelection === "Scissors" && compOutput === "Paper")){
        playerPoints ++
        console.log("Player: ",playerPoints, "Computer: ", computerPoints)
        return `You win! ${playerSelection} beats ${compOutput}`
    }else if( playerSelection === compOutput){
        return "Tie";
    }else{
        computerPoints++
        console.log("Player: ",playerPoints, "Computer: ", computerPoints)
        return `You lose! ${compOutput} beats ${playerSelection}`;
    }
}

function handleClick(playerSelection){
    const compOutput = getComputerChoice();
    playRound(playerSelection,compOutput)
}

