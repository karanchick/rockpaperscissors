

function getComputerChoice(opt) {
    const randomIndex = Math.floor(Math.random()* opt.length);
    const item = opt[randomIndex];
    return item;
}
const options = ["Rock", "Paper", "Scissors"];

let pScore = 0
let cScore = 0
let round = 0

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    playerSelection = 'Rock';
    playRound();
   
})

function matchup(playerSelection,computerSelection){
    console.log("You selected: " + playerSelection);
    console.log("CPU selected: " + computerSelection);

    if (computerSelection === "Rock" && playerSelection === "Paper") {
        return 1 }//("You win! Paper beats Rock"); }
    if (computerSelection === "Paper" && playerSelection === "Rock") {
        return 0}//("You lose! Paper beats Rock"); }
    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return 0}//"You lose! Rock beats Scissors");}
    if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return 1}//("You win! Rock beats Scissors"); }
    if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return 1}//("You win! Scissors beats Paper");}
    if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return 0}//("You lose! Scissors beats Paper"); }
    if (computerSelection === playerSelection) {
        return 3}//("It's a tie!");}
      
}


function playRound() {
        //let playerSelection = prompt("Type your choice:")
        let computerSelection = getComputerChoice(options);
        matchup(playerSelection,computerSelection);
        let result = matchup(playerSelection, computerSelection);
        if (result == 1) {
            round++;
            pScore++;
            console.log( "You won! Your score is " + pScore + 
            ". The CPU's score is " + cScore + "! And the round is " + round)
        }
        if (result == 0){
            round++;
            cScore++;
            console.log( "You lost! Your score is " + pScore + 
            ". The CPU's score is " + cScore + "! And the round is " + round)
        }
        if (result == 3){
            round++;
            console.log ("It's a tie! Your score is " + pScore + 
            ". The CPU's score is " + cScore + "! And the round is " + round)
        }

    }








