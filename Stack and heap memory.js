// stack (primitive)
// heap (non-primitive)

// STACK MEMORY

let myEmail = "abc123@gmail.com"
let myname = myEmail
myname = "imam"

console.log(myEmail);
console.log(myname);

// HEAP MEMORY

let userOne = {
    email: "abcd1234@gamil.com"
}

let userTwo = userOne

userTwo.email = "abcde12345@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);