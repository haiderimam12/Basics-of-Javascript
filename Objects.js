// singleton

// object literals

// Object.create

const mySym = Symbol("key1")

const jsUser = {
    name: "haider",
    // mySym: "mykey1",
    [mySym]: "mykey1",
    age:21,
    location: "ghazipur",
    isloggedIn: false,
    isloggedinDays: ["Monday", "Saturday"]
}

// console.log(typeof jsUser.mySym);
console.log(jsUser.mySym);
console.log(jsUser.age);
// console.log(jsUser["age"]);

jsUser.location = "banaras"
// Object.freeze(jsUser)
jsUser.location = "ghazipur"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello jsUser");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greeting1 = function(){
    console.log(`Hello jsUser, ${this.name}`);
}
console.log(jsUser.greeting1);
console.log(jsUser.greeting1());

// const facebook = new Object()
const facebook = {}

facebook.id = "123abc"
facebook.name = "sam"
facebook.isloggedIn = false

// console.log(facebook);

// acess objects inside the objects
const regularUser = {
    email: "sum123@gamil.com",
    fullname: {
        userfullname: {
            firstname:"haider",
            lastname:"imam"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// same output with different methods
// const obj3 = {obj1, obj2, obj4}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "sum1234@gmail.com",
    },
    {
        id: 1,
        email: "sum1234@gmail.com",
    },
    {
        id: 1,
        email: "sum1234@gmail.com",
    },
]

users[1].email
console.log(facebook);

console.log(Object.keys(facebook));
console.log(Object.values(facebook));
console.log(Object.entries(facebook));

//hasOwnProperty is used check the property is in used or not
console.log(facebook.hasOwnProperty('isloggedIn'));

// Object de-structure and JSAON API intro

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "haider",
}

// course.courseInstructor

const{courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "haider",
//     "subject": "hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]