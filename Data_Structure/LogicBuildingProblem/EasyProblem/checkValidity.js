// Check whether triangle is valid or not if sides are given

/* 
    Approach: A triangle is valid if sum of its two sides is greater than the third side. If three sides are a, b and c, then three conditions should be met.
        => a + b > c
        => a + c > b
        => a + b > a
*/

function checkValidity(a, b, c) {
  if (a + b <= c || b + c <= a || c + a <= a) return false;
  else return true;
}

console.log(checkValidity(1, 11, 12));
console.log(checkValidity(7, 5, 10));
