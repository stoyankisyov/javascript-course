const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const GAME_RESULT_DRAW = 'DRAW';
const GAME_RESULT_PLAYER_WINS = 'PLAYER_WINS';
const GAME_RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

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
    ? GAME_RESULT_DRAW
    : (playerChoice === ROCK && computerChoice === SCISSORS) ||
      (playerChoice === PAPER && computerChoice === ROCK) ||
      (playerChoice === SCISSORS && computerChoice === PAPER)
    ? GAME_RESULT_PLAYER_WINS
    : GAME_RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const userChoice = getUserChoise();
  const computerChoice = getComputerChoice();
  const winner = getWinner(userChoice, computerChoice);
  let message = `You picked ${userChoice}, computer picked ${computerChoice}, therefore `;
  if (winner === GAME_RESULT_DRAW) {
    message += "it's a draw!";
  } else if (winner === GAME_RESULT_PLAYER_WINS) {
    message += 'you win!';
  } else {
    message += 'you lose!';
  }

  alert(message);
  gameIsRunning = false;
});
