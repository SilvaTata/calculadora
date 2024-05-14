let displayValue = '';
let operator = '';
let firstValue = '';
let secondValue = '';

function appendNumber(num) {
  displayValue += num;
  document.getElementById('display').value = displayValue;
}

function setOperator(op) {
  operator = op;
  firstValue = parseFloat(displayValue);
  displayValue = '';
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  secondValue = parseFloat(displayValue);
  let result;
  if (operator === '+') {
    result = firstValue + secondValue;
  } else if (operator === '-') {
    result = firstValue - secondValue;
  } else if (operator === '*') {
    result = firstValue * secondValue;
  } else if (operator === '/') {
    if (secondValue !== 0) {
      result = firstValue / secondValue;
    } else {
      result = 'Error: Divisão por zero!';
    }
  } else {
    result = 'Error: Operador inválido!';
  }
  document.getElementById('display').value = result;
  displayValue = '';
}
