// Program to add two fractions
function gcd(n1, n2) {
  if (n1 === 0) return n2;
  return gcd(n2 % n1, n1);
}

function addFunction(a, b) {
  let ans = [];

  // Finding gcd of den1 and den2
  let den = gcd(a[1], b[1]); // gcd(2, 3) = 1

  // Denominator of final fraction obtained
  // finding LCM of den1 and den2
  // LCM * GCD = a * b
  den = (a[1] * b[1]) / den; // 2 * 3 / 1 = 6

  // Changing the fractions to have same denominator
  // Numerator of the final fraction obtained
  let num = a[0] * (den / a[1]) + b[0] * (den / b[1]); // 1 * (6 / 2) + 1 * (6 /  3) = 3 + 2 => 5

  // finding the common factor of numerator and denominator
  let common_factor = gcd(den, num); // gcd (6, 5)

  // Converting the result into simpler
  // fraction by dividing them with common factor
  den = den / common_factor; // 6 / 1
  num = num / common_factor; // 5 / 1
  ans.push(den); // 6
  ans.push(num); // 5
  return ans;
}
console.log(addFunction([3, 4], [2, 5]));
console.log(addFunction([1, 2], [1, 3]).join(" , "));
