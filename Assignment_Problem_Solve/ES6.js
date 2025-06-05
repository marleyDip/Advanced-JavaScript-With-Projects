// Destructuring assignment in JavaScript

let arr = [3, 4, 5, 7, 98, 0];

let [a, b, , c] = arr;
console.log(a, b, c); // 3 4 7

let array = [1, 3, [2, 55], [9, 8, 7]];

let [d, , [e, f], [g]] = array;
console.log(d, e, f, g); // 1 2 55 9

let array1 = [1, , [2, 55], [9, 8, 7]];

let [h, i = 10] = array1; // Default value for i
console.log(h, i); // 1 10

let obj = {
  name: "Deep",
  age: 25,
  weight: 70,
};

let { name: objName, age } = obj; // Destructuring with renaming
console.log(objName, age); // Deep 25
//console.log(name, age); // ReferenceError: name is not defined

//  You have given an array of nums.Create shallow copy of that array and store them in another variable

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numsCopy = [...nums]; // Shallow copy using spread operator
console.log(numsCopy); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// You have given an array as below . Create a function which accept multiple elements as an argument and return last 4 element of the array
function getLastFourElements(...elements) {
  return elements.slice(-4);
}

let lastFour = getLastFourElements(...nums); // Using spread operator to pass elements as arguments to the function
console.log(lastFour); // [6, 7, 8, 9]

// You have given an object as below. Create a function which accept multiple properties as an argument and return the value of those properties from the object

/*
    function getObjectProperties is designed to retrieve specified properties from an object and return them as an array 

        => obj: The object you want to extract properties from.

        => ...props: A rest parameter that allows you to pass any number of property names (as strings).
            => The rest parameter ...props gathers all additional arguments into an array.
            => props becomes ["name", "age", "weight"] or [x, y, z] in this case.

                    => obj["name"] = obj[x] → "Deep"
                    => obj["age"] = obj[y] → 25
                    => obj["weight"] = obj[z] → 70
*/

function getObjectProperties(obj, ...props) {
  return props.map((prop) => obj[prop]);
}

let person = {
  name: "Deep",
  age: 25,
  weight: 70,
};

let properties1 = getObjectProperties(person, "name", "age", "weight");
console.log(properties1); // ['Deep', 25, 70]

// Using variables to pass property names
let x = "name",
  y = "age",
  z = "weight";

let properties = getObjectProperties(person, x, y, z);
console.log(properties); // ['Deep', 25, 70]

console.log(person); // { name: 'Deep', age: 25, weight: 70 }

/* nullish coalescing operator (??)
    => It is used to provide a default value when dealing with null or undefined values.

        => Difference from || (logical OR)
        
        => The nullish coalescing operator (??) only considers null and undefined as "nullish" values, while the logical OR operator (||) considers any falsy value (like 0, "", NaN) as a candidate for defaulting.
        
        => It is particularly useful when you want to assign a default value to a variable that might be null or undefined, without affecting other falsy values like 0 or "".

        => example: let name = person.name || "Guest"; Will use "Guest" if name is falsy (e.g., '', 0, false)

        => example: let name = person.name ?? "Guest"; Will use "Guest" only if name is null or undefined.
                => Use ?? when you want to allow falsy values like 0 or '' but still handle null and undefined.
*/

// You have given a variable number. If it is null or undefined then assign 50 to it otherwise assign 0 to it

//let number; // 50
let number = null; // 50
//let number = 0;

let result = number ?? 50; // Using nullish coalescing operator
console.log("Number using nullish coalescing:", result); // 50

// You have given a variable number. If it is null or undefined then assign 50 to it otherwise assign 0 to it using ternary operator
let number1;

let result1 = number1 === null || number1 === undefined ? 50 : 0; // Using ternary operator
console.log("Number using ternary:", result1); // 50

// You have given a variable number. If it is null or undefined then assign 50 to it otherwise assign 0 to it using logical OR operator
let number2 = null;

if (number2 == null || number2 == undefined) {
  number2 = 50;
} else {
  number2 = 0; // Using logical OR operator
}
console.log("Number using Logical OR:", number2);

