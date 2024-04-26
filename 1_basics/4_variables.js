const accountID = 2345678
let accountEMAIL = "abhi@google.com"
var accountPassword = "123456"
accountCity = "Bilaspur"

// accountID = 8654859 //This is already assigned under const.
accountEMAIL = "abhijeet@google.com"
accountPassword = "82828282"
accountCity = "Bangalore"
let accountState 
console.log(accountEMAIL);
console.table([accountEMAIL, accountPassword, accountCity, accountState])
/*
Prefer not to use var because of issue in block scope and functional scope.
*/