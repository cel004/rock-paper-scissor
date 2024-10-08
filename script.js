const hands = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * hands.length);

    return hands[randomIndex]; // returns the computers choice
}

function getHumanChoice() {
    let humanPlay = prompt("rock, paper, or scissor?");

    /* transforms input to lowercase*/
    humanPlay = humanPlay.toLowerCase();

    if(hands.includes(humanPlay)){
        console.log("player chose " + humanPlay);
        return humanPlay;
    } else{
        console.log("invalid choice, please pick from the three (3) options.")
        return getHumanChoice();
    }
}

function round(){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log("computer chose " + computerChoice);

    if(computerChoice === humanChoice){
        console.log("tie");
    } else if(
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissor" && humanChoice === "paper")){
            computerScore++;
            console.log("computer wins the round!")
        } else{
            humanScore++;
            console.log("player wins this round");
        }
        console.log(`player score: ${humanScore}, computer score: ${computerScore}`);
    }

function playGame(){
        while((humanScore + computerScore) < 5){
            round();
        }

        if(humanScore > computerScore){
            console.log("player wins with a score of " + humanScore);
        } else{
            console.log("computer wins with a score of " + computerScore);
        }
    }

    playGame();

