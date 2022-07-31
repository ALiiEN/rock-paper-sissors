let playerScore = 0
let computerScore = 0

// generates random computer choice
function computerPlay(){
    const choices = [
        "rock",
        "paper",
        "sissors"
    ]

    const index = Math.floor(Math.random() * choices.length)
    const choice = choices[index]

    return choice
}

const playerSelection = "Paper".toLowerCase();
const computerSelection = computerPlay();

//plays a round and returns score
// function playRound(playerSelection){
//     let computerSelection = computerPlay()
//     if (playerSelection === "rock" && computerSelection === "paper" ||
//         playerSelection === "paper" && computerSelection === "sissors" ||
//         playerSelection === "sissors" && computerSelection === "rock") {
//             computerScore += 1
//             return "You Lose! " + playerSelection + " Loses to " + computerSelection + "!"
//     }else if (playerSelection === "rock" && computerSelection === "sissors" ||
//         playerSelection === "paper" && computerSelection === "rock" ||
//         playerSelection === "sissors" && computerSelection === "paper"){
//             playerScore += 1
//             return "You Win! " + playerSelection + " Beats " + computerSelection + "!"
//     }else {
//         return "Its a Draw"
//         // playerScore += 0
//         // computerScore += 0
//     }
// }

function playRound(playerSelection){
    let computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        return "Its a Draw"
    }else if ( playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "sissors" ||
    playerSelection === "sissors" && computerSelection === "rock"){
        computerScore += 1
        return "You Lose! " + playerSelection + " Loses to " + computerSelection + "!"
    }else {
        playerScore += 1
        return "You Win! " + playerSelection + " Beats " + computerSelection + "!"
    }
}

let result = playRound()

console.log(playerSelection)
console.log(computerSelection)
console.log(result)
console.log("Player score: " + playerScore)
console.log("Computer score: " + computerScore)

//plays 5 rounds logs score each time
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection)
        console.log(result)
        console.log("Player score: " + playerScore)
        console.log("Computer score: " + computerScore)
    }
}

//game()