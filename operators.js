// Operators in JS
// 1. Arithmetic operators
let a = 25;
let b = 4;
console.log("a + b = ", a + b); // Addition // 29
console.log("Madanmohan" + " Tiwari"); // Concatenation Operator
console.log("a - b = ", a - b); // Subtraction // 19
console.log("a * b = ", a * b); // Multipication // 120
console.log("a / b = ", a / b); // Division // 4.8
console.log("a % b = ", a % b); // Modules // 4
console.log("a ** b = ", a ** b); // Exponential // 7962624

// Increment Operator
console.log("a++ = ", a++); // Postfix Increment Operator // 24
// a++ => first print the value then increment in the value
console.log("++a = ", ++a); // Prefix Increment Operator // 26
// ++ => first increment in the value then print the value

// Decrement Operator
console.log("a-- = ", a--); // Postfix decrement operator // 26
// a-- => first print the value then decrement in the value
console.log("--a = ", --a); // Prefix decrement operator // 24
// --a => first decrement in the value then print the value

// Assignment Operetors
let score1 = 10; // assign 10 to the score
console.log(score1);
score1 += 5; // same as score + 5
console.log(score1);
score1 -= 5; // same as score - 5
console.log(score1);
score1 *= 5; // same as score * 5
console.log(score1);
score1 /= 5; // same as score / 5
console.log(score1);
score1 %= 4; // same as score % 5
console.log(score1);
score1 **= 2; // same as score ** 5
console.log(score1);

// Comparison Operetor
let marks1 = 20;
let marks2 = 25;
console.log(marks1 == marks2); // Equality
console.log(6 == "6"); // == => only check equality of value
console.log(marks1 != marks2); // Inequality
console.log(marks1 === marks2); // Strict Equality
console.log(6 === "6"); // === => check eqality of value and data type both
console.log(marks1 !== marks2); //Strict Inequality
console.log(marks1 > marks2); // Greater than
console.log(marks1 < marks2); // less than
console.log(marks1 <= marks2); // less than or equal to
console.log(marks1 >= marks2); // greater than or equal to

// Logical Operator
let x = 7;
let y = 10;
console.log(x < y && x == 7); // && => Logical and operator
// if both operands are return true then && operator return true either it return false

console.log(x > y || x == 7); // || => Logical or operetor
// if any operands are return true then || operetor return true either it return false

let value = true;
console.log(!value);
console.log(!(x < y && x == 7));
console.log(!!value); // logical not operetor => !
// if any value return true then ! operator return false

// Bitwise Operator
// Bitwise operetor works on the binary value of the operands
let bit1 = 5;
let bit2 = 1;
console.log(bit1 & bit2); // bitwise and operator
//Sets each bit to 1 if both bits are 1

console.log(bit1 | bit2); // bitwise or operetor
// Sets each bit to 1 if one of two bits is 1

console.log(~bit1); // bitwise not operator
// Inverts all the bits

console.log(bit1 ^ bit2); // bitwise xor operetor
// Sets each bit to 1 if only one of two bits is 1

console.log(bit1 << bit2); // bitwise left shift operetor
// Shifts left by pushing zeros in from the right and let the leftmost bits fall off

console.log(bit1 >> bit2); // bitwise right shift operator
// Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

console.log(bit1 >>> bit2); // zero fill right shift operator
//Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
