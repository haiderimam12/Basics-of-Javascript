// Dates & Time

let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());

let mycrtDate = new Date(2023, 1, 25)
console.log(mycrtDate.toDateString());
let mycrtDate1 = new Date(2024, 7, 9)
console.log(mycrtDate1.toDateString());
let mycrtDate2 = new Date(2024, 7, 9, 2, 3)
console.log(mycrtDate2.toLocaleString());
let mycrtDate3 = new Date("2024-3-9")
console.log(mycrtDate3.toLocaleString());

let myTime = Date.now()
console.log(myTime);
console.log(mycrtDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());