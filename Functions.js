function myName() {
  console.log("H");
  console.log("A");
  console.log("I");
  console.log("D");
  console.log("E");
  console.log("R");
}

myName()

// function addtwoNum(num1, num2){
//     console.log(num1 + num2);
// }

// the "result" used inside the function and outside the function is different
function addtwoNum(num3, num4){
    // let result = num3 + num4
    // return result
    return num3+num4
}
addtwoNum(2,2)
addtwoNum(2,"2")
addtwoNum(2,null)

const result = addtwoNum(2,2)
// console.log("Result:", result);

function loginUser(username = "imam"){
    // if(username === undefined){
    if(!username){
        console.log("pls enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUser())
// passing string "Haider" in log
// console.log(loginUser("Haider"))
// console.log(loginUser(""))

function calculateprice(val1, val2, ...num5){
    return num5
}

// console.log(calculateprice(2));
// 200 goes in val1, 400 goes in val2
console.log(calculateprice(200,400,600));

const user = {
    username: "haider",
    // prices is undefined
    price: 400
}

function handleObj(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObj(user)
handleObj({
    username:"imam",
    price:300
})

const mynewArr = [200, 400, 600, 800]

function return2ndval(getArray){
    return getArray[3]
}

// console.log(return2ndval(mynewArr));
console.log(return2ndval([200, 400, 600, 800]));
// console.log(return2ndval[200, 400, 600, 800]); gives undefined
