//start of main calc functions
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
    if (nums[1] === 0) {
        alert('Error: Division by zero');
        return;
    } 
    return nums.reduce((a,b) => a / b,);
}

//calculate
function operate (a,b,sign) {
    a = parseFloat(a);
    b = parseFloat(b);
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

//Function to query numbers
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

//function to allow for floats in calculator
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', function () {
    if (userNumbers === undefined) {
        userNumbers = '0';
    }
    if (userNumbers.includes('.') === true) {
        decimal.style.backgroundColor = '#fcfcfc';
        let dot = userNumbers.indexOf('.');
        userNumbers = userNumbers.slice(0,dot);
        display.textContent = userNumbers;
    } else {
        decimal.style.backgroundColor = '#858585';
        userNumbers += '.'
        display.textContent = userNumbers;
    }
})

//function to allow negative numbers
const negative = document.querySelector('.negative')
negative.addEventListener('click', function () {
    if (userNumbers === undefined) {
        return;
    }
    if (userNumbers.includes('-') === true) {
        negative.style.backgroundColor = '#fcfcfc';
        userNumbers = userNumbers.slice(1);
        display.textContent = userNumbers;
    } else {
        negative.style.backgroundColor = '#858585';
        let oldNumbers = userNumbers;
        userNumbers = '-' + oldNumbers;
        display.textContent = userNumbers;
    }
})

//Convert numbers to percentage
const percentageButton = document.querySelector('.percent') 
percentageButton.addEventListener('click', function () {
    if (userNumbers === undefined) {
        return;
    }
    userNumbers = parseFloat(userNumbers) / 100;
    display.textContent = userNumbers;
})

//delete items function
const deleteButton = document.querySelector('.backspace');
deleteButton.addEventListener('click', function () {
    if (userNumbers === undefined) {
        return;
    }
    if (userNumbers === '') {
        return;
    }
    userNumbers = userNumbers.slice(0,-1);
    display.textContent = userNumbers;
})

//Clear all items on calculator
const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
    userNumbers = '';
    sign = '';
    result = '';
    decimal.style.backgroundColor = '#fcfcfc';
    negative.style.backgroundColor = '#fcfcfc'
    //const display = document.querySelector('.calculator-screen');
    display.textContent = userNumbers;
})

let storedNum1;
let storedNum2;
let sign;

//function to identify how we're calculating the numbers
const oper = document.querySelectorAll('.oper');
oper.forEach(operator => {
    operator.addEventListener('click', function () {

        storedNum1 = userNumbers;
        userNumbers = '';
        sign = operator.textContent;
        decimal.style.backgroundColor = '#fcfcfc';
        negative.style.backgroundColor = '#fcfcfc'
    })
})


const equals = document.querySelector('.equals').addEventListener('click', function () {
    let result = '';
    if (sign === undefined) {
        display.textContent = userNumbers;
        userNumbers = '';
    } else if (userNumbers === '') {
        storedNum2 = storedNum1;
        userNumbers = operate(storedNum1,storedNum2,sign)
    } else {
        userNumbers = operate(storedNum1, userNumbers, sign);       
    }

    if (userNumbers === undefined) {
        display.textContent = userNumbers;
    }

    if (String(userNumbers).length > 8) {
        display.textContent = userNumbers.toExponential(2);
    } else {
        display.textContent = userNumbers;
    }

    userNumbers = '';
});