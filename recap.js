// variable
var time = '10:15pm';

var bookPrice = 150;

var isWhiteColor = false;

// array
var partners = ['shova', 'kuls', 'antorik', 'omi'];
var elementCount = partners.length;
var antorikIndex = partners.indexOf('antorik');
partners.push('nico');
partners.pop();


// conditionals
if (bookPrice < 120) {
    console.log('i will buy this book');
}
else {
    console.log('mama, discount den please');
}

// loop
var i = 0;
while (i <= 17) {
    // do some work
    i++;
}
for (var i = 0; i <= 17; i++) {

}

// function
function isMoonUp() {
    if (time >= 19 & time <= 5) {
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);

// let const variable

// value of variable could change
let price = 24;
price = 32;
price = 34;

//value of the variable will not change
const myname = 'sushmita Ghosh';
console.log(myname);
myname = 22;