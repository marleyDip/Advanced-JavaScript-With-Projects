// You have given array of strings. Your task is to obtain last two elements of given array using slice method?

const { shuffle, reverse } = require("lodash");

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

let res9 = num5.flatMap((num) =>
  Array.isArray(num) ? num.map((x) => x * 4) : [num * 4]
);

console.log("Using flatMap -", res9); // [ 4,  8, 16, 20, 24, 32, 36,  0 ]

let num6 = [
  [1, 2, 4, 5],
  [6, [8]],
  [9, 0],
];

// here all are array (not number and array) thats why map() then flat() all the num
let res6 = num6.flatMap((num) => num.map((x) => x * 2)); // [ 2,  4,  8, 10, 12, 16, 18,  0 ]
console.log(res6);

let num7 = [1, 2, 4, 5, [6, [8]], [9, 0]];

// 1st flat() the array item; then map()
let res7 = num7.flat().map((num) => num * 3);
console.log("the Number are -", res7); // [ 3,  6, 12, 15, 18, 24, 27,  0 ]

// using flat().map().filter()
let res8 = num7
  .flat()
  .map((num) => num * 3)
  .filter((num) => num % 2 === 0); // [ 6, 12, 18, 24, 0 ]
//.filter((num) => num > 15); // [ 18, 24, 27 ]
console.log("the Number are -", res8);

// using reduce
let res10 = num7.reduce(
  (accumulator, number) =>
    accumulator.concat(
      Array.isArray(number) ? number.map((x) => x * 5) : number * 5
    ),
  []
);

console.log("The Number are -", res10);

/* Array Method - 
    The concat() method creates a new array by merging (concatenating) existing arrays... 
    length, toString(), at(), join(), push(), pop(), unshift(), shift(),  flat(), splice(), slice(). toSpliced()

    Array Iteration Methods -
    reduce(), flatMap(), map(), filter(), forEach(), array spread(...), every(), some(), entries()

    Array Search Methods -
    indexOf() => Returns the first position of an element value,  
    includes() => Returns true if an element value is present in an array, 
    find() => Returns the value of the first element that passes a test, 
    findIndex() => 	Returns the index of the first element that passes a test

    Array Sort Methods -
        Alphabetic Sort => sort(), reverse()
        Numeric Sort => Math.max (), MAth.min(), numeric sort, random sort
*/

// Alphabetic Sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort(); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
fruits.reverse(); // [ 'Orange', 'Mango', 'Banana', 'Apple' ]
// fruits.sort().reverse();
console.log("Alphabetic Reverse Sort -", fruits);

// toSorted(), toReversed()
const months = ["Jan", "Feb", "Mar", "Apr"];

const sorted = months.toSorted();
const reversed = months.toReversed();
console.log("Months Stored", sorted);
console.log("Original Months", months);
console.log("Months Reverse", reversed);

// You have given an array of nums. Write a program to sort the elements of array in descending order using built-in method of array.

// The Compare Function
let array = [5, 1, 4, 6, 8, 3, 9];

// arrow function
array.sort((a, b) => b - a);
console.log("Descending order -", array); // [ 9, 8, 6, 5, 4, 3, 1 ]
console.log("The Highest Number", array[0]); // 9

/* a - b = result or b - a = result:
      => If result < 0 → a comes first
      => If result > 0 → b comes first
      => If result = 0 → order stays the same
*/

//  anonymous function
array.sort(function (a, b) {
  return a - b;
});
console.log("Acceding order -", array); // [ 1, 3, 4, 5, 6, 8, 9 ]
console.log("The Lowest Number", array[0]); // 1

const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log("Sort Alphabetically -", points); // [ 1, 10, 100, 2, 25, 40, 5 ]; sort by 1, 2, 3, 4, 5

// wrong for numbers thats why use numeric sort
points.sort((a, b) => a - b);
console.log("Acceding order -", points);

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort((a, b) => a.year - b.year);
console.log("Object Sort", cars);

cars.sort((a, b) => a.type.localeCompare(b.type));
console.log("Object Sort", cars);

cars.sort((a, b) => (a.type < b.type ? -1 : 1));
console.log("string Order", cars);
/*
    cars.sort(function(a, b){
       let x = a.type.toLowerCase();
       let y = b.type.toLowerCase();
      
       if (x < y) {return -1;}
       if (x > y) {return 1;}
       return 0;
    })
*/

