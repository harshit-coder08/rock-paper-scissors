let wantToPlay = prompt("Do you want to play 5 rounds of Rock,Paper and Scissors(y/n): ").toLocaleLowerCase()
let gameOn = false

switch (wantToPlay) {
    case "y":
        gameOn = true;
        break;
    case "n":
        gameOn = false
        break;
}

function playerTurn() {
    let playerPlays = prompt("Choose from Rock, Paper or Scissor").toLowerCase()
    switch (playerPlays) {
        case "Rock":
            break;
        case "Paper":
            break;
        case "Scissor":
            break;
    }
    console.log(`You choose ${playerPlays}`)
    return playerPlays
}

function computerTurn() {
    const choices = ["rock", "paper", "scissor"];
    let computerPlays =  choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer chooses ${computerPlays}`)
    return computerPlays
}

let playerScore = 0;
let computerScore = 0;
function updateScore() {
    if (playerChoice == "rock" && computerChoice == "scissor") {
        playerScore++;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        playerScore++;
    } else if (playerChoice == "scissor" && computerChoice == "paper") {
        playerScore++;
    } else if (playerChoice == computerChoice) {
    } else {
        computerScore++;
    }
    console.log(`Your score : ${playerScore}`)
    console.log(`Computer's score ${computerScore}`)
}
let playerChoice;
let computerChoice;
let checkPlayerWin;


while (gameOn) {
    for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
        playerChoice = playerTurn()
        computerChoice = computerTurn()
        checkPlayerWin = updateScore();
        console.log("")
    }
    if (playerScore < computerScore) {
        console.log("Computer wins, You suck!")
    } else if (playerScore > computerScore) {
        console.log("You Win!")
    } else {
        console.log("Draw!")
    }
    gameOn = false
}
