// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// for loop
function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

var firstFact = factorial(7);
console.log('fact of 7 is', firstFact);

var secondFact = factorial(9);
console.log('fact of 9 is', secondFact);