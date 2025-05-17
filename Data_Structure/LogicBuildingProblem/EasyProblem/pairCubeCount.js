/* Pair Cube Count

    Given n, count all 'a' and 'b' that satisfy the condition a^3 + b^3 = n. Where (a, b) and (b, a) are considered two different pairs
*/

// Nested Loops
function countPairs(n) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = 0; b <= n; b++) {
      if (a ** 3 + b ** 3 === n) {
        count++;
      }
    }
  }
  return count;
}

/* 
    a∈[1,9], b∈[0,9]

    Let's test each possible pair:
    Try small values:

    => outside loop (a): a = 1 -> a^3 = 1
    
    => inside loop (b): b^3 = 8 -> b = 0, 1, 2, 3, 4, ... ~ b = 2
         pair:- (1, 2) 
    
    => outside loop: a = 2 -> a^3 = 8
    
    => inside loop: b^3 = 1 -> b = 1
       pair (2, 1)

    all other value: a = 3 3^3 = 27 -> too big
    .........
*/

let n = 9;

/* a∈[1,9], b∈[0,9]

    Let's test each possible pair:
    Try small values:

    => outside loop (a): a = 1 -> a^3 = 1

    => inside loop (b): b = 0, 1, 2 -> b^3 = 15 -> b ~~2.46 -> Not an Integer
         No pair
         
    => outside loop: a = 2 -> a^3 = 8

    => inside loop: b^3 = 8 -> b = 2
         pair:- (2, 2)

    all other value: a = 3 -> 3^3 = 27 -> too big
    Larger a just makes a^3 > 16
*/
let n1 = 16;

let n2 = 28;

/* 
    a∈[1,9], b∈[0,9]

    Let's test each possible pair:
    Try small values:

    => outside loop (a): a = 1 -> a^3 = 1
    
    => inside loop (b): b^3 = 27 -> b = 0, 1, 2, 3, 4, ... ~ b = 3
         pair:- (1, 3) 
    
    => outside loop: a = 2 -> a^3 = 8
    
    => inside loop: b^3 = 22 -> b = 0
       N0 pair  

    => outside loop (a): a = 3 -> a^3 = 27
    
    => inside loop (b): b^3 = 1 -> b = 0, 1, 2, 3, 4, ... ~ b = 1
         pair:- (3, 1) 
    
*/
console.log(countPairs(1));
console.log(countPairs(2));
console.log(countPairs(4));
console.log(countPairs(27));
/* 
    a = 1 => a^3 = 1 => b^3 = 26 => b ~~ 2.97 X not a Cube

    a = 2 => a^3 = 8 => b^3 = 20 => b ~~ 2.7 X not a Cube

    a = 3 => a^3 = 27 => b^3 = 0 => b = 0 ---> (3, 0) pair, one pair is valid

    a = 4 => a^3 = 64 > 27 --> Stop
*/
console.log(countPairs(n));
console.log(countPairs(n1));
console.log(countPairs(n2));

// modern Approach

function countPairs(n) {
  let count = 0;

  // check each number 1 to cbrt(n)
  // parseInt(..., 10) convert the floating-point cube root into a whole number (integer) using base 10

  //  also check i^3 <= n
  // for (let i = 1; i <= parseInt(Math.pow(n, 1.0 / 3.0), 10); i++)

  for (let i = 1; i <= Math.floor(Math.cbrt(n)); i++) {
    // store cube of a number
    // 1^3 + b^3 = n ; 2^3 + b^3 = n ; 3^3 + b^3 = n; ....

    let cb = i * i * i;
    let diff = n - cb;

    // subtract the cube from given n
    // b^3 = n - 1^3; b^3 = n - 2^3; b^3 = n - 3^3; ...

    // check if the difference is also a perfect cube
    //let cbrtDiff = parseInt(Math.pow(diff, 1.0 / 3.0), 10);

    let cbrtDiff = Math.floor(Math.cbrt(diff));

    // if yes, then increment count
    if (cbrtDiff * cbrtDiff * cbrtDiff == diff) count++;
  }

  return count;
}

console.log(countPairs(9));
/*
    cube root (cbrt) 9 = 2.o8 ~~ 2
    i = 1, i = 2

    i = 1,
    cb = i * i * i =  1
    diff = 9 - 1 = 8
    cube root (cbrt) 8 = 2
    2 * 2 * 2 == 8 => match

    count++ => count = 1
    pair cube (1, 2)

    i = 2
    cb = i * i * i =  8
    diff = 9 - 8 = 1
    cube root (cbrt) 1 = 1
    1 * 1 * 1 == 1 => match

    count++ => count = 2
    pair cube (2, 1)

*/

console.log(countPairs(16));
/*
    cube root (cbrt) 16 = 2.51 ~~ 2
    i = 1, i = 2

    i = 1,
    cb = i * i * i =  1
    diff = 16 - 1 = 15
    cube root (cbrt) 15 = 2.46 ~~ 2
    2 * 2 * 2 == 8 != 15 => Not a perfect cube 

    i = 2
    cb = i * i * i =  8
    diff = 16 - 8 = 8
    cube root (cbrt) 8 = 2
    1 * 1 * 1 == 8 => match

    perfect math => increment count++
    
    So count = 1
    valid pair cube (2, 2)

*/

console.log(countPairs(28));
console.log(countPairs(64));
