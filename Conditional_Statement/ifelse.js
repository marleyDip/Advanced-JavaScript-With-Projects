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

// print multiplication table of a number ---> Recursive Approach (পুনরাবৃত্ত পদ্ধতি)

// n this method, we pass i as an additional parameter with initial value as 1. We print n * i and then recursively call for i+1. We stop the recursion when i becomes 11 as we need to print only 10 multiples of given number and i.

function PrintTable(p, i = 1) {
  if (i == 11) return;

  console.log(p + " * " + i + " = " + p * i);
  i++;
  PrintTable(p, i);
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
