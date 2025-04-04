let display = document.getElementById("display");
let currentValue = "";
let operator = "";
let firstValue = null;

function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

function setOperator(op) {
    if (firstValue === null) {
        firstValue = parseFloat(currentValue);
    } else if (operator) {
        firstValue = calculate();
    }
    operator = op;
    currentValue = "";
}

function calculate() {
    if (operator && currentValue !== "") {
        const secondValue = parseFloat(currentValue);
        let result;
        switch (operator) {
            case "+":
                result = firstValue + secondValue;
                break;
            case "-":
                result = firstValue - secondValue;
                break;
            case "*":
                result = firstValue * secondValue;
                break;
            case "/":
                result = firstValue / secondValue;
                break;
        }
        display.value = result;
        firstValue = result;
        currentValue = "";
        operator = "";
        return result;
    }
}

function clearDisplay() {
    currentValue = "";
    operator = "";
    firstValue = null;
    display.value = "";
}
