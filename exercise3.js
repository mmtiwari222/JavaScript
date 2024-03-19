// Question 1
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Question 2
let greeting;
greeting = {};
console.log(greeting);

// Question 3
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

// Question 4
const sum = eval("10*10+5");
console.log(sum);

// Question 5
var num = 8;
var num = 10;
console.log(num);

// Question 6
console.log(typeof typeof 1);

// Question 7
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

// Question 8
console.log(3 + 4 + "5");

// Question 8
console.log("I am Madanmohan Tiwari"[0]);

// Question 10
// const name = "Shiya Shukla";
// console.log(name());

// Question 11
const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;
console.log(one, two, three);

// Question 12
var x = 2;
var y = "2";
console.log(x === y);

// Question 113
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Question 14
console.log(5 / 0);

// Question 15
const studentName = "Madanmohan";
console.log(!typeof studentName === "object");
console.log(!typeof studentName === "string");

// Question 16
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// Question 17
var x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

// Question 18
var x = 0;
do {
  console.log(x);
  x++;
} while (x < 5);

// Question 19
for (var i = 2; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Question 20
var arr = [1, 2, 3, 4, 5];
for (var i in arr) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

// Question 21
var day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday. ");
    break;
  case "Tuesday":
    console.log("Today is Tuesday. ");
    break;
  default:
    console.log("Today is not Monday or Tuesday. ");
    break;
}

// Question 22
var x = 20;
switch (x) {
  case x < 20:
    console.log("x is less than 20");
    break;
  case x > 20:
    console.log("x is greater than 20");
    break;

  default:
    console.log("x is equal to 20");
    break;
}

// Question 23
var x = "20";
switch (x) {
  case 20:
    console.log("x is equal to 20");
    break;
  default:
    console.log("x is not equal to 20");
    break;
}

// Question 24
var x = 20;
var y = x > 10 ? x < 30 : "x is not greater than 10 and not less than 30";
console.log(y);

// Question 25
// var x = (10>5)? "x is greater than 5"
// console.log(x);

// Question 26
var x = 10;
var y = "10";
var z = x === y ? "equal" : "not equal";
console.log(z);

// Question 27
let val = 5;
while (val < 6) {
  console.log(val);
  break;
}
