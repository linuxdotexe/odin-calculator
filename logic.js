let operandA;
let operandB;
let operator;

const display = document.getElementById("display");
let currentNumber = "";

const numButtons = document.querySelectorAll(".num");
numButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (display.textContent.length > 9) {
      display.textContent = display.textContent.slice(0, 10);
    } else {
      display.textContent += btn.textContent;
    }
    currentNumber = display.textContent;
  });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operandA === undefined) {
      operandA = currentNumber;
    } else {
      operandB = currentNumber;
      operandA = operate(operandA, operandB, operator);
    }
    display.textContent = "";
    operator = btn.textContent;
  });
});

const eq = document.getElementById("eq");
eq.addEventListener("click", () => {
  operandB = currentNumber;
  let result = operate(operandA, operandB, operator);
  display.textContent = result;
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  display.textContent = "";
  operandA = undefined;
  operandB = undefined;
  operator = undefined;
});

const backspaceButton = document.getElementById("del");
backspaceButton.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
  currentNumber = display.textContent;
});

function operate(operandA, operandB, operator) {
  if (operator === "+") {
    return add(operandA, operandB);
  } else if (operator === "-") {
    return subtract(operandA, operandB);
  } else if (operator === "X") {
    return multiply(operandA, operandB);
  } else {
    return divides(operandA, operandB);
  }
}

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divides(a, b) {
  if (b > 0) {
    return parseInt(a) / parseInt(b);
  } else {
    return "try again.";
  }
}
