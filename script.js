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
    if (sign === '+') {
        return add(a,b);
    }
    else if (sign === '-') {
        return subtract(a,b);
    }
    else if (sign === '*') {
        return multiply(a,b);
    }
    else if (sign === '/') {
        return divide(a,b);
    }
    else {
        return 'ERR!'
    }
}