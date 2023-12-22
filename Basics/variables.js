const accountId = 122334
let accountEmail = "madanmohan@gmail.com"
var accountPassword = "12345"
accountCity = "Siwan"

// accountId = 2 // not allowed

accountEmail = "madan@gmail.com"
accountPassword = "98765"
accountCity = "Chandigarh"
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
