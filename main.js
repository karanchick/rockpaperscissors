

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
    console.log(computerSelection);

    if (computerSelection === "Rock" && pSelection === "Paper") {
        return 1 }//("You win! Paper beats Rock"); }
    if (computerSelection === "Paper" && pSelection === "Rock") {
        return 0}//("You lose! Paper beats Rock"); }
    if (computerSelection === "Rock" && pSelection === "Scissors") {
        return 0}//"You lose! Rock beats Scissors");}
    if (computerSelection === "Scissors" && pSelection === "Rock") {
        return 1}//("You win! Rock beats Scissors"); }
    if (computerSelection === "Paper" && pSelection === "Scissors") {
        return 1}//("You win! Scissors beats Paper");}
    if (computerSelection === "Scissors" && pSelection === "Paper") {
        return 0}//("You lose! Scissors beats Paper"); }
    if (computerSelection === pSelection) {
        return 3}//("It's a tie!");}
      
}
let playerSelection = prompt("Type your choice:")
let computerSelection = getComputerChoice(options)

let round = 0
let pScore = 0
let cScore = 0

function game() {
    playGame(playerSelection,computerSelection);
    if (playGame(playerSelection,computerSelection)== 1) {
        round++;
        pScore++;
        return "You won! Your score is " + pScore + ". The CPU's score is " + cScore + "! And the round is " + round
    }
    if ((playGame(playerSelection,computerSelection)== 0)){
        round++;
        cScore++;
        return "You lost! Your score is " + pScore + ". The CPU's score is " + cScore + "! And the round is " + round
    }
    else {
        round++;
        return "It's a tie! Your score is " + pScore + ". The CPU's score is " + cScore + "! And the round is " + round
    }
}

console.log(game())


