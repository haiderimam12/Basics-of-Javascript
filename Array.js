const myArr = [0,1,2,3,4]
console.log(myArr[0]);

// push is used to add the value in last
myArr.push(5)

// pop is used to remove the last value 
myArr.pop(6)

// unshift is used to add the value in first
myArr.unshift(9)

// shift is used to remove the first value 
myArr.shift( )

console.log(myArr);
// include is used to check the valus is include in the array or not
console.log(myArr.includes(4));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(12));

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

// Slice, Splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

const marvel = ["thor", "hulk", "captain", "ironman"]
const dc = ["superman", "flash", "batman", "aquaman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[4][3]);
// console.log(marvel[3]);

const all = marvel.concat(dc)
console.log(all);

const allheroes = [...marvel, ...dc]
console.log(allheroes);

const anotherhero = [1,2,3,[4,5],6,7,8,9,[11,22,33,44,[55,66,77]]]
const real_anotherhero = anotherhero.flat(Infinity)
console.log(real_anotherhero);

// from convert and objects and strings into array
console.log(Array.from("Haider"));

// it generates empty array  and important for interview questions
console.log(Array.from({name: "Haider"}))

console.log(Array.isArray("Haider"));

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3));