/* Given an integer n, for every positive integer i <= n, the task is to print,

"FizzBuzz" if i is divisible by 3 and 5,
"Fizz" if i is divisible by 3,
"Buzz" if i is divisible by 5
"i" as a string, if none of the conditions are true. */

function FizzBuzz(n) {
  let res = [];

  for (let i = 1; i <= n; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(i.toString());
    }
  }
  return res;
}

console.log(FizzBuzz(20).join(" "));

// By String Concatenation
function FizzBuzz(n) {
  const res = [];

  for (let i = 1; i <= n; i++) {
    let s = "";
    if (i % 3 === 0) s += "Fizz";
    if (i % 5 === 0) s += "Buzz";
    if (s === "") s += i;

    res.push(s);
  }
  return res;
}

console.log(FizzBuzz(30));

// Using Hash Map or Dictionary

function FizzBuzz(n) {
  const res = [];
  // Hash map to store all fizzBuzz mappings
  const mp = { 3: "fizz", 5: "Buzz", 7: "Deep_Akand" };
  const divisors = [3, 5, 7];

  for (let i = 1; i <= n; i++) {
    let s = "";

    for (let d of divisors) {
      if (i % d === 0) {
        s += mp[d];
      }
    }
    if (s === "") {
      s += i;
    }
    res.push(s);
  }
  return res;
}

console.log(FizzBuzz(30).join(" - "));
