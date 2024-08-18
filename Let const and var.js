const accountID = 144553
let accoutEmail = "haider123@gmail.com"
var accountPassword = "12345"
accountCity = "Ghazipur"
let accountState

// accountID = 2 not allowed

accoutEmail = "abc123@gmail.com"
accountPassword = "123456789"
accountCity = "Goa"

console.log(accountID)

/*
Prefer not to use var because of issues in block scope and functional scope
*/

console.table([accountID, accountPassword, accoutEmail, accountCity, accountState])