const playerOneRoll = Math.floor(Math.random() * 6) + 1;
const playerTwoRoll = Math.floor(Math.random() * 6) + 1;

const playerOneDie = document.querySelector("#player-one-die");
const playerTwoDie = document.querySelector("#player-two-die");
const resultHeading = document.querySelector(".result");

// Update the dice images to match the randomly generated rolls.
playerOneDie.src = `images/dice${playerOneRoll}.png`;
playerTwoDie.src = `images/dice${playerTwoRoll}.png`;

playerOneDie.alt = `Player 1 rolled a ${playerOneRoll}`;
playerTwoDie.alt = `Player 2 rolled a ${playerTwoRoll}`;

// Compare the rolls and display the result.
if (playerOneRoll > playerTwoRoll) {
  resultHeading.textContent = "Player 1 Wins! 🚩";
} else if (playerTwoRoll > playerOneRoll) {
  resultHeading.textContent = "Player 2 Wins! 🚩";
} else {
  resultHeading.textContent = "It's a Draw!";
}
