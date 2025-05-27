//Given a number n, check whether it is even or odd.

function isEven(n) {
  return n % 2 == 0;
}

// Driver Code
let n = 11;
if (isEven(n)) {
  console.log("Even Number", n);
} else {
  console.log("Odd Number" + n);
}

// Second Method

function evenorodd(k) {
  if (k % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

evenorodd(10);
evenorodd(12);
evenorodd(11);

// Approach: Using Bitwise AND Operator

function isEvenOdd(n) {
  if ((n & 1) === 0) {
    return true;
  } else {
    return false;
  }
}

// driver code
let s = 102;
if (isEvenOdd(s)) {
  console.log(
    "The bitwise and operation with 1 & " + s + " " + "is an Even Number"
  );
} else {
  console.log(`The Bitwise And Operation with 1 & ${s} is an Odd Number`);
}

// print multiplication table of a number ---> Recursive Approach (পুনরাবৃত্ত পদ্ধতি)

// n this method, we pass i as an additional parameter with initial value as 1. We print n * i and then recursively call for i+1. We stop the recursion when i becomes 11 as we need to print only 10 multiples of given number and i.

// Recursion is when a function calls itself to solve a smaller part of the problem.

function PrintTable(p, i = 1) {
  if (i == 11) return;
  // i == 11 ---> base case
  // <--- this is the return you're asking about...return stops the recursion.

  console.log(p + " * " + i + " = " + p * i);
  i++;
  PrintTable(p, i); // <== this is the recursive call

  // Without that line, the function would print only once and stop.

  /* For n = 5:
        i = 1 → prints 5 * 1 = 5
        Then printTable(5, 2)
        Then printTable(5, 3)...

  Until i == 11, then it stops (base case). */
}

// Driver Code
let p = 10;
let q = 20;
PrintTable(p);
PrintTable(q);

/* Program to find sum of first n natural numbers */

function findSum(n) {
  return (n * (n + 1)) / 2;
}

var n1 = 5;
var n2 = 10;
var n3 = 15;

console.log(findSum(n1)); // 15

console.log(findSum("Sum of Natural Number" + n1)); // NaN ((String))

console.log("Sum of Natural Number" + " - " + findSum(n2)); //

console.log(`Sum of Natural Number: ${findSum(n3)} `);

// Another Method

function findSum(n) {
  if (n % 2 == 0) {
    return (n / 2) * (n + 1);
  } else {
    return ((n + 1) / 2) * n;
  }
}

let n6 = 6;
console.log(findSum(n6));

// another method

function sumOfNaturalNumber(n) {
  if (n > 0) {
    let sum = (n * (n + 1)) / 2;
    console.log("Sum is:", sum);
  } else {
    console.log("Invalid Input. Please enter a positive Integer");
  }
}

sumOfNaturalNumber(8);
sumOfNaturalNumber(-3);

/* Maximum of Two Numbers --> Input: Two numbers --> Output: Larger number */

let a = 55;
b = 30;
if (a > b) {
  console.log("a is grater than b");
} else {
  console.log("a is smaller than b");
}

// Function Method

function maxOfTwo(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

console.log(maxOfTwo(30, 40));
console.log(maxOfTwo(60, 70));

/* Maximum of Three Numbers --> Input: Three numbers --> Output: Largest number */

let a1 = 100;
let b1 = 100;
let c1 = 100;

if (a1 > b1 && a1 > c1) {
  console.log("Largest number of three input:" + a1);
} else if (b1 > c1) {
  console.log("Largest number :" + b1);
} else {
  console.log("Largest Number of :" + c1);
}

// Function Method

function maxOfThree(a1, b1, c1) {
  if (a1 >= b1 && a1 >= c1) {
    return a1;
  } else if (b1 >= c1) {
    return b1;
  } else {
    return c1;
  }
}

console.log(maxOfThree(400, 300, 200));
console.log(maxOfThree(200, 300, 400));
console.log(maxOfThree(200, 300, 100));

/* Positive, Negative, or Zero --> Input: A number -->Output: "Positive", "Negative", or "Zero" */

function PositiveNegativeZero(n) {
  if (n > 0) {
    console.log("The Number is Positive:", n);
  } else if (n < 0) {
    console.log("The Number is negative:", n);
  } else {
    console.log("The Number is Zero");
  }
}

PositiveNegativeZero(-3);
PositiveNegativeZero(7);
PositiveNegativeZero();

/* Check if a Character is a Vowel --> Input: A single character --> Output: "Vowel" or "Consonant" */

function characterVowelConsonant(m) {
  if (m === "a" || m === "e" || m === "i" || m === "o" || m === "u") {
    console.log("The character is vowel:", m);
  } else {
    console.log("The Character is Consonant:", m);
  }
}

characterVowelConsonant("u");
characterVowelConsonant("c");
characterVowelConsonant("e");

/* Intermediate Practice */

/* Leap Year Checker --> Input: A year --> Output: "Leap Year" or "Not a Leap Year" */

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year", year);
  } else {
    console.log("Not Leap Year", year);
  }
}

isLeapYear(2024);
isLeapYear(1900);
isLeapYear(2000);

/* Grade Calculator -->Input: Score (0–100) -->Output: "A", "B", "C", etc. based on ranges */

function getGrade(score) {
  if (score < 0 || score > 100) {
    console.log("Invalid Formate. Score Must be between 0 to 100");
  } else if (score >= 90) {
    console.log("Grade : A", score);
  } else if (score >= 80) {
    console.log("Grade : B", score);
  } else if (score >= 70) {
    console.log("Grade : C", score);
  } else if (score >= 60) {
    console.log("Grade : D", score);
  } else {
    console.log("Grade : F", score);
  }
}

getGrade(85);
getGrade(102);
getGrade(45);

/* Triangle Type Checker -->Input: Three side lengths 

-->Output: "Equilateral = All three sides are equal", 
"Isosceles = Exactly two sides are equal", 
"Scalene = All sides are different" */

//  Valid triangle condition: The sum of any two sides must be greater than the third side

// nested if

function checkTriangleType(a, b, c) {
  // First Check if it forms a valid triangle
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      console.log(
        "Equilateral = All three sides are equal " + a + "," + b + "," + c
      );
    } else if (a === b || a === c || b == c) {
      console.log(
        "Isosceles = Exactly two sides are equal " + a + "," + b + "," + c
      );
    } else {
      console.log(
        "Scalene  = All sides are different " + a + "," + b + "," + c
      );
    }
  } else {
    console.log("Not a Valid triangle" + "-" + a + "," + b + "," + c);
  }
}

