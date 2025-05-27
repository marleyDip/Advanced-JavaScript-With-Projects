function isPower(x, y) {
  if (x === 1) return y === 1; // 1^1 =1 or 1^0 =1...universal
  if (x === 0) return y === 0;

  // Repeatedly computed power of x
  let exponent = 1;
  let pow = x;
  while (pow < y) {
    pow *= x; // (1 < 1), false, pow = 1; after check (pow = 1) === (y =  1), print true...logically 10^0 =1 or 10^1 =1
    exponent++;
  }
  // check power of x becomes y
  return pow === y;
}

console.log(isPower(10, 1)); // true
console.log(isPower(1, 20)); // false
console.log(isPower(1, 128)); // true
console.log(isPower(2, 30)); // false

/* 
    Initialization:
pow = 1
x = 2
y = 30

    Loop Iterations:
pow = 1 → pow < y (1 < 30) → pow *= x → pow = 1 * 2 = 2
pow = 2 → pow < y (2 < 30) → pow *= x → pow = 2 * 2 = 4
pow = 4 → pow < y (4 < 30) → pow *= x → pow = 4 * 2 = 8
pow = 8 → pow < y (8 < 30) → pow *= x → pow = 8 * 2 = 16
pow = 16 → pow < y (16 < 30) → pow *= x → pow = 16 * 2 = 32
pow = 32 → pow < y (32 < 30) is false → Exit loop
*/

// Logarithmic Method

/* 
    This approach checks if y is a power of x using logarithms. By applying the logarithm change of base formula, it computes log⁡y(x)=log⁡(y)/log⁡(x). 
    
    If the result is an integer, it means that y is an exact power of x, and the function returns true. Otherwise, it returns false. 
*/

function isPower(x, y) {
  let res = Math.log(y) / Math.log(x); // 2.07 / 0.69 = 3; // 2.19 / 0.69 =  3.17
  return res === Math.floor(res); //  3 = 3, true; 3.17 = 3, false
}

console.log(isPower(10, 1)); // true... 0 / 2.30 = 0, 0 = 0
console.log(isPower(1, 20)); // true... 2.99 / 0 = infinity, infinity = infinity
console.log(isPower(2, 8)); // true
console.log(isPower(2, 9)); // false
