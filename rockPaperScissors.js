const moves = ["rock", "paper", "scissors"];
const playerMove = process.argv[2]?.toLowerCase();
const computerMove = moves[Math.floor(Math.random() * moves.length)];

if (!playerMove) {
    console.log("Please enter rock, paper, or scissors");
    process.exit();
}

if (!moves.includes(playerMove)) {
    console.log("Invalid move! only enter rock, paper, or scissors");
    process.exit();
}

let result;
let color;

if (playerMove === computerMove) {
    result = "It's a draw!";
    color = "\x1b[33m";
} else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
) {
    result = "You win!";
    color = "\x1b[32m";
} else {
    result = "Computer wins!";
    color = "\x1b[31m";
}

console.log(`You chose: ${playerMove}`);
console.log(`Computer chose: ${computerMove}`);
console.log(color + result + "\x1b[0m");
