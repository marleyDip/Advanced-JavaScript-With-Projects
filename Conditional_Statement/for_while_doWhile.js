/* Program to print multiplication table of a number */

function printTable(n) {
  for (let i = 1; i <= 10; i++) console.log(n + " * " + i + "=" + n * i);
}

// Driver code
let p = 10;
let q = 55;
printTable(p);
printTable(q);

//  Calculate the sum of all integers from 1 to n by iterating through a loop.

function findSum(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) sum += x;
  return sum;
}

let q1 = 5;
console.log(findSum(q1));

// another method

/* function findSum1(n) {
  let sum = 0;

  for (let x = 1; x <= n; x++) {
    sum = sum + x;

    return sum; 
    
     here sum = 1 only, never add 2, 3, 4, 5 bcz …inside the loop, the function returns immediately after adding 1 (on the first loop cycle). So it exits early.
  }
} */

function findSum1(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) {
    sum = sum + x;
  }
  return sum;
}

let s = 10;
console.log(`The Sum of ${s} Natural number is ${findSum1(s)}`);

// easiest method
function findSum2(n) {
  return (n * (n + 1)) / 2;
}

console.log(findSum2(14));
console.log(findSum2(20));

// Swap Two Numbers
let a = 5,
  b = 3;
console.log("a = " + a + " b = " + b);

// destructuring assignment
[a, b] = [b, a];
console.log("Swap Number: " + "a = " + a + "," + " b = " + b);

// Another Method

let a1 = 10,
  b1 = 50;
console.log(`a = ${a1},  b = ${b1}`);

// swap number using temp variable
let temp = a1;
a1 = b1;
b1 = temp;

console.log(`Swap number: a = ${a1}, b = ${b1}`);

// Nth term of AP from First Two Terms

// Given two integers a1 and a2, the first and second terms of an Arithmetic Series respectively, the problem is to find the nth term of the series.

/* In an Arithmetic Series, the difference between all pair of consecutive terms is same, for example, 2, 5, 8, 11, 14,,,,, The common difference is 3.

Find the common difference of the series, common difference d = a2 - a1

Run a loop to iterate over each term in the series from a1, keep adding common difference d until the n-th term is reached. */

// The nth term of AP (Arithmetic Progression) is used to find any term of it. T = a + (n - 1) d

function nthTermOfAP(a2, b2, n) {
  let nthTerm = a2;
  d = b2 - a2;
  for (let x = 1; x < n; x++) {
    nthTerm += d;
  }
  return nthTerm;
}

console.log(nthTermOfAP(10, 15, 5));
console.log(nthTermOfAP(2, 3, 4));

// used direct formula method
function nthTermOfAP1(a1, a2, n) {
  return a1 + (n - 1) * (a2 - a1);
}

let a4 = 3,
  a5 = 6;
let n = 6;
console.log(nthTermOfAP1(a4, a5, n));

// Find the number closest to n and divisible by m

/* We find the value of n/m. Then we find closest of two possibilities. One is q * m other is (m * (q + 1)) or (m * (q - 1)) depending on whether one of the given two numbers is negative or not. */

function closetNumber(n, m) {
  // find the quotient

  //let q = Math.floor(n / m); // -13 / 4 = 3.25 == -3; 10 / 3 = 3
  let q = parseInt(n / m); // 13 / 4 = 3.25 == 3

  // 1st possible quotient
  let n1 = q * m; //  3 * 4 = 12; -3 * 4 = -12; 3 * 3 = 9

  // ternary operator = condition is true => 1st block( after ? ) or condition is false => 2nd block (after : )

  /* his line finds the next closest multiple of m in the direction away from n1.
  If n and m are both positive or both negative → go up to q + 1
  If they have opposite signs → go down to q - 1 */

  // 2nd possible quotient
  let n2 = n * m > 0 ? m * (q + 1) : m * (q - 1); // 52 ? 20 : 12 => n2 = 20; -52 > -8 : -16 => n2 = -16; 30 ? 12 : 6 => n2 = 12

  // if true, then n1 is the required closet number
  if (Math.abs(n - n1) < Math.abs(n - n2)) return n1;
  return n2; // (13 - 12) < (13 - 20) => 1 < 7, return n1 = 12; (-13 - (-12) ) < (-13 - (-16)) => 1 < 3, return n1 = -12; (10 - 9) < (10 -12) => (math.abs(1) < (math.abs(-2) = 1 < 2, return n1 = 9
}

console.log(closetNumber(13, 4));
console.log(closetNumber(-13, 4));
console.log(closetNumber(13, -4));
console.log(closetNumber(-13, -4));
console.log(closetNumber(10, 3));

let r1 = 7;
let r2 = 2;
console.log(closetNumber(r1, r2));
