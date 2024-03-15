//    Data Types in JavaScript

/* JavaScript is Dynamically typed(also loosly typed) scripting language
  means we don't specify type of the variable it is dynamically used by JS Engine
*/

/* In JS Data types are Basically divide into two categories
   a. Primitive Data type - Stack Memory - if we change in a variable 
   in primitive data type only we can change in copy not in original
   call by value

    String: let studentName = "Madanmohan Tiwari"

    Number: const scoreValue = 100

    BigInt: const bigNumber = 3453646473364383747637n

    Boolean: const isLoggedIn = false

    Null: const outsideTemp = null

    Undefined: let userEmail;

    Symbol: const id = Symbel('123')

   b. Non-Primitive(Reference) Data type - Heap Memory - if we change in a variable 
   also the reference of the variable is change
   call by reference
   all are basically object data type

    Array: const heros = ["Virat", "Sachin", "Rohit"]

    Objects" let myObj = {
        name: "Madanmohan",
        age: 22
    }

    Functions: const myFunction = function(){
        console.log("Hello World");
    }
*/

const studentAge = 20;
const studentName = "Madanmohan Tiwari";
const useLoggedIn = true;
const cityTemp = null;
let studentEmail;
const id = Symbol("1");
const studentPhoneNumber = 9988776655n;

let friends = ["Vivek", "Dilip", "Shubham", "Priyanshu"];
let studentData = {
  name: "Shiya Shukla",
  email: "shiya@gmail.com",
};
let myFunction = function () {
  console.log("Hello Programmers");
};

console.log(studentAge, typeof studentAge);
console.log(studentName, typeof studentName);
console.log(useLoggedIn, typeof useLoggedIn);
console.log(cityTemp, typeof cityTemp);
console.log(studentEmail, typeof studentEmail);
console.log(id, typeof id);
console.log(studentPhoneNumber, typeof studentPhoneNumber);
console.log(friends, typeof friends);
console.log(studentData, typeof studentData);
myFunction();
console.log(typeof myFunction);
