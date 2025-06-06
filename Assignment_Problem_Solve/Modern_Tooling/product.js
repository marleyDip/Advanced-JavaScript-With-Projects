function createProduct() {
  console.log("Product Created");
}

/*  This is not valid JavaScript, because export default only allows one default export per file.
            =>export default createProduct, calculate;

    Here also use an object and export it as default
       => export default { createProduct, calculate }
*/

export default createProduct; // default
//export {calculate} Named

export function Addition(a, b) {
  return a + b;
}

export function Subtraction(a, b) {
  return a - b;
}

export function Multiplication(a, b) {
  return a * b;
}

export function Division(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

function calculate(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      return b !== 0 ? a / b : "Cannot divide byb zero";
    default:
      return "Invalid operator";
  }
}

// export default createProduct;
export { calculate };
