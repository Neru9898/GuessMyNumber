"use strict";
let numToGuess = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
const checkNum = () => {
  const inputNum = Number(document.querySelector(".guess").value);

  if (inputNum >= 1 && inputNum <= 20) {
    if (inputNum === numToGuess) {
      document.querySelector(
        ".message"
      ).innerHTML = `You guessed correct!!✅✅`;
    } else {
      document.querySelector(
        ".message"
      ).innerHTML = `You guessed incorrect!!❌❌`;
      document.querySelector(".score").innerHTML -= 1;
    }
  } else {
    document.querySelector(
      ".message"
    ).innerHTML = `${inputNum} not in range!!! Pick between 1 and 20`;
  }
  console.log(numToGuess);
};
