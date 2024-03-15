// Basic Type Conversions

let studentAge1 = 22;
console.log(typeof studentAge1);
let studentAge2 = String(studentAge1); // type conversion number to string
console.log(typeof studentAge2);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// String to Number type conversion
let score = "200";
console.log(score); // 200
console.log(typeof score); // string

let newScore = Number(score);
console.log(newScore); // 200
console.log(typeof newScore); // number

// NaN => Not a Number
let value = "123abc";
console.log(value); // 123abc
console.log(typeof value); // string

let newValue = Number(value);
console.log(newValue); // NaN=> This value data type is change into number but it's value is not a Number.
console.log(typeof newValue); // number

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Number to boolean, Boolean to Number
let isLoggedIn = 1; // 1 or any Non-Zero value => true
let isError = 0; // 0 => false
console.log(isLoggedIn + " " + isError); // 1 0
console.log(typeof isLoggedIn + " " + typeof isError); // number number

let BooleanLoggedIn = Boolean(isLoggedIn);
let BooleanError = Boolean(isError);
console.log(BooleanLoggedIn + " " + BooleanError); // true false
console.log(typeof BooleanLoggedIn + " " + typeof BooleanError); // boolean boolean

let isSignIn = true;
let isSignup = false;
console.log(isSignIn + " " + isSignup); // true false
console.log(typeof isSignIn + " " + typeof isSignup); // boolean boolean

let BooleanSignIn = Number(isSignIn);
let BooleanSignup = Number(isSignup);
console.log(BooleanSignIn + " " + BooleanSignup); // 1 0
console.log(typeof BooleanSignIn + " " + typeof BooleanSignup); // number number

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//String to Boolean and Boolean to String
let userName = "Madanmohan";
let pass = "";
console.log(userName); // Madanmohan
console.log(typeof userName + " " + typeof pass); // string string

let userEmail = Boolean(userName);
let password = Boolean(pass);
console.log(userEmail + " " + password); // "string" => true, "" => false
console.log(typeof userEmail + " " + typeof password); // boolean boolean

let userLogin = true;
let userRegister = false;
console.log(userLogin + " " + userRegister); // true false
console.log(typeof userLogin + " " + typeof userRegister); // boolean boolean

let userLoggedIn = String(userLogin);
let userRegistered = String(userRegister);
console.log(userLoggedIn + " " + userRegistered); // true and false => string(true,false)
console.log(typeof userLoggedIn + " " + typeof userRegistered); // string string

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Some exeperiment on data  type conversion
let cityTemp = null;
console.log(cityTemp); // null
console.log(typeof cityTemp); // onject

let countryTemp = Number(cityTemp);
let stateTemp = String(cityTemp);
console.log(countryTemp + " " + stateTemp); // null => Number(0), String(null)
console.log(typeof countryTemp + " " + typeof stateTemp); // number string

let stateName;
console.log(typeof stateName); // undefined
let countryName = String(stateName);
let villageName = Number(stateName);
console.log(countryName + " " + villageName); // undefined => String(undefined), Number(NaN)
console.log(typeof countryName + " " + typeof villageName); // string number