//  random sort / order

const points1 = [40, 100, 1, 5, 2, 25, 10];

points1.sort(() => 0.5 - Math.random());
/* Math.random() = 0.3 → 0.5 - 0.3 = +0.2 (keep order)
Math.random() = 0.7 → 0.5 - 0.7 = -0.2 (swap order)
*/
console.log("Randomly Sorted -", points1);

// The Fisher Yates Method

for (let i = points1.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1)); // .3 * 6 = 1.8 => 1

  let k = points1[i]; // index6 = 10; save the value at index i;
  points1[i] = points1[j]; // index6 => 100 = index 1; assign value at index j to i;
  points1[j] = k; // index1 => k = 10; assign save 10 to index 1; assign saved value to index j
}

console.log("The Fisher Yates Method", points1); // Unbiased, in-place

// swap deeply
let example = [10, 20, 30, 40];

let temp = example[0]; // save 10
example[0] = example[3]; // assign 40 to index 0
example[3] = temp; // assign saved 10 to index 3

console.log("The swap are -", example); // [ 40, 20, 30, 10 ]

// another method
let example1 = [10, 20, 30, 40];

[example1[0], example1[2]] = [example1[2], example1[0]];
console.log("Direct swap are -", example1); //  [ 30, 20, 10, 40 ]

//example1[(0, 3)] = example1[(3, 0)]; its means assign 10 to index3 [ 10, 20, 30, 10 ]

// array destructuring for swapping => [a , b] = [b, a]

function shuffleObjects(arr) {
  // Make a copy of the original array
  const shuffled = arr.slice();

  // Create a shallow copy of the original array
  //const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements in the copy
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

  return shuffled;
}

const shuffleUser = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 22 },
  { name: "Dana", age: 30 },
];

const shuffledUser = shuffleObjects(shuffleUser);

console.log("Original", shuffleUser);
console.log("Shuffled", shuffledUser);

const users10 = [
  { name: "Alice", age: 25, address: { city: "Delhi" } },
  { name: "Bob", age: 28, address: { city: "Mumbai" } },
  { name: "Sofian", age: 28, address: { city: "Mumbai" } },
  { name: "Deep", age: 38, address: { city: "Bangladesh" } },
  { name: "Akand", age: 88, address: { city: "Dhaka" } },
  { name: "Charlie", age: 22, address: { city: "Kolkata" } },
];

// To copy everything, even the nested data (like address.city), you need a deep copy.

// Deep copy the array using JSON
const cloneUsers = JSON.parse(JSON.stringify(users10));

for (let i = cloneUsers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));

  [cloneUsers[i], cloneUsers[j]] = [cloneUsers[j], cloneUsers[i]];
}

console.log("Original users -", users10);
console.log("Random users -", cloneUsers);

// Using Math.min() on an Array
const points2 = [40, 100, 1, 5, 25, 10];

const num10 = Math.min.apply(null, points2);
console.log("The lowest number -", num10);

// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
console.log("The Highest number is -", Math.max.apply(null, points2));

// Home Made Min and max

/* Infinity is a special numeric value in JavaScript that represents something larger than any finite number.
      So any real number — including zero — is less than Infinity.

      -1000 < Infinity        // true
      999999999999 < Infinity // true
      Infinity > 0            // true
      Infinity > Infinity     // false
      Infinity === Infinity   // true

 */
const points3 = [40, 100, 1, 5, 25, 10];

let len = points.length; // 6
let min = Infinity; // positive infinity // ∞, 10, 10, 5, 1, 1,
while (len--) {
  // (6-- = 5), 4, 3, 2, 1, 0
  if (points3[len] < min) {
    // 10 < ∞, 25 < 10, 5 < 10, 1 < 5, 100 < 1, 40 < 1
    min = points3[len]; // min = 10; 10; 5; 1; 1; 1
  }
}
console.log("The minimum number -", min);

let min2 = Infinity;
for (let i = 0; i < points3.length; i++) {
  if (points3[i] < min2) {
    min2 = points3[i];
  }
}

console.log("the minimum -", min2);

