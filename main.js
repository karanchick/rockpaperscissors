

function getComputerChoice(opt) {
    const randomIndex = Math.floor(Math.random()* opt.length);
    const item = opt[randomIndex];
    return item;

}

const options = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(options));

