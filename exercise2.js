var a = 6;
let b = 7;
function printValue() {
  let c = 8;
  var d = 9;
  console.log(c); // 8
  console.log(d); // 9
  console.log(a); // 6
  console.log(b); // 7
}
printValue();
console.log(c); // ReferenceError: c is not defined
console.log(d); // ReferenceError: b is not defined
console.log(a); // 6
console.log(b); // 7
