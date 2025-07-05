const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getUserChoise = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid input, ${DEFAULT_USER_CHOICE} was selected for you!`);
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  }

  return SCISSORS;
};

const getWinner = (playerChoice, computerChoice) =>
  playerChoice === computerChoice
    ? "It's a draw!"
    : (playerChoice === ROCK && computerChoice === SCISSORS) ||
      (playerChoice === PAPER && computerChoice === ROCK) ||
      (playerChoice === SCISSORS && computerChoice === PAPER)
    ? 'You win!'
    : 'Computer wins!';

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game started!');
  const userChoice = getUserChoise();
  const computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  const winner = getWinner(userChoice, computerChoice);
  console.log(winner);
});
