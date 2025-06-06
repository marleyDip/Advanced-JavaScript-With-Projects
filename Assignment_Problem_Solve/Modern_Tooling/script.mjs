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

import { createProduct, deleteProduct } from "./product.mjs";

createProduct();
deleteProduct();
