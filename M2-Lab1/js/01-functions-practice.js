//STEP 1
function halfNumber(num) {
    let result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}
//STEP 2
function squareNumber(num) {
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}
//STEP 3
function percentOf(part, whole) {
    let result = (part / whole) * 100;
    console.log(`${part} is ${result}% of ${whole}.`);
    return result;
}
//STEP 4
function findModulus(num1, num2) {
    let result = num2 % num1;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}
