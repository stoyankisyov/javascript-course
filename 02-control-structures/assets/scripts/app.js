const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

addBtn.addEventListener('click', calculateResult.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculateResult.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculateResult.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculateResult.bind(this, 'DIVIDE'));

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    !enteredNumber
  ) {
    throw new Error('Invalid calculation type');
  }

  const initialResult = currentResult;
  let operator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    operator = '/';
  }

  createAndWriteOutput(operator, initialResult, enteredNumber);
  createLogEntry(calculationType, initialResult, enteredNumber, currentResult);
}

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const output = `${resultBeforeCalc} ${operator} ${calcNumber}`;

  outputResult(currentResult, output);
}

function createLogEntry(operator, prevResult, number, currentResult) {
  const logEntry = {
    operation: operator,
    prevResult: prevResult,
    number: number,
    result: currentResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}
