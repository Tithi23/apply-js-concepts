/*
1!= 1
2!=2 X 1
3!= 3 X 2 X 1
4!= 4 X 3 X 2 X 1
n! = n* (n-1)!
*/

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const myFactorial = factorial(5);
console.log('fact of 6 is', myFactorial);
