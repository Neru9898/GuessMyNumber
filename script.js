"use strict";
let numToGuess = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
const checkNum = () => {
  const inputNum = Number(document.querySelector(".guess").value);
  const score = document.querySelector(".score").innerHTML;

  if (inputNum >= 1 && inputNum <= 20) {
    if (inputNum === numToGuess) {
      document.querySelector(
        ".message"
      ).innerHTML = `You guessed correct!!✅✅`;
      score > highScore
        ? (document.querySelector(".highscore").innerHTML = score)
        : null;
    } else {
      inputNum > numToGuess
        ? (document.querySelector(
            ".message"
          ).innerHTML = `You guessed incorrect!! Your guess is to high!!❌❌`)
        : (document.querySelector(
            ".message"
          ).innerHTML = `You guessed incorrect!! Your guess is to low!!❌❌`);
      document.querySelector(".score").innerHTML -= 1;
    }
  } else {
    document.querySelector(
      ".message"
    ).innerHTML = `${inputNum} not in range!!! Pick between 1 and 20`;
  }
};

const resetGame = () => {
  document.querySelector(".guess").value = "";
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector(".score").innerHTML = 20;
  numToGuess = Math.floor(Math.random() * 20) + 1;
};
