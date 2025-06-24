const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  createLogEntry("Add", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  createLogEntry("Subtract", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  createLogEntry("Multiply", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  createLogEntry("Divide", initialResult, enteredNumber, currentResult);
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
