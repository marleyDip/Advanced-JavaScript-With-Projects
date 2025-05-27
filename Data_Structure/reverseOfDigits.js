// Write a program to reverse digits of a number

function reverseDigits(n) {
  let revNum = 0;
  while (n > 0) {
    revNum = revNum * 10 + (n % 10); // 0*10 + 2, 2*10 + 6, 26*10 + 5, 265*10 + 4
    n = Math.floor(n / 10); // 456, 45, 4
  }
  return revNum;
}

console.log(reverseDigits(4562));

// Using Recursion
class Solution {
  reverseDigits(n, revNum, basePos) {
    if (n > 0) {
      this.reverseDigits(Math.floor(n / 10), revNum, basePos);
      revNum[0] += (n % 10) * basePos;
      basePos[0] *= 10;

      /* Recursive Calls:

reverseDigits(456, [0], [1])

reverseDigits(45, [0], [1])

reverseDigits(4, [0], [1])

reverseDigits(0, [0], [1]) → Base case reached; recursion stops.

   => Unwinding the Recursion:

n = 4:

revNum[0] += 4 * 1 → revNum[0] = 4

basePos[0] = 10

n = 45:

revNum[0] += 5 * 10 → revNum[0] = 54

basePos[0] = 100

n = 456:

revNum[0] += 6 * 100 → revNum[0] = 654

basePos[0] = 1000

n = 4562:

revNum[0] += 2 * 1000 → revNum[0] = 2654

basePos[0] = 10000 */
    }
  }
}

let solution = new Solution();
let m = 190142;
let revNum = [0];
let basePos = [1];
solution.reverseDigits(m, revNum, basePos);
console.log(revNum[0]);

/* Using String =>
        This approach reverses a number by converting it into a string, reversing the string, and then converting it back into an integer.  
*/

function reverseDigit(n) {
  // converting the number to string
  let s = n.toString().split("").reverse().join("");

  //  converting string to number
  n = parseInt(s);

  // returning integer
  return s;
}

let n = 1689;
console.log(reverseDigit(n));
