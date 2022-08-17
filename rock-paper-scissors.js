let user_score = 0;
let comp_score = 0;

function getComputerChoice() {
    let choice_arr = ["Rock", "Paper", "Scissors"];
    return choice_arr[Math.floor(Math.random()*3)].toLowerCase();
}

function playerSelection() {
    let user_choice = prompt("Select Rock, Paper, or Scissors");
    return user_choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    // tie scenario
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return `Tie Game. Both players choose ${playerSelection}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        user_score++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        comp_score++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let comp_choice = getComputerChoice();
        let user_choice = playerSelection();
        console.log(playRound(user_choice, comp_choice));
    }

    if (user_score > comp_score) {
        console.log("Player Wins");
    } else if (comp_score > user_score) {
        console.log("Computer Wins");
    } else {
        console.log("Tie Game");
    }
    
}