/* -infinity 
        => -Infinity < -100000     // true
        => -Infinity < 0           // true
        => -Infinity < Infinity    // true
        => -Infinity === -Infinity // true
        => -Infinity > -Infinity   // false
*/

const points4 = [40, 100, 1, 5, 25, 10];

let length = points4.length;
let max = -Infinity;
while (length--) {
  if (points4[length] > max) {
    max = points4[length];
  }
}

console.log("The highest number -", max);

let arrays = [1, 2, 3, 4];

let result10 = arrays.splice(1, 2).pop(); // remove [2, 3] and return the last element of the remove array;
console.log(
  "2nd of remove element",
  result10,
  "The original array are affect =",
  arrays
); // 3, [1, 4]

let arrays1 = [1, 2, 3, 4];

// [2, 3] are the removed elements, and toSpliced() doesn't return those — it returns the new array after removal.

let result11 = arrays1.toSpliced(1, 2).shift();
console.log("1st element -", result11, "The array -", arrays1); // [ 1, 4 ] = 1, [ 1, 2, 3, 4 ]

// using slice - Extracted elements

let remove = arrays1.slice(1, 3);
console.log(
  "Extracted 1st element",
  remove[0],
  "Extracted 2nd element",
  remove[1]
);

// You have given an array of numbers nums You have to check if all elements of the array > 15 using built-in array method. return true or false

/* 
      includes() => Check if a specific value exists

      every() => Check if all elements satisfy a condition
      
      some() => Returns true if some elements pass a test
      
      entries() => Create an Array Iterator, and then iterate over the key/value pairs.
      
      with() => Array with(index, newValue) method as a safe way to update elements in an array without altering the original array.
*/

let num11 = [16, 17, 18, 28, 22];
console.log(num11.includes(16));

let above15 = num11.every((num) => num > 15);
console.log("Above15 true or false -", above15);

// every(), some(), entries(), with()
let num12 = [18, 19, 14, 28, 2];

let above16 = num12.every((num) => num > 16);
console.log("Above16 true or false -", above16);

let above17 = num12.some((num) => num > 17);
console.log("Above17  true or false -", above17);

let keyValue = num12.entries();
for (let x of keyValue) {
  console.log(x);
}

for (let x in num12) {
  console.log(x, num12[x]);
}

let updateNumber = num12.with(1, 900);
console.log(updateNumber); // [ 18, 900, 14, 28, 2 ]

// Guess the Output And explain Why?
let strArray = [1, 2, 3, 4, 5];
let result12 = strArray.reverse(); // .reverse() modifies the original array in place.

console.log(result12); // [ 5, 4, 3, 2, 1 ]
console.log(strArray); // [ 5, 4, 3, 2, 1 ]
console.log(result12 == strArray); // true; loose equality
console.log(result12 === strArray); // true; strict equality

// solution
let result13 = [...strArray].reverse();

console.log(result13); // [ 1, 2, 3, 4, 5 ]
console.log(strArray); // [ 5, 4, 3, 2, 1 ]
console.log(result13 == strArray); // true; loose equality

let result14 = strArray.toReversed();

console.log(result13); // [ 1, 2, 3, 4, 5 ]
console.log(strArray); // [ 5, 4, 3, 2, 1 ]
console.log(result13 == strArray); // true; loose equality

// You have given two arrays below as an example. Your task is to combine them into one By using array method
let arr0 = [1, 2, 3, 4, 5];
let arr00 = [6, 7, 8, 9, 10];

