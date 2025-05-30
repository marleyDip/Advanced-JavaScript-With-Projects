// You have given array of strings. Your task is to obtain last two elements of given array using slice method?

let admins = ["john", "paul", "Neh", "harry"];
let admin = admins.slice(2, 4);

console.log(admin); // [ 'Neh', 'harry' ]

/* 
        You have to delete 2 elements starting from index 2. 
        You have to add 3 new elements on index 1 choice.
        Display the 2 deleted elements in console (from step 1) 
*/

// splice() method altered the original array. The splice() method returns an array with the deleted items...

const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(2, 2, 8, 9, 10); // without store value in variable it can't show deleted items

console.log(arr); // [ 1, 2, 8, 9, 10, 5 ]
console.log(removed); // [ 3, 4 ]

// What happens if we use negative number inside slice method?
const arr1 = [1, 4, 7, 6, 8];

console.log(arr1.slice(-2)); // [ 6, 8 ]
console.log(arr1.slice(-2, -1)); // [ 6 ]

// Write three different methods/approaches to get last element of the array?

/* 
   any languages allow negative bracket indexing like [-1] to access elements from the end of an object / array / string.
        
        This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.
        
        The at() method was introduced in ES2022 to solve this problem.
*/

const arr2 = [1, 4, 7, 6, 8];

const last1 = arr2[arr2.length - 1]; // arr2.length = 5 = 1 => arr2[4] => 8
console.log("The Last element of the Array", last1);

const last2 = arr2.slice(-1)[0]; // without 0 its undefined
// we access [0] to get the value. Safe and non-mutating.
console.log("The last element of the array", last2);

const last3 = arr2.at(-1);
console.log("The last element of the array", last3);

arr2.length = 3;
console.log(arr2); // [ 1, 4, 7 ]

// You have given an array of nums. Create new Array with the help of nums array. In new Array each element will be a result of multiplication by 2 of the original array element

const num = [1, 4, 7, 6, 8];
let updateNum = num.map((arr) => arr * 2);

console.log(num); // [ 1, 4, 7, 6, 8 ]
console.log("The Multiplication of num are -", updateNum); // [ 2, 8, 14, 12, 16 ]

// using for...of
let updateNum1 = [];

for (let nums of num) {
  updateNum1.push(nums * 2);
}
console.log("The update number are -", updateNum1);

// using for
let updateNum2 = [];

for (let i = 0; i < num.length; i++) {
  updateNum2.push(num[i] * 2);
}
console.log("The number are -", updateNum2);

// using forEach
let updateNum3 = [];

let result2 = num.forEach((element) => updateNum3.push(element * 2));
console.log("The Number of Multiplication are -", updateNum3);

// You have given an array of scores in which score of each student stored. Create a new array with the help of original scores array in which only those scores exist greater than 75%

const arr4 = [10, 40, 70, 60, 80];

let score = arr4.filter((num) => num > 75);
console.log(score);

console.log(arr4.map((num) => num > 75)); // [ false, false, false, false, true ]

let scores = [55, 76, 35, 77, 88, 97, 120, 136, 140];

let totalScore = 150;

const highScores1 = scores.filter((num) => num > (75 * totalScore) / 100);
console.log("Total list of 150 of 75% are -", highScores1);

const threshold = Math.round(0.75 * totalScore);
// console.log(threshold);

const highScores = scores.filter((num) => num > threshold);
console.log("75% upper marks are -", highScores);

// using for
let highScores2 = [];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > threshold) {
    highScores2.push(scores[i]);
  }
}
console.log("Find score with for", highScores2);

// using for...of
let highScores3 = [];

for (let score of scores) {
  if (score > 0.75 * totalScore) {
    highScores3.push(score);
  }
}
console.log("Find score with for...of -", highScores3);

// reusable function
function filterHigScores(scores, totalScore, percentage) {
  const percentageValue = (percentage / 100) * totalScore;
  const highScores = [];

  for (let score of scores) {
    if (score > percentageValue) {
      highScores.push(score);
    }
  }
  return highScores;
}

let scores1 = [55, 76, 35, 77, 88, 97, 120, 136, 140];
let totalScore1 = 150;
let result = filterHigScores(scores1, totalScore1, 80);
console.log("80% of 150 marks are -", result);

