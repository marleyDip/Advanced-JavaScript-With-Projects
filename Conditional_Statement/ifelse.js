//Given a number n, check whether it is even or odd.

function isEven(n) {
  return n % 2 == 0;
}

// Driver Code

let n = 10;
if (isEven(n)) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

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
PrintTable(p);
