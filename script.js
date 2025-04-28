function add(){
    const nums = Array.from(arguments);
    return nums.reduce((a,b) => a + b);
}
function subtract(){
    const nums = Array.from(arguments);
    return nums.reduce((a,b) => a-b);
}
function multiply(){
    const nums = Array.from(arguments);
    return nums.reduce((a,b) => a * b,1);
}
function divide(){
    const nums = Array.from(arguments);
    return nums.reduce((a,b) => a / b,);
}

function operate (a,b,sign) {
    a = parseInt(a);
    b = parseInt(b);
    if (sign === '+') {
        return add(a,b);
    }
    else if (sign === '-') {
        return subtract(a,b);
    }
    else if (sign === 'x') {
        return multiply(a,b);
    }
    else if (sign === '÷') {
        return divide(a,b);
    }
    else {
        return 'ERR!'
    }
}

let userNumbers;

const display = document.querySelector('.calculator-screen');

const number = document.querySelectorAll('.number');
for (let i = 0;i<number.length;i++) {
    number[i].addEventListener('click', function() {
        if (userNumbers === undefined) {
            userNumbers = number[i].textContent;
        }
        else if (userNumbers.length < 8) {
            userNumbers += number[i].textContent;
        }
        //const display = document.querySelector('.calculator-screen');
        display.textContent = userNumbers;
        
    })
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
    userNumbers = '';
    sign = '';
    result = '';
    //const display = document.querySelector('.calculator-screen');
    display.textContent = userNumbers;
})

let storedNum1;
let storedNum2;
let sign;

const oper = document.querySelectorAll('.oper');
oper.forEach(operator => {
    operator.addEventListener('click', function () {
        storedNum1 = userNumbers;
        userNumbers = '';
        sign = operator.textContent;
    })
})

const equals = document.querySelector('.equals').addEventListener('click', function () {
    let result = '';
    if (sign === undefined) {
        display.textContent = userNumbers;
        userNumbers = '';
    } else if (userNumbers === '') {
        storedNum2 = storedNum1;
        result = operate(storedNum1,storedNum2,sign)
    } else {
        result = operate(storedNum1, userNumbers, sign);
    }

    if (result === undefined) {
        display.textContent = result;
    }

    if (String(result).length > 8) {
        display.textContent = result.toExponential(2);
    } else {
        display.textContent = result;
    }
    userNumbers = '';
});