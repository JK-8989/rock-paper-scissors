 // to create a function that randomly return either 'Rock', 'Paper' or 'Scissors'
      // 1. get three random numbers
      let i = Math.floor(Math.random() * 3);

      // 2. assign each number either 'Rock', 'Paper' or 'Scissors' to computerPlay
      function computerPlay() {
        if (i === 2) {
          return "rock";
        } else if (i === 1) {
          return "paper";
        } else {
          return "scissors";
        }
      }

      const COMPUTER = computerPlay();

      // 3. receive Player's inputs from the prompt and make them case insensitive
      const j = prompt('Type either "Rock", "Paper" or "Scissors"');
      const PLAYER = j.toLowerCase();

      // 4. show "Type valid word" message
      if (PLAYER !== "rock" && PLAYER !== "paper" && PLAYER !== "scissors") {
        prompt("Invalid word. Please type valid word");
      }

      // 5. compare inputs from both and print the result message
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
        } else if (COMPUTER === PLAYER){
          console.log(`It's a tie`);
        }
      }
      game()