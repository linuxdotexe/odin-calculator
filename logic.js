let operandA;
let operandB;
let operator;

function operate(operandA, operandB, operator) {
  if (operator === "+") {
    return add(operandA, operandB);
  } else if (operator === "-") {
    return subtract(operandA, operandB);
  } else if (operator === "*") {
    return multiply(operandA, operandB);
  } else {
    return divide(operandA, operandB);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "try again.";
  }
}
