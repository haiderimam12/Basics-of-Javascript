// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best no.");
  }
  console.log(element);
}

console.log(element);

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value: ${i} `);

  for (let j = 0; j < 10; j++) {
    console.log(`Inner loop value ${j} and inner loop value ${i}`);
    console.log(i + '*' + j + '=' + i*j);
  }
}

let myArray1 = ["flash", "batman"]
console.log(myArray1.length);

for (let index = 0; index < myArray1.length; index++) {
    const element = myArray1[index];
    console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detect 5`);
        break
    }
    console.log(`value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detect 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}

let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

let  myArray = ["ironman", "batman"]
let arr = 0;
while(arr < myArray.length) {
    console.log(`value ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 1;

// in do loop firstly execute the program then check the condition
do {
  console.log(`score is ${score}`);
  score ++
}
while(score <=10);