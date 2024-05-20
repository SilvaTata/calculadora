// Inicializando as variáveis que irão armazenar os valores e o operador.
let displayValue = '';
let operator = '';
let firstValue = '';
let secondValue = '';

// Definindo o valor inicial do campo de input como vazio.
document.getElementById('input').value = displayValue;

// Função para adicionar um número ao valor exibido e atualizar o input.
function appendNumber(num) {
    displayValue += num;
    document.getElementById('input').value = displayValue;
    atualizaResultados(); // Atualiza os resultados mostrados na interface.
}

// Função para definir o operador (+, -, *, /).
function setOperator(op) {
    operator = op;

    // Se firstValue estiver vazio, atribui o valor exibido a firstValue e limpa displayValue.
    if (firstValue == '') {
        firstValue = parseFloat(displayValue);
        displayValue = '';
    }

    atualizaResultados(); // Atualiza os resultados mostrados na interface.
}

// Função para limpar o display.
function clearDisplay() {
    displayValue = '';
    document.getElementById('input').value = displayValue;
    atualizaResultados(); // Atualiza os resultados mostrados na interface.
}

// Função para remover o último caractere do valor exibido.
function limpar() {
    let tamanho = displayValue.length;

    // Se não houver caracteres para remover, retorna.
    if (tamanho < 1) {
        return;
    }

    displayValue = displayValue.slice(0, tamanho - 1);
    document.getElementById('input').value = displayValue;
    atualizaResultados(); // Atualiza os resultados mostrados na interface.
}

// Função para inverter o sinal do valor exibido.
function inverter() {
    if (displayValue != '') {
        displayValue = (parseFloat(displayValue) * -1).toString();
        document.getElementById('input').value = displayValue;
    }
}

// Função para atualizar os resultados mostrados na interface.
function atualizaResultados() {
    console.log(firstValue, operator, displayValue); // Log para depuração.
    let tagCalculo = document.getElementById('calculo');

    // Se um operador estiver definido, mostra o cálculo parcial, caso contrário, mostra apenas displayValue.
    if (operator != '') {
        tagCalculo.innerHTML = firstValue + operator + displayValue;
    } else {
        tagCalculo.innerHTML = displayValue;
    }
}

// Função para realizar o cálculo final.
function calculate() {
    secondValue = parseFloat(displayValue); // Atribui o valor exibido a secondValue.
    let result;

    // Realiza a operação com base no operador definido.
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

    // Atualiza o input com o resultado e reseta as variáveis.
    document.getElementById('input').value = result;
    displayValue = '';
    operator = '';
    firstValue = '';
    secondValue = '';
}
