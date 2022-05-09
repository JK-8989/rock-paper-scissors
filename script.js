// 1. create random three numbers and assign each number either 'Rock', 'Paper' or 'Scissors'

let random_num = Math.floor(Math.random() * 3);

function computerPlay() {
  if (random_num === 2) {
    return "rock";
  } else if (random_num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const COMPUTER = computerPlay();

// 2. receive Player's inputs and make them case insensitive
const player_input = prompt('Type either "Rock", "Paper" or "Scissors"');
const PLAYER = player_input.toLowerCase();

// 3. show error message
if (PLAYER !== "rock" && PLAYER !== "paper" && PLAYER !== "scissors") {
  prompt("Invalid word. Please type valid word");
}

// 4. compare inputs from both and print the result message
function game() {
  if (COMPUTER === "scissors" && PLAYER === "paper") {
    console.log(`You Lose`);
  } else if (COMPUTER === "scissors" && PLAYER === "rock") {
    console.log("You Win!");
  } else if (COMPUTER === "paper" && PLAYER === "scissors") {
    console.log("You Win!");
  } else if (COMPUTER === "paper" && PLAYER === "rock") {
    console.log(`You Lose`);
  } else if (COMPUTER === "rock" && PLAYER === "paper") {
    console.log("You Win!");
  } else if (COMPUTER === "rock" && PLAYER === "scissors") {
    console.log("You Lose!");
  } else if (COMPUTER === PLAYER) {
    console.log(`It's a tie`);
  }
}
game();

// testing branch 2
