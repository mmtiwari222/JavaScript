{
    let a = 4;
    let b = 5;
    var c = 7;
    var d = 8;
  }
  {
    console.log(c); // 7
  }
  console.log(d); // 8
  {
    console.log(b); // ReferenceError: b is not defined
    console.log(a); // ReferenceError: a is not defined
  }
  {
    console.log(d); // 8
    console.log(a); // ReferenceError: a is not defined
  }
  console.log(a); // ReferenceError: a is not defined
  console.log(b); // ReferenceError: b is not defined
  console.log(d); // 8
  