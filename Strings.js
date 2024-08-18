const name = "haider"
const repo = 5

// console.log(name + repo + "value");

console.log('hello i am ${name} and my repo count is ${repo}');

const gameName = new String('Haider') 

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]); 
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.toUpperCase());

// charAt is used to know the character at a specific position in a string
// indexOf is the opposite of charAt
console.log(gameName.charAt(4));
console.log(gameName.charAt(1));
console.log(gameName.charAt(0));
console.log(gameName.charAt(5));
console.log(gameName.charAt(3));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(9,-4)
console.log(anotherString);

// trim only works on white spaces
const newstringOne  = "     haider     "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "http://www.google.com"
console.log(url.replace('.google','youtube'));
console.log(url.includes('google'))
console.log(url.includes('123'))
console.log(gameName.split('123'))