// You have given a variable number. If it is null or undefined then assign 50 to it otherwise assign 0 to it using logical AND operator
let number3 = undefined;

if (number3 != null && number3 != undefined) {
  number3 = 0;
} else {
  number3 = 50;
}

/* Using optional chaining to safely access the physics score
      => If subjects is undefined or physics is not a property, it will return undefined.......Otherwise, it will return the score of physics.
      
      => optional chaining is used to avoid errors when accessing properties of an object that may not exist or may be undefined. 
*/

// You have given an object as below. You have to check weather physics is the subject of that student or not, if true find the score of physics subject using optional chaining, ternary operator and if-else statement

let student1 = {
  math: {
    score: 75,
  },
  physics: {
    score: 85,
  },
};

let result2 =
  student1?.physics?.score !== undefined
    ? student1.physics.score
    : "physics is not a subject";
console.log("Using Ternary operator Physics Score:", result2);

let student = {
  name: "John",
  age: 18,
  subjects: {
    math: 90,
    physics: 85,
    chemistry: 78,
  },
};

let physicsScore = student.subjects?.physics;

if (physicsScore !== undefined) {
  console.log("Physics score:", physicsScore);
} else {
  console.log("Physics is not a subject.");
}

/*   Optional chaining (?.)

          => It can replace logical AND (&&) when you're safely accessing nested properties of an object — especially if a part of the chain might be null or undefined. 

                  let city = person && person.address && person.address.city

                  let city = person?.address?.city

          => Both lines mean: "Try to access city only if person and address exist."

          => Optional chaining cannot be used on the left side of an assignment:
                 => person?.address?.city = "Delhi"; // SyntaxError
*/

let person1 = {
  name: "deep",
  Address: {
    city: "Dhaka",
  },
};

// let me = person111.Address.postalCode; ReferenceError: person111 is not defined

//let me = person.Address.postalCode; person is  defined but there not declare Address property => TypeError: Cannot read properties of undefined (reading 'postalCode')

let me = person1.Address.postalCode;
console.log("Postal Code:", me); // undefined

//let city = person12?.Address?.city; ReferenceError: person12 is not defined

// let city = person?.Address.city; TypeError: Cannot read properties of undefined (reading 'city') bcz

// let city = person?.Address?.city; undefined because person is defined but Address is not defined but it will not throw an error

let city = person1?.Address?.city;
console.log("City:", city);

let postalCode = person1?.Address?.postalCode;
console.log("postal Code:", postalCode); // undefined

// combine  ?? and ?
let city1 = person1?.Address?.city ?? "Unknown City";
console.log("City With default Value:", city1);

let postalCode1 = person1?.Address?.postalCode ?? "0000";
console.log("Postal Code With nullish coalescing Value:", postalCode1);

// You have given an object as below. You have to check weather physics is the subject of that student or not, if true find the score of physics subject using ternary operator and logical AND operator

let student2 = {
  name: "John",
  age: 18,
  subjects: {
    math: 90,
    physics: 85,
    chemistry: 78,
  },
};

let physicsScore2 =
  student2?.subjects?.physics !== undefined
    ? student2.subjects.physics
    : "physics is not a subject";

console.log("Using Optional Chaining Physics Score:", physicsScore2);

let physicsScore1 =
  student2.subjects && student2.subjects.physics !== undefined
    ? student2.subjects.physics
    : "Physics is not a subject";

console.log(
  "Using Ternary & Logical And operator Physics Score:",
  physicsScore1
);

/*  optional chaining (?.) can be combined with nullish coalescing (??) to provide default values when a property might be undefined or null.

    => This combination allows you to safely access deeply nested properties and provide fallback values if they are not present.

    => Logical Or (||) === nullish coalescing (??) but with a key difference...

    => Logical And (&&) === optional chaining (?.) but with a key difference...
*/

let student3 = {
  name: "John",
  age: 18,
  subjects: {
    math: 90,
    physics: null, // or undefined
    chemistry: 78,
  },
};

// let physicsScore3 =
//   (student3 && student3.subjects && student3.subjects.physics) ||
//   "physics score not available";

let physicsScore3 =
  student3?.subjects?.physics ?? "physics score not available";
