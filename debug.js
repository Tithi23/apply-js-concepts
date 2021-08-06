function factorial(number) {
    let fact = 1;
    console.log(number);
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
        console.log(i, fact);
    }
    return fact;
}

var firstFact = factorial(7);
console.log('fact of 7 is', firstFact);
