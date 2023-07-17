let score = {
  wins: 0,
  looses: 0,
  ties: 0,
};
let c = document.getElementsByClassName("display")[0];
c.style.background = "gray";
c.style.padding = "5px";
c.style.margin = "5px";
console.log(c);
function playGame(playerChoice) {
  let id = document.getElementById("result");
  let ans = "";
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log("Player chooses: " + playerChoice);
  console.log("Computer chooses: " + computerChoice);

  if (playerChoice === computerChoice) {
    ans = "It's a tie!";
    score.ties += 1;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    ans = "Player wins!";
    score.wins += 1;
  } else {
    ans = "Computer wins!";
    score.looses += 1;
  }
  id.value = ans;
  // Get the parent element with the class "main"

  if (ans == "Player wins!") {
    document.getElementById("result").style.background = "Green";
    document.getElementById("result").style.color = "White";
  } else if (ans === "Computer wins!") {
    document.getElementById("result").style.background = "Red";
    document.getElementById("result").style.color = "White";
  } else {
    document.getElementById("result").style.background = "Yellow";
    document.getElementById("result").style.color = "Black";
  }

  document.getElementById("win").textContent = score.wins;
  document.getElementById("loose").textContent = score.looses;
  document.getElementById("ties").textContent = score.ties;
}