console.log("Using Optional Chaining & nullish Coalescing:", physicsScore3);

let number4 = [1, 4, 6, 8, 9, 10];

for (let num of number4) {
  console.log(num); // 1 4 6 8 9 10
}

/* In JavaScript, a fallback means providing a default value or behavior when something is missing, undefined, or otherwise "fails."

There are 5 common ways to implement fallbacks:
        1. Logical OR (||)
        2. Nullish Coalescing (??)
        3. Ternary Operator (?:)
        4. Default Function Parameters
        5. Optional Chaining (?.)
*/

let array2 = [1, 3, 6, 9, 12];

let array3 = [...array2]; // Shallow copy using spread operator
array3[2] = 99; // Modifying the copied array

console.log("Array before Modification:", array2); // [ 1, 3, 6, 9, 12 ]
console.log("Modified Array:", array3); // [ 1, 3, 99, 9, 12 ]

/* 
      => Here ...c is a rest parameter that collects all remaining arguments passed to the function into an array.
      
      => The rest parameter allows you to handle an indefinite number of arguments as an array.
*/

function fun(a, b, ...c) {
  console.log(`${a} ${b}`); // apple samsung

  console.log(c); // [ 'amazon', 'google', 'facebook' ]

  console.log(c[1]); // google

  console.log(c[0]); // amazon

  console.log(c.length); // 3

  console.log(c.indexOf("facebook")); // 2
}

fun("apple", "samsung", "amazon", "google", "facebook");

let number5 = 60;
let personAge = 18;

// Using ternary operator to check  conditions
let result3 =
  number5 > 50 ? (personAge > 19 ? "Pass" : "AgeIssue") : "NumberIssue";

console.log(result3);

// Using if-if-else statement to check conditions
if (number5 > 50) {
  if (personAge > 19) {
    console.log("Pass");
  } else {
    console.log("AgeIssue");
  }
} else {
  console.log("NumberIssue");
}

// Using if-elseif-else statement to check conditions
if (number5 > 50 && personAge > 19) {
  console.log("Pass");
} else if (number5 <= 50) {
  console.log("NumberIssue");
} else {
  console.log("AgeIssue");
}

// Using switch statement to check conditions
switch (true) {
  case number > 50 && personAge > 19:
    console.log("Pass");
    break;
  case number5 <= 50:
    console.log(NumberIssue);
    break;
  case personAge <= 18:
    console.log("AgeIssue");
    break;
  default:
    console.log("No condition matched");
}

/* new Set ([...]) = Create a Set, Which is a special data structure that stores unique values. 

    => Remove duplicate from an array.

    => It's convert the array and result in a Set, which is return result in => Set() {} => built-in object in JavaScript.
    
    => It is a built-in object in JavaScript that allows you to store collections of unique values. 

    => It has several useful methods for managing collections of unique items. 

        set => Only stores unique values, so it automatically removes duplicates
       .size => Gets the count of unique values in the Set
       .add() => Adds a new value to the Set, if it doesn't already exist
       .has() => Checks if a value exists in the Set
       .delete() => Removes a value from the Set
       .clear() => Removes all values from the Set
*/

let array6 = new Set([1, 2, 3, 1, 2, 1, 3, 4, 6, 7, 5]); // Create a Set from the array, removing duplicates
let length = array6.size; // Get the count of unique values in the Set

console.log("Unique values in the array:", array6); // Set(7) { 1, 2, 3, 4, 6, 7, 5 }
console.log("Count of unique values:", length); // 7
console.log(array6, length); // Set(7) { 1, 2, 3, 4, 6, 7, 5 } 7

console.log(array6 instanceof Set); // true, confirming that array6 is a Set

// Adding a new value to the Set
array6.add(8);
console.log("After adding 8:", array6); // Set(8) { 1, 2, 3, 4, 6, 7, 5, 8 }

// Checking if a value exists in the Set
console.log("Does the Set contain 3?", array6.has(3)); // true
console.log("Does the Set contain 10?", array6.has(10)); // false

// Removing a value from the Set
array6.delete(2);
console.log("After Removing 2:", array6); // Set(7) { 1, 3, 4, 6, 7, 5, 8 }

