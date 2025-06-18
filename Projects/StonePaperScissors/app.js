let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randomIds = Math.floor(Math.random() * 3);

  return options[randomIds];
};

drawGame = () => {
  console.log("Game was draw.");
  msg.innerText = "Game was Draw. Play Again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You win!");

    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;

    msg.style.backgroundColor = "green";
  } else {
    console.log("You lose!");

    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;

    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);
  // generate computer choice
  const compChoice = generateComputerChoice();
  console.log("Computer choice = ", compChoice);

  if (userChoice === compChoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //console.log(choice);

  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("Choice was Clicked", userChoice);
    playGame(userChoice);
  });
});
