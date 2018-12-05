function calculate(inputValue) {

    const regex = /\+|\/|\-|\*/;
    const values = inputValue.split(regex);
    var value1 =parseInt(values[0]);

    var value2 = parseInt(values[1]);
    const operation = inputValue.match(regex);
    if(Number.isNaN(value1)||Number.isNaN(value2)||operation==null){
        updateResult('operation not specified');
        return;
    }
    const calculator = new Calculator();
    
    calculator.add(value1);
    
    var result;
    
    switch (operation[0]) {
        case '+':
            result = calculator.add(value2);
            break;
        case '-':
            result = calculator.sub(value2);
            break;
        case '*':
            result = calculator.mul(value2);
            break;
        case '/':
            result = calculator.div(value2);
            break;
            case 'default':
            result='operation not specified';
    }
    updateResult(result);
}

function updateResult(result) {
    const element = document.getElementById('result');
    if (element) {
        element.innerText = result;
    }
}