const choiceBtns = document.querySelectorAll(".choice");
const selectionScreen = document.getElementById("selection-screen");
const resultScreen = document.getElementById("result-screen");
const userImg = document.getElementById("user-img");
const computerImg = document.getElementById("computer-img");
const userText = document.getElementById("user-text");
const computerText = document.getElementById("computer-text");
const finalResult = document.getElementById("final-result");
const playAgainBtn = document.getElementById("play-again");

const choices = ["rock", "paper", "scissors"];

// Map choice to image path
function getImage(choice) {
  return `${choice}.png`;
}

// Game logic
function getWinner(user, computer) {
  if (user === computer) return "Draw";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) return "You Win!";
  else return "You Lose!";
}

// Main game function
choiceBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const userChoice = btn.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Update images and texts
    userImg.src = getImage(userChoice);
    computerImg.src = getImage(computerChoice);
    userText.textContent = capitalize(userChoice);
    computerText.textContent = capitalize(computerChoice);
    finalResult.textContent = `Result: ${getWinner(userChoice, computerChoice)}`;

    // Switch screens
    selectionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
  });
});

// Play again
playAgainBtn.addEventListener("click", () => {
  selectionScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
});

// Capitalize for display
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
