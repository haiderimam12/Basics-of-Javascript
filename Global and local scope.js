// "{}" or paranthesis called is scope

// the func which is written inside the if-statement is called block scope //
// the func which is written outside the if-statement is called global scope //
let a = 10;
if (true) {
  let a = 30;
  const b = 20;
  console.log("INNER:", a);
  // var c = 30;
}

console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "haider"

  function two() {
    const web = "youtube";
    console.log(username);
  }
  // console.log(web);

  two()
}
one()

if (true) {
  const username = "haider"
  if (username === "haider") {
    const web = " youtube"
    console.log(username + web);
  }
  // console.log(web);
}
// console.log(username);

console.log(addone(5));

function addone(num){
  return num + 1
}

addTwo(5)

const addTwo = function(num){
  return num+2
}