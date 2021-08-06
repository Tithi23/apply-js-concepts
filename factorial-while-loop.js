// while loop
// function factorial(number) {
//     let fact = 1;
//     let i = 1;
//     while (i <= number) {
//         fact = fact * i;
//         i++;
//     }
//     return fact;
// }

// const firstFact = factorial(6);
// console.log('fact of 7 is', firstFact);


// ulta korbo
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const myFactorial = getFactorial(6);
console.log('fact of 6 is', myFactorial);
