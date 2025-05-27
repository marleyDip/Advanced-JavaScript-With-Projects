//  Factorial of a Number

// Iterative Solution
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
let num = 6;
console.log("Factorial of " + num + " is " + factorial(num));

// Recursive Solution
/*   
    n! = n * (n - 1) * (n - 2) .... 2 * 1
    (n - 1)! = (n - 1) * (n - 2) ... 2 * 1
    From the above two equations, we can say that n! = n * (n - 1)! 
*/

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
let p = 5;
console.log("Factorial of", p, "is", factorial(p));