// You have given an array of numbers nums. You have to find sum of all array elements using reduce method?

let nums = [2, 3, 5, 7, 8, 4, 9];

let updateNums = nums.reduce((total, num) => total + num, 0);
console.log("The Total With reduce() method -", updateNums); // 38

// using for
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("The Total with for loop -", sum);

// using for...of
let sum1 = 0;
for (let num of nums) {
  // TypeError: Assignment to constant variable.
  sum1 += num;
}
console.log("The Total with for...of -", sum1);

// using  forEach()
let sum2 = 0;
nums.forEach((num) => {
  sum2 += num;
});
console.log("The Total with forEach () method -", sum2);

// You have given an array of numbers nums. You have to find the index of value 8 using built-in method of array?

// array.lastIndexOf(item, start)

let num2 = [2, 3, 5, 6, 8, 6, 4, 8];

let index = num2.indexOf(8);
console.log("Index of 8 is -", index);

let index1 = num2.indexOf(8) + 1;
console.log("Original Index of 8 is -", index1);

let lastIndex = num2.lastIndexOf(8);
console.log("Last Index of 8 is -", lastIndex);

let findIndex = num2.findIndex((x) => x > 6);
console.log("First Number of over 6 is -", findIndex);

let findLastIndex = num2.findLastIndex((x) => x > 6);
console.log("Find Last Number of over 6 is -", findLastIndex);

// Find all indexes of 8

/* 
      => return inside a .forEach() only exits the current callback.
      
      => forEach() does not return a value to the outer scope or store anything.
      
      => .forEach() is used for side effects like pushing to another array — not to collect return values.
      
      => Use return in .map(), .filter(), .reduce(), or custom functions: 
*/

let allIndex = [];

num2.forEach((num, i) => {
  if (num === 8) allIndex.push(i);
});
console.log("All Indexes of 8 -", allIndex);

// You have given an array of objects of users as below. Find the specified user with name = "John"...Also find the position (index+1) of that user inside the array?

let users = [
  { name: "Paul", age: 24, verified: true },
  { name: "John", age: 21, verified: false },
  { name: "Neha", age: 19, verify: true },
  { name: "John", age: 21, verified: true },
];

let user = users.find((user) => user.name === "John");
console.log("user found by find", user); // only the user object

let findName = users.find((name) => name.name.toLowerCase() === "john");
console.log("user found by find with lower case", findName);

// using findIndex
let findUser = users.findIndex((user) => user.name === "John");

if (index !== -1) {
  console.log("User Found by findIndex -", users[findUser]);
  console.log("Original User Index", findUser);
  console.log("Position (index + 1)", findUser + 1);
} else {
  console.log("User Not Found...");
}

// spread operator [ ...user ] is used to create a copy of the original user object and add a new property (position), without changing the original object.

let matchingUser = users
  .map((user, i) => ({ ...user, position: i + 1 }))
  .filter((user) => user.name.toLowerCase() === "john");

console.log("Matching User by map & filter -", matchingUser);

/* reusable function
      Return only the first match.
      Return a message if not found.
      Include a count of how many were found. 
*/

function findUserByName(users, targetName) {
  let lowerName = targetName.toLowerCase();

  // return users
  //   .map((user, i) => ({ ...user, Position: i + 1 }))
  //   .filter((user) => user.name.toLowerCase() === lowerName);

  let matches = users
    .map((user, index) => ({ ...user, Position: index + 1 }))
    .filter((user) => user.name.toLowerCase() === lowerName);

  if (matches.length === 0) {
    return {
      message: `No User Found With This Name ${targetName}`,
      count: 0,
    };
  }

  return {
    message: `User ${targetName} Found`,
    user: matches[0],
    count: matches.length,
  };
}

let users1 = [
  { name: "Paul", age: 24, verified: true },
  { name: "John", age: 21, verified: false },
  { name: "Paul", age: 19, verified: true },
  { name: "john", age: 30, verified: true },
  { name: "Neha", age: 30, verified: true },
];

let results = findUserByName(users1, "deep");
let results1 = findUserByName(users1, "paul");
let results2 = findUserByName(users1, "neha");
let results3 = findUserByName(users1, "john");

