//A while loop keeps running as long as a certain condition is true.

//while (condition) {
// code block to repeat
//}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++; // Don't forget this, or the loop will run forever!
}

/* Before each loop cycle, JavaScript checks the condition.

        => If it's true, it runs the code inside.

        => If it's false, it stops the loop. 
*/

/* 
    When to use while?

    --> When you don’t know in advance how many times to repeat

    --> When a task should run until something happens

    --> When input depends on user or data
*/

let num = 12345;
let sum = 0;

while (num > 0) {
  sum += num % 10; // get last digit
  num = Math.floor(num / 10); // remove the last digit
}

console.log("Sum of Digits:", sum);

/* Iteration 1: last = 5 → sum = 0 + 5 = 5 → num = 1234
Iteration 2: last = 4 → sum = 5 + 4 = 9 → num = 123
Iteration 3: last = 3 → sum = 9 + 3 = 12 → num = 12
Iteration 4: last = 2 → sum = 12 + 2 = 14 → num = 1
Iteration 5: last = 1 → sum = 14 + 1 = 15 → num = 0 */

// Iterative JavaScript Code to find sum of digits

function sumOfDigits(n) {
  let sum = 0;
  while (n !== 0) {
    // Exact the last digit
    let last = n % 10;

    // add last digit to sum
    sum += last;

    // remove the last digit
    n = Math.floor(n / 10);
  }
  return sum;
}
let q = 12345;
console.log(`The Sum of ${q} is ${sumOfDigits(q)}`);

/* 
    => Recursion is a process in which a function calls itself as a subroutine.

    => This allows the function to be repeated several times, as it can call itself during its execution.

    => Recursion is often used to solve problems that can be broken down into smaller, similar subproblem. 
*/

// function recursiveFunction(parameters) {
// Base case: stopping condition
// if (baseCase) {
// return baseCaseValue;
//}

// Recursive case: function calls itself
// return recursiveFunction(modifiedParameters);
// }

/* 
Key Components:

  Base Case:  
  => This is the condition that stops the recursion.
  => Without a base case, the function will call itself indefinitely, leading to a stack overflow.
  => Example: If calculating the factorial of a number, the base case is when the number is 0 or 1.

  Recursive Case:
  => This is where the function calls itself with a modified input.
  => The input is typically modified to move closer to the base case.
  => Example: For factorial, the recursive case is n * factorial(n - 1). 
*/

// Example : Factorial of a Number

function factorial(n) {
  //  base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1; // 0! = 1! = 1
  }

  // Recursive case: n! = n * (n - 1)!
  return n * factorial(n - 1);

  //The function calls itself with a smaller value: n - 1.

  // Each call waits for the result of the next smaller factorial.

  /* 
  factorial(5)
    = 5 * factorial(4)
    = 5 * (4 * factorial(3))
    = 5 * (4 * (3 * factorial(2)))
    = 5 * (4 * (3 * (2 * factorial(1))))
    = 5 * 4 * 3 * 2 * 1
    = 120 
  */
}

console.log(factorial(5));

// Decimal to binary number using recursion

function decToBin(d) {
  if (d === 0) return 0;
  else return (d % 2) + 10 * decToBin(Math.floor(d / 2));
  //10 * decToBin(...): Multiplies the result of the recursive call by 10 to shift the binary digits to the left, making room for the new LSB.

  /* 
    decToBin(0) = 0

    decToBin(1) = 1 + 10 * 0 = 1

    decToBin(2) = 0 + 10 * 1 = 10

    decToBin(5) = 1 + 10 * 10 = 1 + 100 = 101

    decToBin(10) = 0 + 10 * 101 = 0 + 1010 = 1010 */
}

console.log(decToBin(10));

/* 
  We can also use recursion to find the sum of digits. 
  The idea is to extract the last digit. add it to the sum, and recursively call the function with the remaining number (after removing the last digit).

     Base Case: If the number is 0, return 0.
     Recursive Case: Extract the last digit and add it to the result of recursive call with n / 10. 
*/

function sumOfDigit(n) {
  // base case
  if (n === 0) return 0;

  // recursive case
  return (n % 10) + sumOfDigit(Math.floor(n / 10));
}

console.log(sumOfDigit(123456789));

/* This approach is used when the input number is so large that it cannot be stored in integer data types. */

// Taking Input Number as String
function sumOfDigitStr(n) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    // exact digit from character
    let digit = s[i] - "0";
    // add digit to the sum
    sum = sum + digit;
  }
  return sum;
}

let s = "123451235654467655654563";
console.log(`The sum of string digit ${s} is ${sumOfDigitStr(s)}`);
