const calculator = {
    operand1: '',
    operand2: '',
    operator: '',
    display: ''
}

function init() {
    document.getElementById('display').value = '0';
    calculator.display = '0';
}

addEventListener('DOMContentLoaded', init);

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
  return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}

function numPress(value) {

    currentDisplay= calculator.display;
    if (calculator.display == '0') {
        calculator.display = '';
    }

    if (calculator.operator === '') {
        calculator.operand1 += value;
    }
    else {
        calculator.operand2 += value;
    }

    calculator.display += value;
    updateDisplay(calculator.display);
}

function operPress(value) {
    // if the user already pressed an operator before
    if (calculator.operator !== '') {
        // if the user typed second operand 
        if (calculator.operand2 !== '') {
            equalPress();
        }
        else {
            // overwrite the operator
            calculator.display = calculator.display.slice(0, -1);
        }
    }
    
    calculator.operator = value;
    calculator.display += value;
    updateDisplay(calculator.display);
}

function equalPress() {
    if (calculator.operand2 === '' 
        || calculator.operand1 === '' 
        || calculator.operator === '') {
        return;
    }
    let result = operate(parseFloat(calculator.operand1), 
                        parseFloat(calculator.operand2), 
                        calculator.operator);
    
    calculator.display = result
    updateDisplay(result);

    calculator.operand1 = result;
    calculator.operand2 = '';
    calculator.operator = '';
}

function clearPress() {
    calculator.operand1 = '';
    calculator.operand2 = '';
    calculator.operator = '';
    calculator.display = '0';
    updateDisplay('0');
}