checkTriangleType(5, 5, 5);
checkTriangleType(5, 5, 8);
checkTriangleType(3, 4, 5);
checkTriangleType(1, 2, 3);

/* Number in Range --> Input: A number -->Output: "In range" if between 10 and 50, else "Out of range" */

function checkRange(l) {
  if (l >= 10 && l <= 50) {
    console.log("In Range", l);
  } else {
    console.log("Out of Range", l);
  }
}

checkRange(80);
checkRange(50);
checkRange(8);

// Ternary Example

function checkRangeTernary(l) {
  console.log(l >= 10 && l <= 50 ? "In Range " + l : "Out Of Range " + l);
}

checkRangeTernary(20);
checkRangeTernary(5);

// Arrow function

const isBetween = (x, min, max) => x >= min && x <= max;

const j = 42;
const j1 = 100;

console.log(isBetween(j, 10, 50) ? "In Range " + j : "Out of Range " + j);

console.log(isBetween(j1, 10, 50) ? "In Range " + j1 : "Out of Range " + j1);

/* Simple Calculator --> Input: Two numbers and an operator (+, -, *, /) --> Output: The result of the operation */
// Nested if
function simpleCalculator(a, b, op) {
  let results;
  if (op === "+") {
    results = a + b;
  } else if (op === "-") {
    results = a - b;
  } else if (op === "*") {
    results = a * b;
  } else if (op === "/") {
    if (b === 0) {
      console.log("Error: division by zero " + a + "/" + b);
      return;
    }
    results = a / b;
  } else if (op === "**") {
    results = a ** b;
  } else {
    console.log("Error: Invalid Operator. Use +, -, *, /, or **");
    return;
  }
  console.log(`Results ${a} ${op} ${b} = ${results}`);
}

