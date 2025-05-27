// Program to Find GCD or HCF of Two Numbers
function gcd(a, b) {
  // find minimum of a and b
  let result = Math.min(a, b);
  while (result > 0) {
    if (a % result == 0 && b % result == 0) {
      break;
    }
    result--;
  }
  // return gsd of a and b
  return result;
}

console.log(gcd(98, 56));

/* 
    Check if result divides both a and b without a remainder:

    Start with result = 56:
    98 % 56 = 42 (≠ 0) → Not a divisor
    Decrement result to 55:
    98 % 55 = 43 (≠ 0) → Not a divisor

    Continue decrementing until result = 14:

        98 % 14 = 0 
        56 % 14 = 0 

        Factors of 98: 1, 2, 7, 14, 49, 98
        Factors of 56: 1, 2, 4, 7, 8, 14, 28, 56
        Common factors: 1, 2, 7, 14
        Greatest common divisor (GCD): 14

*/
console.log(gcd(60, 36));

/* 
    Check if result divides both a and b without a remainder:

    Start with result = 36:
    60 % 36 = 24 (≠ 0) → Not a divisor
    Decrement result to 35:
    60 % 35 = 23 (≠ 0) → Not a divisor

    Continue decrementing until result = 12:

        60 % 14 = 0 
        36 % 14 = 0 
        
    Factors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60
    Factors of 36: 1, 2, 3, 4, 6, 6, 9, 12, 18, 36 
    Common factors: 1, 2, 4, 6, 12
    Greatest common divisor (GCD): 12
*/

// Euclidean Algorithm - Subtraction

function gcd1(a, b) {
  if (a == 0) return b;
  if (b == 0) return a;
  // base case
  if (a == b) return a;

  if (a > b) return gcd1(a - b, b); // 42 , 56 ; 28 , 14 ; 14, 14 => a === b => return a = 14
  return gcd1(a, b - a); // 42, 14
}

let aa = 98,
  bb = 56;
console.log("GCD of " + aa + " and " + bb + " is " + gcd1(aa, bb));

// Optimized Subtraction Euclidean by Checking Divisibility First
function gcd(a, b) {
  if (a === 0) {
    return b;
  }

  if (b === 0) {
    return a;
  }

  if (a === b) {
    return a;
  }

  if (a > b) {
    // 98 > 56; 42 < 56; 42 > 14
    if (a % b === 0) {
      // 42 % 14 === 0
      return b; // 14
    }
    return gcd(a - b, b); // 42 , 56
  }

  if (b % a === 0) {
    return a;
  }
  return gcd(a, b - a); // 42, 14
}

let a1 = 98,
  b1 = 56;
console.log(`GCD of ${a1} & ${b1} is ${gcd(a1, b1)}`);

// Optimized Division Based Euclidean - recursive function
function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

console.log(gcd(60, 36));

/* gcd(60, 36)

gcd(60, 36) → gcd(36, 60 % 36) = gcd(36, 24)
gcd(36, 24) → gcd(24, 36 % 24) = gcd(24, 12)
gcd(24, 12) → gcd(12, 24 % 12) = gcd(12, 0)

gcd(12, 0) → b === 0 => return 12. */

// Euclidean Algorithm - while looping statement
function gcd(a, b) {
  while (b !== 0) {
    let temp = b; // 56; 42; 14
    b = a % b; //  98 % 56 = 42; 56 % 42 = 14 ; 42 % 14 = 0 => here b === 0 --> stop execution
    a = temp; //  56; 42; 14
  }
  return a;
}
console.log(gcd(98, 56));
console.log(gcd(56, 98));
console.log(gcd(12, 16));
/* Compute a % b:
       56 % 98 = 56 (since 98 > 56, the remainder is 56).
        => (98, 56)
       12 % 16 = 12 (since 16 > 12, the remainder is 12).
       => (16, 12)
*/
/*
    gcd(98, 56)
    98 % 56 = 42 → gcd(56, 42)
    56 % 42 = 14 → gcd(42, 14)
    42 % 14 = 0 → GCD = 14 
*/
