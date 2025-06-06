/* You have given scenario. You are in script.js And in same directory there is another file products.js. In products.js there are two methods called createProduct and deleteProduct

write an import and export statement properly in order to import these two methods from products.js file into the script.js

Question 2 Now export only one method createProduct using default export statement?

Question 3: In import statement how can we customize/change the name of function we are importing?

Example : function is defined as Addition. We want to import as 'Add'

How can can we do this? */

/* Task	                               Syntax
Named export	            export function funcName() {}

Default export	              export default funcName;

Import named	           import { funcName } from "./file.js"

Import default	             import funcName from "./file.js"

Rename during import (alias)	import { funcName as newName } from "./file.js" 
*/

import createProduct, { calculate } from "./product.js";

createProduct();

import {
  Addition as Add,
  Subtraction as Sub,
  Multiplication as Mul,
  Division as Div,
} from "./product.js";

console.log(Add(2, 3));
console.log(Sub(2, 3));
console.log(Mul(2, 3));
console.log(Div(2, 3));
console.log(Div(2, 0));

console.log(calculate(10, 5, "add"));
console.log(calculate(10, 5, "sub"));
console.log(calculate(10, 5, "mul"));
console.log(calculate(10, 0, "div"));
console.log(calculate(10, 5, "div"));
console.log(calculate(10, 5, "mod"));
