// Which type of variables (var, let or const) must be initialized at the time of declaration?

// Only const must be initialized at the time of declaration.

// const a; // SyntaxError: Missing initializer in const declaration
// const b = 10;  // ok

//const means the variable cannot be reassigned, and must be given a value right away.

// let — Optional initialization

let y = null;
console.log(y, typeof(y)) // null object
 
let x;
console.log(x, typeof(x)) // undefined undefined

x = 5;
console.log(x, typeof(x)) // 5

//const means the variable can be reassigned, but not redeclared.....block-scope

let languages = 'java javaScript python cSharp';
let result = languages.lastIndexOf('S');

console.log(result); // 24


let variable = 'hello programmers';
let result3 = Number(variable);

console.log(result3); // NaN

let variable1 = '20';
let result4 = Number(variable1);

console.log(result4); // 20

let num1 = 32;
let num2 = '32';

let result1 = num1 !== num2;
let result2 = num1 != num2;

console.log(result1, result2); // true , false ..... == => '32' convert it 32 => 32 == 32  


let str = 'Hello Programmers';
let result5 = str.includes('r');

console.log(result5); // true

let num3 = 2;
let num4 = 5;

let result7 = num3 ** num4 * 2;   // 2^5 = 32 * 2 = 64

console.log(result7); // 64

let num5 = [1, 2, 4, 5];
let num6 = [6, 5, 8, 0];

let result8 = num5.concat(num6);

console.log(result8); // [1, 2, 4, 5, 6, 5, 8, 0]

let a = 5;
let b = 9;
let c = 8;

let result9 = a < b > c;  // JavaScript doesn't chain comparisons like math. 
//So: Is interpreted as: (a < b) > c => true > c => 1 > 8 => false
// In JavaScript, true is converted to 1 when used in a numeric comparison.

console.log(result9); // false

let result10 = a < b && b > c;  

console.log(result10); // true

// If your State is split into four equal parts such that in each part there are 1/4 number of people live. 
// You have to find how many people would live in each part? which operators will you use ?

// You will use the division operator / in JavaScript.

let totalPeople = 1000;
let peopleInEachPart = totalPeople / 4;

console.log(peopleInEachPart); // 250

let totalPeople1 = 1001; // not perfectly divisible by 4
let peopleInEachPart1 = Math.floor(totalPeople1 / 4); // 250.25
let remainder = totalPeople1 % 4; 

console.log("People per part:", peopleInEachPart1); // 250
console.log("Remaining people:", remainder);       // 1

let peopleInEachPart2 = Math.ceil(totalPeople1 / 4); // 250.25

console.log("People per part:", peopleInEachPart2); // 250

console.log(Math.round(.45)) // 0
console.log(Math.round(.55)) // 1