// Clearing all values from the Set
array6.clear();

console.log("After clearing the Set:", array6); // Set {}
console.log("count of unique values after clearing:", array6.size); // 0

// checking if the Set is empty
console.log("Is the Set empty?", array6.size === 0); // true

/* let set = new Set[(1, 2, 3, 2, 1, 3, 4, 12, 2)](); wrong syntax
   
    let set = new Set([1, 2, 3, 2, 1, 3, 4, 12, 2])(); 
    
    => You are trying to call the Set like a function using () after creating it — this is invalid.
    => new Set(...) is a constructor; it doesn't need to be called again with (). 
*/

let array7 = [
  1, 2, 4, 5, 9, 3, 4, 4, 5, 6, 7, 9, 2, 4, 6, 8, 9, 10, 10, 3, 6, 7,
];

let arr1 = new Set(array7);

let uniqueArray = Array.from(arr1); // Convert the Set back to an array

// Alternatively, you can use the spread operator to convert the Set back to an array
let uniqueArray2 = [...arr1];
let uniqueArray3 = [...new Set(array7)]; // Create a Set from the array to remove duplicates, then convert it back to an array

console.log("\nUnique values using Array.from():", uniqueArray); // [ 1, 2, 4, 5, 9, 3, 6, 7, 8, 10 ]
console.log("\nUnique values using spread operator:", uniqueArray2); // [ 1, 2, 4, 5, 9, 3, 6, 7, 8, 10 ]
console.log("\nUnique values in the array:", uniqueArray3); // [ 1, 2, 4, 5, 9, 3, 6, 7, 8, 10 ]

// convert a Set to an array using Array Iteration (filter, map), Array Sort, Array Methods (slice)
let array8 = [
  1, 2, 4, 5, 9, 3, 4, 4, 5, 6, 7, 9, 2, 4, 6, 8, 9, 10, 10, 3, 6, 7,
];

let arr2 = new Set(array8);
let uniqueArray4 = [...arr2];

let evens = uniqueArray4.filter((num) => num % 2 === 0);
console.log("\nEven Numbers using Set with filter:", evens); // [ 2, 4, 6, 8, 10 ]

let odds = uniqueArray4.filter((num) => num % 2 !== 0); // num % 2 === 1
console.log("\nOdd Numbers using Set with filter:", odds); // [ 1, 3, 5, 7, 9 ]

let squares = uniqueArray4.map((num) => num * num);
console.log("\nsquares of unique numbers using Set with map:", squares); // [ 1, 4, 16, 25, 81, 9, 36, 49, 64, 100 ]

let squaresFiltered = squares.filter((num) => num > 20); // Filtering squares greater than 20
console.log(
  "\nSquares greater than 20 using Set with filter:",
  squaresFiltered
); // [ 25, 36, 49, 64, 100 ]

let squaresSortedAsc = uniqueArray4
  .map((num) => num * num)
  .sort((a, b) => a - b); // Squaring each unique number and sorting the result
console.log(
  "\nSorted squares into ascending number using Set with map & sort:",
  squaresSortedAsc
); // [ 1, 4, 16, 25, 81, 9, 36, 49, 64, 100 ]

let squaresSortedDesc = squares.sort((a, b) => b - a); // Sorting squares in descending order
console.log(
  "\nSorted squares into descending number using Set with map & sort:",
  squaresSortedDesc
); // [ 100, 81, 64, 49, 36, 25, 16, 9, 4, 1 ]

