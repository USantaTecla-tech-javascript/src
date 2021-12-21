function double(value) {
    return value * 2;
}
console.log(double(333))

function factorial(value) {
    if (value == 0) {
        return 1;
    }
    return value * factorial(value - 1);
}
console.log(factorial(6))
