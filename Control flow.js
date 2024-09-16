// the code will execute inside the parenthesis
// if (true) {
// }

// the code will not execute inside the parenthesis
// if (false) {
// }

// >, <, <=, >= ,== ,!= ,===

// const isUserlogIn = true;
// if (isUserlogIn) {
//   console.log(isUserlogIn);
// }

// if (2 == "2") {
//   console.log("executed");
// }

// if (2 === "2") {
//     console.log("executed");
// }

// if (2 != 3) {
//   console.log("executed");
// }

// const temp = 55;
// if (temp < 50) {
//   console.log("less than 50");
// } else {
//   console.log("greater than 50");
// }
// console.log("executed");

// console.log(`User power: ${power}`);

const bal = 1000;
// bad practice for coding, don,t use in companies work
// if (bal) console.log("test"), console.log("test2")

if (bal < 800) {
  console.log("less than 750");
} else if (bal < 700) {
  console.log("less than 650");
} else if (bal < 600) {
  console.log("less than 550");
} else {
  console.log("less than 200");
}

const userAttendin = true;
const userAttendout = true;
const userFeeNopaid = false;
const userFeePaid = true;

// Logical Operator
// && is called AND operator which means all conditions gives output True
if (userAttendin && userAttendout) {
  // if (userAttedin && userAttedout && 2==2) {
  console.log("Allow to attend");
}

// || is called OR operator which means if one condition is true then word done
if (userFeeNopaid || userFeePaid) {
  console.log("Allow to submit fee");
}

// Switch Case Statement
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 3
const month = "april";
switch (month) {
  // case 1:
  case "jan":
    console.log("Jan");
    break;
  // case 2:
  case "feb":
    console.log("Feb");
    break;
  // case 3:
  case "march":
    console.log("March");
    break;
  // case 4:
  case "april":
    console.log("April");
    break;
  default:
    console.log("default case");
    break;
}

// const userEmail = "abc.ai"
// empty string gives falsy value
// const userEmail = ""
// empty array gives truthy value
const userEmail = []
if (userEmail) {
  console.log("got user email");
} else {
  console.log("dont have user email");
}

/* the falsy value are:-
0, -0, BigInt 0n, "", null, undefined, Nan(Not a number)  */

/* the truthy value are:-
"0", 'false', " ", [], {}, function(){} */

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator(??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);
