const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    throw new Error("Invalid calculation type");
  }

  const initialResult = currentResult;
  let operator;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    operator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    operator = "/";
  }

  createAndWriteOutput(operator, initialResult, enteredNumber);
  createLogEntry(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
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
