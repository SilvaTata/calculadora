let displayValue = '';
let operator = '';
let firstValue = '';
let secondValue = '';

document.getElementById('input').value = displayValue;

function appendNumber(num) {
	displayValue += num;
	document.getElementById('input').value = displayValue;
  atualizaResultados()
}

function setOperator(op) {
	operator = op;

	if (firstValue == '') {
		firstValue = parseFloat(displayValue);
		displayValue = '';
	}

  atualizaResultados();
}

function clearDisplay() {
	displayValue = '';
	document.getElementById('input').value = displayValue;
  atualizaResultados()
}

function limpar() {
	let tamanho = displayValue.length;

	if (tamanho < 1) {
		return;
	}

	displayValue = displayValue.slice(0, tamanho - 1);
	document.getElementById('input').value = displayValue;
  atualizaResultados()
}

function inverter() {
	if (displayValue != '') {
		displayValue = (parseFloat(displayValue) * -1).toString();
		document.getElementById('input').value = displayValue;
	}
}

function atualizaResultados() {
  console.log(firstValue, operator, displayValue)
  let tagCalculo = document.getElementById('calculo')

  if( operator != '') {
    tagCalculo.innerHTML = firstValue + operator + displayValue
  } else {
    tagCalculo.innerHTML = displayValue
  }
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
	document.getElementById('input').value = result;
	displayValue = '';
	operator = '';
	firstValue = '';
	secondValue = '';
}