// slice() => slice out a piece of an array into a new array
// Using slice to create a copy of the unique array before sorting
let sortedSlice = uniqueArray4.slice().sort((a, b) => b - a);
console.log(
  "\nSorted unique values in descending order using slice:",
  sortedSlice,
  "Not affect the original array",
  uniqueArray4
); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ; not affect the original array - [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let sorted = uniqueArray4.sort((a, b) => b - a); // Sorting the unique array in descending order
console.log(
  "\nSorted unique values in descending order:",
  sorted,
  "affected by the original array",
  uniqueArray4
); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ; // affected by the original array [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// here affect  the array thats now uniqueArray4 = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
let sortedSliceAsc = uniqueArray4.slice().sort((a, b) => a - b);
console.log(
  "\nSorted unique values in ascending order using slice:",
  sortedSliceAsc,
  "Not affect the original array",
  uniqueArray4
); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ; Not affect the original array -  [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

/* 
     => The Array.from() method returns an Array object from any object with a length property or any iterable object.

     => Array.from() is another clean way to convert a Set into an array — just like the spread syntax ([...set]).

     => Array.from() can be helpful in more advanced cases like mapping.

     => It can also be used to convert a Set into an array while applying a transformation function to each element.
*/

let array9 = [
  1, 2, 4, 5, 9, 3, 4, 4, 5, 6, 7, 9, 2, 4, 6, 8, 9, 10, 10, 3, 6, 7,
];

let arr3 = new Set(array9); // [ 1, 2, 4, 5, 9, 3, 6, 7, 8, 10 ]

// Convert the Set to an Array using Array.from() and map
let set = Array.from(arr3, (x) => x * 2);
console.log("\nSet Converted to Array using Array.from() with map -", set); // [ 2, 4, 8, 10, 18, 6, 12, 14, 16, 20 ]

// Convert the Set to an Array using Array.from() and map & filter
let set1 = Array.from(arr3, (x) => x + 5).filter((num) => num % 2 === 0);
console.log(
  "\nSet Converted to Array using Array.from() with map & filter -",
  set1
); // [ 6, 10, 14, 8, 12 ]

// Sorting the Set in descending order using Array.from() and sort
let set2 = Array.from(arr3).sort((a, b) => b - a);
console.log(
  "\nSet Converted to Array using Array.from() with sort -",
  set2,
  arr3
); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// Sorting the Set in ascending order using Array.from() and map & sort
let set3 = Array.from(arr3, (x) => x * 3).sort((a, b) => a - b);
console.log(
  "\nSet Converted to Array using Array.from() with map & sort -",
  set3,
  arr3
); // [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 ] Set(10) { 1, 2, 4, 5, 9, 3, 6, 7, 8, 10 }

/* Array.from() with a Map
      => A Map stores key-value pairs. 
*/

let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
  ["e", 5],
]);

let arr4 = Array.from(map);
console.log("\nNew Map", arr4); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ]

let entries = Array.from(map.entries());
console.log("\nEntries of Map", entries); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ]

let keys = Array.from(map.keys());
console.log("\nKeys of Map:", keys); // [ 'a', 'b', 'c', 'd', 'e' ]

let values = Array.from(map.values());
console.log("\nValues of Map", values); // [ 1, 2, 3, 4, 5 ]

let mapToArray = Array.from(map, ([keys, values]) => `${keys} - ${values}`);
console.log("\nMap to Array using Array.from() with map", mapToArray); // [ 'a - 1', 'b - 2', 'c - 3', 'd - 4', 'e - 5' ]

// Array.from() with a String
let str = "hello";

let strArray = Array.from(str);
console.log("\nString to Array using Array.from():", strArray); // [ 'h', 'e', 'l', 'l', 'o' ]

let upper = Array.from(str, (char) => char.toUpperCase());
console.log("\nUppercase string using Array.from():", upper); // [ 'H', 'E', 'L', 'L', 'O' ]

// Using Array.from() to create an array of characters from a string
let charArray = Array.from("JavaScript");
console.log("\nString to Array using Array.from():", charArray); // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]

// Array.from() with a Number Range (via custom object)
let range = Array.from({ length: 10 }, (_, i) => i);
console.log(
  "\nArray from Number Range using Array.from() with custom object & '_'",
  range
);

/* Array.from({ length: 5 }) creates an array of 5 undefined elements:
     => [undefined, undefined, undefined, undefined, undefined] 
     
     => _ is just a placeholder variable name for a value you're not using.
     
     => (element, index) => index is a function that returns the index of each element in the array.

     => _ is the unused element (value of the array, which is undefined)

     => It's a common convention to name a parameter _ when you don’t care about it. It improves readability.

     => Array.from() only accepts two arguments: Array.from( arrayLike , mapFn )

     => The first argument is an array-like object or iterable, and the second argument is a mapping function that transforms each element.

     => Array.from({length: 5}, (values, index) => values, index + 1); referenceError: index + 1 is not defined

     => If you try to pass a third argument, it will throw an error because Array.from() does not accept a third argument.
     
     => Accidentally passing a third argument: index + 1 (outside the arrow function)
*/

