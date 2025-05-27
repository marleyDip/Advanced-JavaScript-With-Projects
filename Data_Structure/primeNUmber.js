function isPrime(n) {
  // corner case
  if (n <= 1) return false;

  // check 2 to n-1
  for (let i = 2; i < n; i++) if (n % i == 0) return false; // here n = 9, check 9 / 2 to 8
  return true;
}
console.log(isPrime(9));

// square method
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) if (n % i == 0) return false; // if n = 144, check 12 * 12 = 144...so 2 to 12, not 2 to 143
  return true;
}

console.log(isPrime(16));

// 6k +- 1 method, faster than upper approach
function isPrime(n) {
  if (n == 2 || n == 3) return true;

  // check divided by 2 , 3
  if (n <= 1 || n % 2 == 0 || n % 3 == 0) return false;

  // To check through all numbers of the form 6k +- 1, bcz 0, 2, 4 is divided by 2
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
    /* 
        Here is the list of all prime numbers between 1 and 100:
            => 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 
      */ // here is a sequence... 5 + 6 = 11 or 11 + 2 = 13
  }
  return true;
}

let p = 25339;
let p1 = 25343;
let p2 = 25349;
console.log(`The ${p} is prime number: ${isPrime(p)}`);
console.log(`The ${p1} is prime number: ${isPrime(p1)}`);
console.log(`The ${p2} is prime number: ${isPrime(p2)}`);
