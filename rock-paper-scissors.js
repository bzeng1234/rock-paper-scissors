let user_score = 0;
let comp_score = 0;
let round_count = 0;

let gameResult = document.createElement('div');
gameResult.setAttribute('style', 'font-family: Verdana, sans-serif; text-align: center; padding-top: 20px;')

let bodySelector = document.querySelector('body');

const userChoice = document.querySelectorAll("button");
userChoice.forEach(choice => choice.addEventListener('click', game));

function getComputerChoice() {
    let choice_arr = ["Rock", "Paper", "Scissor"];
    return choice_arr[Math.floor(Math.random()*3)].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    // tie scenario
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissor" && computerSelection === "scissor")) {
        return `Tie Game. Both players choose ${playerSelection} ${user_score} - ${comp_score}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        user_score++;
        return `You Win! ${playerSelection} beats ${computerSelection} ${user_score} - ${comp_score}`;
    } else {
        comp_score++;
        return `You Lose! ${computerSelection} beats ${playerSelection} ${user_score} - ${comp_score}`;
    }
}

function game(e) {
    let user_choice = e.target.value.toLowerCase();
    let comp_choice = getComputerChoice();

    gameResult.textContent =  playRound(user_choice, comp_choice);
    
    bodySelector.appendChild(gameResult);
    round_count++;

    if (round_count == 5) {
        if (user_score > comp_score) {
            gameResult.textContent = `Player Wins ${user_score} - ${comp_score}`;
            bodySelector.appendChild(gameResult);
        } else if (comp_score > user_score) {
            gameResult.textContent = `Computer Wins ${user_score} - ${comp_score}`;
            bodySelector.appendChild(gameResult);
        } else {
            gameResult.textContent = `Tie Game ${user_score} - ${comp_score}`;
            bodySelector.appendChild(gameResult);
        }
        resetGame();
    } 
}

function resetGame() {
    round_count = 0;
    user_score = 0;
    comp_score = 0;
}