//let range1 = Array.from({ length: 5 }, (values, index) => values, index); referenceError: index is not defined

let range1 = Array.from({ length: 5 }, (values, index) => values);
console.log(
  "\nArray from Number Range using Array.from() with custom object & values",
  range1
); // [ undefined, undefined, undefined, undefined, undefined ]

range1 = Array.from({ length: 5 }, (values, index) => values ?? index);
console.log(
  "\nArray from Number Range using Array.from() with custom object & nullish coalescing",
  range1
); // [ 0, 1, 2, 3, 4 ]

// even number with Number range & map
let evenRange = Array.from({ length: 5 }, (_, index) => index * 2);
console.log("\nEven Number Range using Array.from() with map:", evenRange); // [ 0, 2, 4, 6, 8 ]

// even number with Number range & map & index + 1
let evenRange1 = Array.from({ length: 5 }, (_, index) => (index + 1) * 2);
console.log(
  "\nEven Number Range using Array.from() with map & index + 1:",
  evenRange1
); // [ 2, 4, 6, 8, 10 ]

// odd number with Number range & map
let oddRange = Array.from({ length: 5 }, (_, i) => i * 2 + 1); // i * 2 + 1
console.log("\nOdd Number Range using Array.from() with map -", oddRange); // [ 1, 3, 5, 7, 9 ]

// odd number with Number range & map & index + 1
let oddRange1 = Array.from({ length: 5 }, (_, i) => (i + 1) * 2 - 1);
console.log(
  "\nOdd Number Range using Array.from() with map & index + 1:",
  oddRange1
); // [ 1, 3, 5, 7, 9 ]

// Reverse numbers: [5, 4, 3, 2, 1]
let reverseNumbers = Array.from({ length: 5 }, (_, i) => 5 - i);
console.log("\nReverse Numbers using with map -", reverseNumbers); // [ 5, 4, 3, 2, 1 ]
// Reverse numbers with index + 1: [5, 4, 3, 2, 1]
let reverseNumbers1 = Array.from({ length: 5 }, (_, i) => 5 - (i + 1) + 1);
console.log("\nReverse Numbers using with map & index + 1 -", reverseNumbers1); // [ 5, 4, 3, 2, 1 ]

// custom range function
function createRange(start, end, step = 1) {
  let length = Math.floor(end - start / step + 1);
  return Array.from({ length }, (_, i) => start + i * step);
}

console.log("\nCustom Range (1-10):", createRange(1, 5));
console.log("\nCustom Range (2-10, 2):", createRange(2, 10, 2));
console.log("\nCustom Range reverse (10-2, -2):", createRange(10, 2, -2));

// Using Array.from() to create an array of numbers from a string
let numString = Array.from("12345", (num) => Number(num));
console.log("\nString to Array of Numbers using Array.from():", numString); // [ 1, 2, 3, 4, 5 ]

// Using Array.from() to create an array of even numbers from a string
let evenNumbers = Array.from("123456789", (num) =>
  num % 2 === 0 ? Number(num) : null
);
console.log(
  "\nString to Array of Even Numbers using Array.from() with map =",
  evenNumbers
); // [ null, 2, null, 4, null, 6, null, 8, null ]

// Using Array.from() to create an array of odd numbers from a string and filter out null values
let evenNumbersFiltered = Array.from("123456789", (num) =>
  num % 2 !== 1 ? null : Number(num)
);
console.log(
  "\nString to Array of odd numbers using Array.from() with map & filter =",
  evenNumbersFiltered.filter((num) => num !== null)
); // [ 1, 3, 5, 7, 9 ]

// let evenNumbers = Array.from("123456789", (num) => {
//   let n = Number(num);
//   return n % 2 === 0 ? n : null;
// }).filter((n) => n !== null);
// console.log(
//   "\nString to Array of Even Numbers using Array.from():",
//   evenNumbers
// ); // [ 2, 4, 6, 8 ]
