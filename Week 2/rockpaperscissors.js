let playGame = confirm("Shall we play rock, paper or scissors?");
if (playGame) {
  let playerChoice = prompt("Please enter rock, paper or scissors.");

  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);

      computerMove =
        computerChoice === 1
          ? "scissors"
          : computerChoice === 2
          ? "rock"
          : "paper";

      let result =
        playerOne === computerMove
          ? "Tie game!"
          : playerOne === "rock" && computerMove === "paper"
          ? `Player: ${playerOne}\nComputer: ${computerMove}\nComputer wins!`
          : playerOne === "paper" && computerMove === "scissors"
          ? `Player: ${playerOne}\nComputer: ${computerMove}\nComputer wins!`
          : playerOne === "scissors" && computerMove === "rock"
          ? `Player: ${playerOne}\nComputer: ${computerMove}\nComputer wins!`
          : `Player: ${playerOne}\nComputer: ${computerMove}\nYOU win!`;
      alert(result);

      let playAgain = confirm("Do you want to play again?")
      playAgain ? location.reload() : alert("Ok! Bye Bye!")
    } else {
      alert("You didn't enter anything valid...");
    }
  } else {
    alert("Yo you didn't enter anything, try again next time");
  }
} else {
  alert("Aw man, I wanted to play :(");
}
