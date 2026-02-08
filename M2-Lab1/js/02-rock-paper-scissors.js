function playGame() {
    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    if (!["rock", "paper", "scissors"].includes(userChoice)) {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }

    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}\n${result}`);
}

playGame();
