let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
    currentInput += number.toString();
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    updateDisplay();
}

function setOperation(operator) {
    if (currentInput === '') return; // Don't set an operation if there's no input
    if (previousInput !== '') {
        calculateResult();
    }
    currentOperation = operator;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