// Creates a new array by merging existing arrays
let combineArray = arr0.concat(arr00);
console.log("combine array", combineArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let combineArray1 = arr00.concat(arr0);
console.log("combine array", combineArray1); // [ 6, 7, 8, 9, 10, 1, 2, 3, 4, 5 ]

let combineArray2 = arr00.concat(arr0, arr00);
console.log("combine array", combineArray2); // [ 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// join() => 	Joins all array elements into a string
console.log(arr0.join(arr00)); // 16,7,8,9,1026,7,8,9,1036,7,8,9,1046,7,8,9,105

// Combine arrays using the spread operator
let combined = [...arr0, ...arr00];
let resultWithDash = combined.join(" * ");
console.log(resultWithDash);

let resultWithDash1 = [...arr0, ...arr00, ...arr0].join(" - ");
console.log(resultWithDash1);

// You have given an array of letters below. Convert that array into string of letters Without Space

let convert = ["a", "b", "h", "i", "s", "h", "e", "k"];
console.log(convert.join(""));

// Guess the Output and explain why?

let sort = [11, 62, 1, 27, 8, 5];
let sorted1 = sort.sort();
console.log(sorted1, sort); // [ 1, 11, 27, 5, 62, 8 ]; [ 1, 11, 27, 5, 62, 8 ]

let sort1 = [11, 62, 1, 27, 8, 5];
let sorted2 = sort1.toSorted();
console.log(sorted2, sort1); // [ 1, 11, 27, 5, 62, 8 ] [ 11, 62, 1, 27, 8, 5 ]

// thats why use numeric sort
let sort2 = [11, 62, 1, 27, 8, 5];
const numericSort = sort2.sort((x, y) => x - y);
console.log(numericSort, sort2); // [ 1, 5, 8, 11, 27, 62 ] [ 1, 5, 8, 11, 27, 62 ]

let sort3 = [11, 62, 1, 27, 8, 5];
const numericSort1 = sort3.toSorted(function (x, y) {
  return y - x;
});
console.log(numericSort1, sort3); // [ 62, 27, 11, 8, 5, 1 ] [ 11, 62, 1, 27, 8, 5 ]

/* 
    Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following thing in order:
        => Calculate the dog age in human years using the following formula: if the dogAge <= 2 years old, humanAge = 2 \* dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge
        
        Function Requirements Recap:
            => Accepts an array of dogAges('ages').
            => Converts each dog age to human age using:
                  => If dog age ≤ 2 → humanAge = 2 * dogAge
                  => If dog age > 2 → humanAge = 16 + dogAge
            => Returns the array of converted human ages.
*/

function calcAverageHumanAge(ages) {
  const humanAge = ages.map((dogAge) => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge;
    }
  });
  return humanAge;
}
let dogAges = [12, 2, 5, 12, 8, 2, 13, 9, 1];
console.log(calcAverageHumanAge(dogAges)); // [ 28,  4, 21, 28, 24, 4, 29, 25,  2 ]

function calcAverageHumanAge1(ages) {
  const humanAges = ages.map((dogAge) =>
    dogAge > 2 ? 16 + dogAge : 2 * dogAge
  );

  const average =
    humanAges.reduce((sum, age) => sum + age, 0) / humanAges.length;
  console.log(
    "Transform Human Average age is -",
    average,
    "\nTransform Human Age -",
    humanAges
  );
  //return average, humanAges; here only return humanAges not humanAges
}
let dogAge = [12, 2, 5, 12, 8, 2, 13, 9, 1];
calcAverageHumanAge1(dogAge);
//console.log("Transform Human age", calcAverageHumanAge1(dogAge));

/* Transform Human Average age is - 18.333333333333332
Transform Human Age - [
  28,  4, 21, 28, 24,
   4, 29, 25,  2
] */

// Guess the Output and Explain Why?

// at() => Returns an indexed element from an array
let arr13 = [1, 2, 3, 4, 5, 6, 7, 8];

let elem = arr13.at(0); // 1
console.log(elem);

let elem1 = arr13.at(-0); // 1
console.log(elem1);

let elem2 = arr13.at(-1); // 8
console.log(elem2);

let arr14 = [1, 2, 3, 4, 5, 6, 7, 8];
let elem4 = arr14.slice(2, 5).splice(0, 2, 21).pop();
console.log(elem4, arr14); // 4 ; [1, 2, 3, 4, 5, 6, 7, 8 ]

/* show => 3,4,5 => 3,4=> 4;
    .slice(2, 5)
    => Returns a shallow copy of a portion of the array from index 2 to 4 (not including 5).
    => arr itself is not modified by slice.
    
    .splice(0, 2, 21)
    [3, 4, 6] => remove 2 items from 0 index; insert 21 to index 0..
    => modified array becomes [21, 5]
    => The return value of splice is the removed elements: [3, 4]

    .pop()
    => Operates on the result of .splice(...), which is [3, 4]
    => Removes and returns the last element: 4

    => arr14 never modified bcz slice returns a copy
*/
