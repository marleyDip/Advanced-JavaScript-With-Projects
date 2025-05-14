/* Program to print multiplication table of a number */

function printTable(n) {
  for (let i = 1; i <= 10; i++) console.log(n + " * " + i + "=" + n * i);
}

// Driver code
let p = 10;
let q = 55;
printTable(p);
printTable(q);