simpleCalculator(10, 0, "/");
simpleCalculator(10, 20, "+");
simpleCalculator(10, 20, "-");
simpleCalculator(10, 5, "*");
simpleCalculator(10, 5, "/");
simpleCalculator(10, 5, "**");

/* Problem: Check if a number is divisible by both 3 and 5 */

function checkDivided(f) {
  if (f % 3 === 0 && f % 5 === 0) {
    console.log("The Number is divided by both 3 and 5", f);
  } else if (f % 3 === 0) {
    console.log("The Number is only divided by 3", f);
  } else if (f % 5 === 0) {
    console.log("The Number is only divided by 5", f);
  }
}

checkDivided(15);
checkDivided(27);
checkDivided(50);

/* The dice problem -->  task is to guess the number on the opposite face of the cube. */

function oppositeFaceOfDice(n) {
  let ans;
  if (n === 1) {
    ans = 6;
  } else if (n === 2) {
    ans = 5;
  } else if (n === 3) {
    ans = 4;
  } else if (n === 4) {
    ans = 3;
  } else if (n === 5) {
    ans = 2;
  } else if (n === 6) {
    ans = 1;
  } else {
    console.log("Invalid face. Must be 1-6.");
    return;
  }
  console.log(`Opposite Face of Dice ${n} is to ${ans}`);
}

oppositeFaceOfDice(7);
oppositeFaceOfDice(6);
oppositeFaceOfDice(4);

// Clean and short version

function oppositeFaceOfDice(n) {
  if (n < 1 || n > 6) {
    console.log("Invalid face. Must be 1-6");
    return;
  }
  const ans = 7 - n;
  console.log(`Opposite face of dice ${n} is to ${ans}`);
}

oppositeFaceOfDice(8);
oppositeFaceOfDice(2);

/* .trim() is a JavaScript string method that removes whitespace from both ends of a string (but not in the middle). */

let input = "   red   ";
let cleaned = input.trim();

console.log(cleaned);
console.log(input.length);
console.log(cleaned.length);

/* Nested If -- putting one if statement inside another. This is useful when decisions depend on multiple levels of conditions. */

//Login System

let userName = "admin";
let adminPassword = "1234";

if (userName === "admin") {
  if (adminPassword === "1234") {
    console.log("Login Successfully");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("User Not Found");
}

// Write a program to check if a number is positive, and if it is, check whether it's even or odd.

let d = -1;
if (d >= 0) {
  if (d % 2 === 0) {
    console.log("The number is positive & Even");
  } else {
    console.log("The number is positive & Odd");
  }
} //else if (d === 0) { console.log("The Number is not positive or negative..its zero"); }
else if (d % 2 === 0) {
  console.log("The number is negative & Even");
} else {
  console.log("The number is negative & Odd");
}

// Ask for a person's age and whether they have an ID. Only allow entry if age is 18 or above and they have an ID.

let age = 13;
let hasId = "false";
if (age >= 18) {
  if (hasId === "true") {
    console.log("Entry allowed");
  } else {
    console.log("Entry denied");
  }
} else {
  console.log("Only allow entry if age is 18 or above...Your are under 18");
}

//Check if a password has at least 6 characters. If yes, check if it contains a number.

// A regex is a special string used to match patterns in text. a regex looks like this: /pattern/

let password = "Deep1234";
if (password.length >= 8) {
  if (/\d/.test(password)) {
    console.log("Strong Password");
  } else {
    console.log("Weak Password, Must contains Letter & Number");
  }
} else {
  console.log("Password Too Short");
}

// Write a program to check if there is a vowel in a string.

function checkStringVowel(input) {
  string = input.toLowerCase();

  if (/[aeiou]/.test(string)) {
    console.log("The Word", string, "contains a Vowel");
  } else {
    console.log("The Word", string, "does Not contain any vowel");
  }
}

checkStringVowel("deep");
checkStringVowel("bdt TK");
checkStringVowel("Akand");
