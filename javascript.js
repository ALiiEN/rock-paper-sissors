function computerPlay(){
    const choices = [
        "Rock",
        "Paper",
        "Sissors"
    ];

    const computerChoice = Math.floor(Math.random() * choices.length);

    const choicehoice = choices[computerChoice];

    console.log(choicehoice);
}

computerPlay();