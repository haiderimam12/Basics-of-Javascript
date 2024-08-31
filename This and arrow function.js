const user = {
    username : "haider",
    price: 999,

    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website`);   
        console.log(this);
    }
}

user.welcomeMsg()
user.username = "sam"
user.welcomeMsg()

console.log(this);

// function chai() {
//     let username = "haider"
//     console.log(this.username);
//     console.log(this);
// } 
// chai()

// arrow function
const chai = () => {
    let username = "haider"
    console.log(this.username);
    console.log(this);
}
chai()

// explicit return
// const add2 = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const add2 = (num1, num2) => num1 + num2
// const add2 = (num1, num2) => (num1 + num2)
const add2 = (num1, num2) => {username: "haider"}

console.log(add2(2,3));