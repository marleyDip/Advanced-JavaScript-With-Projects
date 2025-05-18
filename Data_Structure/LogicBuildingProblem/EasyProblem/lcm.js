// Program to find LCM (Least Common Multiple ) of two numbers

function lcm(a, b) {
  let greater = Math.max(a, b); // 18
  let smaller = Math.min(a, b); // 12
  // i = 18; i <= 216; i = 18 + 18 = 36
  // 12 % 18 == 6, false
  // i = 36; i <= 216; i = 54
  // 36 % 12 == 0, execute & return i = 36
  for (let i = greater; i <= a * b; i += greater) {
    if (i % smaller === 0) {
      return i;
    }
  }
}

console.log(lcm(12, 18));
console.log(lcm(15, 20));
/* 
    i = 20; i <= 300; i = 40
    ( 20 % 15)
    i = 40; i <= 300; i = 60
    ( 40 % 15)
    i = 60; i <= 300; i = 80
    ( 60 % 15 == 0) return i = 60
*/

// Using GCD LCM Formula

// a x b = LCM(a, b) * GCD (a, b)
// LCM(a, b) = (a x b) / GCD(a, b)

function gcd(a, b) {
  if (b == 0) return a;
  // Replacing (a, b) with (b, a % b) in each step.
  return gcd(b, a % b); // 20, 15 % 20 = 15; 15, 20 % 15 = 5; 5 , 15 % 5 = 0; b == 0 return a = 5
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b; // 15 / 5 * 20 = 3 * 20 = 60
}

let a = 15,
  b = 20;

console.log("LCM of " + a + " and " + b + " is " + lcm(a, b));
0;

// The LCM of three numbers can be computed using:
// LCM (a,b,c) = LCM (LCM (a,b), c)  where,
// LCM (x,y) = ∣x*y∣ / GCD (x,y)

function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function lcm3(a, b, c) {
  return lcm(lcm(a, b), c);
}

function lcm4(a, b, c, d) {
  return lcm(lcm3(a, b, c), d);
}

console.log("three of lcm is" + lcm3(2, 3, 4, 6));

/* 
    => The reduce() method runs a function on each array element to produce (reduce it to) a single value.

    => The reduce() method works from left-to-right in the array. 

    => The reduce() method does not reduce the original array.
*/

function gcd(a, b) {
  return b == 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function lcmAll(...numbers) {
  return numbers.reduce((currentLCM, num) => lcm(currentLCM, num), 1);
}

/* 
      Rest Parameters (...numbers):

      The [...numbers] => 
        syntax collects all arguments into an array called numbers.........{ Shallow copy that take small or partial part of array, [a, b, c, (a, b)] }

      => This allows the function to accept any number of arguments (e.g., lcmAll(2,3), lcmAll(4,5,6,7)) 

*/

/* 
        Array.reduce() Method:

   => The reduce() method processes each number in the array one by one.

   => It maintains a running LCM value (currentLCM) that gets updated with each number.

   => Starts with an initial value of 1 (the multiplicative identity) 

*/

/* LCM Calculation:

For each number (num), it calculates lcm(currentLCM, num)

This builds up the LCM incrementally:

First computes LCM of first two numbers

Then computes LCM of that result with the third number

Continues until all numbers are processed */

console.log(lcmAll(20, 40, 60));
console.log(lcmAll(20, 40, 60, 80));
console.log(lcmAll(20, 40, 60, 80, 100));
console.log(lcmAll(2, 4, 6, 8, 10, 12));

/* Let's compute lcmAll(4, 6, 8):

Initialization:
currentLCM = 1 (starting value)

Numbers: [4, 6, 8]

      => First Iteration (num = 4):
      => lcm(1, 4) = 4

New currentLCM = 4

      => Second Iteration (num = 6):
      => lcm(4, 6) = 12 (since GCD(4,6)=2 → (4×6)/2=12)

New currentLCM = 12

      => Third Iteration (num = 8):
      => lcm(12, 8) = 24 (since GCD(12,8)=4 → (12×8)/4=24)

Final result: 24 */
