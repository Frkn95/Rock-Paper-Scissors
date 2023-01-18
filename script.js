const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const playerScoreText = document.querySelector(".player")
const compScoreText = document.querySelector(".computer")
const infoText = document.querySelector(".info-text")

let playerPoints = 0;
let computerPoints = 0;

//EVENT LISTENER
rockBtn.addEventListener("mousedown", () => {
    if (playerPoints >= 5 || computerPoints >= 5){
        return;
    }
    handleClick("Rock")
})
paperBtn.addEventListener("mousedown", () => {
    if (playerPoints >= 5 || computerPoints >= 5){
        return;
    }
    handleClick("Paper")
})
scissorsBtn.addEventListener("mousedown", () => {
    if (playerPoints >= 5 || computerPoints >= 5){
        return;
    }   
    handleClick("Scissors")
})


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2: 
            return "Scissors"
    }
}

//GAME LOGIC
function playRound(playerSelection,compOutput){
    if (playerPoints <= 5 && computerPoints <= 5){
        if((playerSelection === "Rock" && compOutput === "Scissors") || (playerSelection === "Paper" && compOutput === "Rock") || (playerSelection === "Scissors" && compOutput === "Paper")){
            playerPoints++;
            playerScoreText.textContent = playerPoints
            infoText.textContent = `You win! ${playerSelection} beats ${compOutput}`
        }else if( playerSelection === compOutput){
            logText = "Tie";
            infoText.textContent = "Tie"
        }else if((compOutput === "Paper" && playerSelection === "Rock") || (playerSelection === "Paper" && compOutput === "Scissors") || (playerSelection === "Scissors" && compOutput === "Rock")){
            computerPoints++
            compScoreText.textContent = computerPoints
            infoText.textContent = `You lose! ${compOutput} beats ${playerSelection}`;
        }
    }   
}

// Utility
function scoreChecker(playerPoints,computerPoints){
    if (playerPoints >= 5 && computerPoints <=5 ){
        console.log("You win")
    }else if(playerPoints <= 5 && computerPoints >=5 ){
        console.log("You lose")
    }
}

function handleClick(playerSelection){
    let compOutput = getComputerChoice();
    playRound(playerSelection,compOutput)
    scoreChecker(playerPoints,computerPoints)
}


