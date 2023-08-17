

function getComputerChoice(opt) {
    const randomIndex = Math.floor(Math.random()* opt.length);
    const item = opt[randomIndex];
    return item;

}

const options = ["Rock", "Paper", "Scissors"];

function playGame(playerSelection,computerSelection){
    let firstLetter = playerSelection.slice(0,1);
    let restLetters = playerSelection.substr(1);
    let pSelection = firstLetter.toUpperCase() + restLetters.toLowerCase();

    (console.log(pSelection))
    (console.log(computerSelection));

    if (computerSelection === "Rock" && pSelection === "Paper") {
        return ("You win! Paper beats Rock"); }

    if (computerSelection === "Paper" && pSelection === "Rock") {
        return ("You lose! Paper beats Rock"); }
    
    if (computerSelection === "Rock" && pSelection === "Scissors") {
        return ("You lose! Rock beats Scissors");
    }
    if (computerSelection === "Scissors" && pSelection === "Rock") {
        return ("You win! Rock beats Scissors");
    }
    if (computerSelection === "Paper" && pSelection === "Scissors") {
        return ("You win! Scissors beats Paper");
    }
    if (computerSelection === "Scissors" && pSelection === "Paper") {
        return ("You win! Paper beats Scissors");
    }
    if (computerSelection === pSelection) {
        return ("It's a tie!");
    }
      
}




