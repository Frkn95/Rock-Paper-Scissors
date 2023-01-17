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
function getPlayerInput(){
    signs.forEach(button => {
        button.addEventListener("click",(e) => {
            playerInput = e.target.className
            console.log(playerInput)
        })
    })
}

function game(playerInput,compOutput){
    

    if((playerInput === "rock" && compOutput === "scissors") || (playerInput === "paper" && compOutput === "Rock") || (playerInput === "Scissors" && compOutput === "Paper")){
        playerPoints ++
        console.log("Player: ",playerPoints, "Computer: ", computerPoints)
        return `You win! ${playerInput} beats ${compOutput}`
    }else if( playerInput === compOutput){
        return "Tie";
    }else if (playerInput !== compOutput){
        computerPoints++
        console.log("Player: ",playerPoints, "Computer: ", computerPoints)
        return `You lose! ${compOutput} beats ${playerInput}`;
    }
}

function handleClick(playerInput){
    const compOutput = getComputerChoice();
    game(playerInput,compOutput)
}

