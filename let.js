let StudentName = "Madanmohan Tiwari";
console.log(StudentName); // Madanmohan Tiwari

{
  {
    // let StudentName = "Manmohan Tiwari"      // Cannot redeclare because let have block scope
    let StudentName = "Shiya Shukla";
    console.log(StudentName); // Shiya shukla
  }

  console.log(StudentName); // Madanmohan Tiwari

  {
    /*console.log(StudentName); 
    ReferenceError: Cannot access 'StudentName' before initialization because
    in same scope first we declare the varibale then we can use it  */

    let StudentName = "Vivek Gupta";
    console.log(StudentName); // Vivek Gupta
  }

  console.log(StudentName); // Madanmohan Tiwari
  //let have block scope
}
