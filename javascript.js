function computerPlay(){
    const choices = [
        "rock",
        "paper",
        "sissors"
    ];

    const index = Math.floor(Math.random() * choices.length);

    const choice = choices[index];

    return choice

    //console.log(choice);
}

const playerSelection = "Rock".toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    }else if (playerSelection === "rock" && computerSelection === "sissors"){
        return "You Win! Rock beats Sissors"
    }else {
        return "Place Holder"
    }
}


console.log(computerSelection)
console.log(playerSelection)


console.log(playRound(playerSelection, computerSelection));