// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
  // console.log(`each char is ${greet}`);
}

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const map = new Map();
map.set("in", "India");
map.set("uk", "United kingdom");
map.set("vns", "Varanasi");
map.set("vns", "Varanasi");

// console.log(map);

// forof loop is used for key in array not in object
for (const [key, value] of map) {
  // console.log(key, '=', value);
}

const myObj = {
  game1: "nfs",
  game2: "spiderman",
};

// forin loop is used for object in array
for (const key in myObj) {
  //    console.log(myObj [key]);
  //   console.log(` ${key} is for ${myObj[key]}`);
}

const prog = ["js", "py", "html", "css"];
for (const key in prog) {
  // console.log(prog);
  // console.log(key);
  // console.log(prog[key]);
}

//  forEach loop
prog.forEach(function (val) {
  // console.log(val);
});

prog.forEach(function (val, index, arr) {
  // console.log(val, index, arr);
});

// arrow function
prog.forEach((val) => {
  // console.log(val);
});

prog.forEach((val, index, arr) => {
  // console.log(val, index, arr);
});

const lang = [
  {
    langName: "Java",
    langExt: "java",
  },
  {
    langName: "Javascript",
    langExt: "js",
  },
  {
    langName: "Python",
    langExt: "py",
  },
];

lang.forEach((item) => {
  // console.log(item.langName);
  // console.log(item.langExt);
  return item;
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// by filter
// filter() to select elements based on a condition.
const myNums1 = myNums.filter((num) => num > 4);

// by forEach loop
const newnums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newnums.push(num);
  }
});

// console.log(myNums1);
// console.log(newnums);

const myNums2 = [1, 2, 3, 4, 5];
const newnums1 = myNums2.map((num) => num + 10);
// const newnums1 = myNums2.map( (num) => {return num + 10})
// console.log(newnums1);

const newnums2 = myNums2
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
// console.log(newnums2);

const myNums3 = [1, 2, 3];

// by reduce method
// const myTotal = myNums3.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);

//     return acc + curval
// }, 0)

// by arrow function to use reduce method
const myTotal = myNums3.reduce((arr, curval) => arr + curval, 0);
// console.log(myTotal);

const shopCart = [
  {
    itemName: "js course",
    price: 3000,
  },

  {
    itemName: "py course",
    price: 3200,
  },

  {
    itemName: "java course",
    price: 3100,
  },
]

const priceTopay = shopCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceTopay);