console.log(`Matching User "deep" By Function - ${JSON.stringify(results)}`);
console.log(
  "Matching User paul By Function",
  JSON.stringify(results1, null, 2)
);

/*  results1 
    => This is the JavaScript object you want to convert into a JSON-formatted string. 

    null 
    => This is used to filter or transform keys. If set to null, it includes all properties (no filtering).
    You could use a function here to select or rename fields, but if you don't want to filter anything, just pass null.

    2 
    => This is the number of spaces to indent nested levels in the output.
        0 or omitted → compact, single-line output.
        2 → nice indentation with 2 spaces (human-readable).
    => You can also pass a string instead of a number, like '\t' for tabs.
*/

console.log(`Matching User "neha" By Function - ${JSON.stringify(results2)}`);
console.log("Matching User john By Function -", results3);

// Reusable Function: findUsersByPartialName()

function findUserByPartialName(users, partialName) {
  let matches = users
    .map((user, i) => ({ ...user, position: i + 1 }))
    .filter((user) =>
      user.name.toLowerCase().includes(partialName.toLowerCase())
    );

  if (matches.length === 0)
    return {
      message: `No user found with name containing "${partialName}".`,
      count: 0,
    };

  return {
    message: `Found ${matches.length} user's with name containing "${partialName}".`,
    firstMatch: matches[0],
    allMatches: matches,
    count: matches.length,
  };
}

let users2 = [
  { name: "JPaul", age: 24, verified: true },
  { name: "John", age: 21, verified: false },
  { name: "Neha", age: 19, verified: true },
  { name: "johnny", age: 30, verified: true },
  { name: "Jo", age: 28, verified: false },
];

let result1 = findUserByPartialName(users2, "jo");
console.log("Here Detailed Output - \n", result1);

let result3 = findUserByPartialName(users2, "j");
console.log("Here Detailed Output - \t", result3);

let result4 = findUserByPartialName(users2, "d");
console.log("Here Detailed Output - \n", result4);

let result5 = findUserByPartialName(users2, "a");
console.log("Here Detailed Output - \n", result5);

// Guess the Output and explain Why?

/* 
  Array Methods -
    => The flat() method creates a new array with sub-array elements concatenated to a specified depth.

    => Flattening an array is the process of reducing the dimensionality of an array.
    
    =>Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
 */

let num5 = [1, 2, 4, 5, [6, [8]], [9, 0]];

let res1 = num5.flat(); // [ 1, 2, 4, 5, 6, [ 8 ], 9, 0 ]
let res2 = num5.flat(1); // [ 1, 2, 4, 5, 6, [ 8 ], 9, 0 ]
let res3 = num5.flat(2); // [ 1, 2, 4, 5, 6, 8, 9, 0]
// (1) (2) is depth level
console.log(res1, res2, res3);

let res4 = num5.flatMap((elem) => elem); // [ 1, 2, 4, 5, 6, [ 8 ], 9, 0 ]

let res5 = num5.flatMap((elem) => elem * 2); // [ 2, 4, 8, 10, NaN, NaN ]

// let res5 = num5.flatMap((elem) => elem.map((x) => x * 2)); // TypeError: elem.map is not a function
console.log(res4, res5);

let num6 = [
  [1, 2, 4, 5],
  [6, [8]],
  [9, 0],
];

// here all are array thats why map() then flat() all the num
let res6 = num6.flatMap((num) => num.map((x) => x * 2)); // [ 2,  4,  8, 10, 12, 16, 18,  0 ]
console.log(res6);

/* Array Method - 
    The concat() method creates a new array by merging (concatenating) existing arrays 
*/

let num7 = [1, 2, 4, 5, [6, [8]], [9, 0]];

// 1st flat() the array item; then map()
let res7 = num7.flat().map((num) => num * 3);
console.log("the Number are -", res7); // [ 3,  6, 12, 15, 18, 24, 27,  0 ]

let res8 = num7
  .flat()
  .map((num) => num * 3)
  .filter((num) => num % 2 === 0); // [ 6, 12, 18, 24, 0 ]
//.filter((num) => num > 15); // [ 18, 24, 27 ]
console.log("the Number are -", res8);

let 