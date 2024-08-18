"use strict"; // treat all JS Code as newer version

// alert("hello")
// we are using nodejs, not browser

// console.log(3+3) console.log("Haider") giving error w/o ";" or "semi-colon" in one line
// console.log(3 + 3); console.log("Haider") code readabiity should be high

console.log(3 + 3); 
console.log("Haider");


let name = "imam"
let age = 22
let loggedIn = false
let temp = null

// PRIMITIVE DATATYPES 

// number => 2 to power 53
// bigint => 
// string => ""
// boolean =>  true/false
// null => standalone value
// undefined => 
// symbol => unique

// OBJECTS

console.log(typeof null); // object
console.log(typeof undefined); // undefined

// "33" => 35
let score = 35
console.log(typeof {score});

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// null => object
let score1 = null
console.log(typeof {score1});

let valueInNumber1= Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

// undefined => NaN
let score2 = undefined
console.log(typeof {score2});

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// 1 => true
// 0 => false
let isLoggedIn = 1

// "" => false
// let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 40 => 40
let someNumber =40;

let string = String(someNumber)
console.log(someNumber)
console.log(typeof someNumber)

// OPERATIONS :-

let cost = 5
let negCost = -cost
console.log(negCost);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Haider"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log(1+2+2)
console.log("1"+2+2)
console.log(1+"2"+2)
console.log(1+2+"2")
console.log(true)
console.log(+true)
console.log(+"")

let num = 100
// num++ => 101
num++;
// ++num => 102
// ++num;
console.log(num);

console.log(2>1);
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1); 
// in most cases we have to avoid these conversions 
console.log(null>1);
console.log(null>=1);
console.log(null<=1);
console.log(null==1);
console.log(undefined>1);
console.log(undefined>=1);
console.log(undefined<=1);
console.log(undefined==1); 

// PRIMITIVE DATATYPES
/*
string, boolean, number, null, undefined, symbol, bigint
*/

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

// use 'n' for bigint at last
const bigNumber = 123456789n

// NON-PRIMITIVE DATATYPES / REFERENCE DATATYPES
/*
array, objects, functions
*/ 

const heroes = ["captain", "hulk", "thor", "ironman"];

let myObj = {
    name: "haider",
    age: "22"
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof id);
console.log(typeof anotherID);
console.log(typeof heroes);
console.log(typeof myFunction);