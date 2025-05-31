//Guess the Output And Explain ?

// Math.random() which returns a float between 0 and 1 => 0.00 to 0.99
// math.round = Rounds a number to the nearest integer. 4.66 => 5 or 4.33 => 4
// math.floor = Rounds a number down to the nearest integer. 4.66 => 4 or 4.33 => 4
// math.ceil = Rounds a number up to the nearest integer. 4.33 => 5 or 4.66 => 5

console.log(Math.round(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));

/* Create an object called country for a country of your choice, containing properties name , capital, language, population and neighbors
      - Increase the country population by two million using dot notation.
      - Decrease the country population by one million using bracket notation.
      - Make language value in Uppercase.
*/

const country = {
  name: "Bangladesh",
  capital: "Dhaka",
  language: "Bangla",
  population: 20,
  neighbors: "India",
};

let people = country.population + 2;
console.log(`The population of ${country.name} is ${people}`); // 22

let y = country;
y.population = 23;
console.log(`The population of ${country.name} is ${country.population}`);

let people1 = country["population"] - 1;
console.log(`The population of ${country.name} is ${people1}`); // 19

let people2 = "population";
console.log(`The population of ${country.name} is ${country[people2] - 5}`); // 15

let language = country.language.toUpperCase();
console.log(language);

let language1 = country["language"].toLowerCase();
console.log(language1);

// create a copy
const x = country;
x.capital = "Rajshahi";

console.log(`The Capital of ${country.name} is ${country.capital}`);

country["neighbors"] = "Nepal";

console.log(`The Capital of ${country.name} is ${country.neighbors}`);

//  Guess the Output and explain Why?

let car = {
  color: "Blue",
  model: 2021,
  company: "Toyota",
};

//let carColor = "blue";

let carColor = car.color;

console.log(car[carColor]); // undefined
console.log([carColor]); // [ 'blue' ]

console.log(car["model"]); // 2021

console.log(car.carColor); // undefined
console.log(carColor); // blue

/* Create a method describeCar inside car object in which you have to print like this in console using template literals
          - Company of my car is ** . It color is And Model of my car is __** 
*/

let car1 = {
  color: "Blue",
  model: 2021,
  company: "Toyota",
  // Object Methods ES5
  describeCar: function () {
    return `Company of my car is ${this.company}. It color is ${this.color} And Model of my car is ${this.model}`;
  },
};

console.log(car1.describeCar());
console.log(car1.describeCar); // [Function: describeCar]

// Object Methods ES5
car1.name = function () {
  return (this.color + " " + this.company + " " + this.model).toUpperCase();
};

console.log(car1.name());

/* Generate random numbers between 0 and 10 using trunc method of MATH object */

// Math.trunc() is a JavaScript method that removes the decimal part of a number, returning only the integer portion.

function getRandomIntNumbers() {
  return Math.trunc(Math.random() * 11);
}
console.log(getRandomIntNumbers());

const getRandomNumbers = Math.trunc(Math.random() * 10);
console.log(getRandomNumbers);

function getRandomIntNumbers0to10(count = 2) {
  for (let i = 0; i < count; i++) {
    console.log("The Random Numbers is " + Math.trunc(Math.random() * 11));
  }
}
// Call the function to generate 6 random numbers (1 initial + 2 from loop)

getRandomIntNumbers0to10(); // default parameter value execute
getRandomIntNumbers0to10(3);

/* Guess the Output and Explain Why? */

let arr = [1, 2, 3, 4];

arr.forEach((elem) => {
  if (elem == 1) {
    //continue;
    // SyntaxError: Illegal continue statement: no surrounding iteration statement
  }
  console.log("The Number are", elem);
});

// return inside forEach's callback does not stop the whole forEach, just the current iteration.
// It's the forEach way of saying "skip the rest of this step and move on."
// forEach => no return value means doesn't return a new array

// Use return in forEach to skip to the next iteration
arr.forEach((elem) => {
  if (elem == 1) {
    return; // skips to next element
  }
  console.log("The Number are", elem);
});

// use for...of instead of forEach => better readability & maintainability; access only array value
for (let num of arr) {
  if (num == 2) {
    continue;
  }
  console.log(`The arr number is ${num}`);
}

/* for (initialization; condition; update) {
      loop body
} */

// Use a regular for loop if you really want to use continue
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 1) {
    continue;
  }
  console.log(arr[i]); // 2 3 4
}

// here i = array index number; thats why use arr[i] to access value; otherwise use direct i

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 2) {
    continue;
  }
  console.log(i, arr[i]); // 0 1, 2 3, 3 4
}

// .filter() to exclude values => use condition
let newArr = arr.filter((elem) => elem !== 1);
let newArr1 = arr.filter((elem) => elem === 1);

console.log(newArr); // [ 2, 3, 4 ]
console.log(newArr1); // [ 1 ]
console.log(arr); // [ 1, 2, 3, 4 ]

/* Guess the Output And Explain Why? */
let array = [1, 2, 3, 4];

// for...in use in access object key-value pair.
// In Array used for access index number
for (let arr in array) {
  console.log(arr); // 0 1 2 3 => index number
}

for (let arr in array) {
  console.log(arr, array[arr]); // 0 1 , 1 2 , 2 3 , 3 4=> index number with value
}

/* Guess the Output And explain Why? Important Note: if there is any error, How we can solve that error? */

/* 
    # book(passenger, flightNum) { ... } => Shorthand method definition => ES6 => Modern Approach
    
    ## book: function(passenger, flightNum) { ... } => Traditional method definition => ES5 =>  Valid, but Verbose
    
    ### book: (passenger, flightNum) => { ... } => BAD idea in object methods
        => Arrow functions do not have their own this, so in most object method cases like this, they'll break the context — this won't refer to airplane.
 */

/* 
    => When you call airplane.book(...), this refers to airplane.

    => But when you do let bookMethod = airplane.book, you're copying the function without its original object.
    
    => So bookMethod() is now just a regular function call — and in JavaScript, in strict mode, this inside a regular function is undefined. 
*/
let airplane = {
  flightName: "air bangladesh",
  atacode: "FI",
  rating: 4.9,
  book(passenger, flightNum) {
    console.log(
      `${passenger} Booked Flight in ${this.flightName} with flight number ${this.atacode} ${flightNum}`
    );
  },
  // book: function (passenger, flightNum) {
  //   console.log(
  //     `${passenger} Booked Flight in ${this.flightName} with flight number ${this.atacode} ${flightNum}`
  //   );
  // },
};

airplane.book("dip", 9634);

// bind() creates a new function with this permanently set to airplane.
let bookMethod = airplane.book.bind(airplane);
bookMethod("john", 4567);

// without bind; this inside regular function is undefined
let bookMethod1 = airplane.book;
bookMethod1("akbar", 4567);

let bookMethod2 = airplane.book;

// call() apply() don't create a new function, they just call the original function with a specific this.
bookMethod2.call("Sofian", 1111);
bookMethod2.call(airplane, "Sofian", 1111);

// Or use apply (arguments as array)
bookMethod2.apply(airplane, ["hasan", 8888]);

// setTimeout
console.log("Booking will be processed shortly...");
setTimeout(() => {
  bookMethod("myself", 8787);
}, 500);

// direct access object methods
setTimeout(() => {
  airplane.book("deep", 9899);
}, 500);

/* 
              Summary of this behavior
Function Call Style	     this refers to	                Notes

object.method()	           object	                Normal method call ✅

let f = object.method	  undefined (strict)       	Loses this ❌

f.call(object)	            object	            Temporarily sets this ✅

object.method.bind(object)  permanently bound	   Returns a new function ✅ 
*/

/* setInterval & clearInterval  */

const airplaneBd = {
  flightName: "Flying Bangladesh",
  atacode: "FB",
  rating: 5.0,
  booking(passenger, flightNum) {
    console.log(
      `${passenger} Booked Flight in ${this.flightName} will flight number ${this.atacode} ${flightNum}`
    );
  },
};

// Bind book method to preserve 'this'
let bookMethod5 = airplaneBd.booking.bind(airplaneBd);

// Different names and flight numbers
let passengers = ["Myth", "Alice", "Bob", "Sara", "Tom"];
let flightNumbers = [101, 102, 103, 104, 105];

let count = 0; // initialize

// start interval
let bookInterval = setInterval(() => {
  // condition or end point
  if (count < passengers.length) {
    bookMethod5(passengers[count], flightNumbers[count]);
    count++; // update or step
  } else {
    clearInterval(bookInterval); // stop after 5 bookings
    console.log("All Bookings Complete");
  }
}, 1000);

/* when a passenger two tickets 
      -> then use
      let passengers = ["Myth", "Alice", "Myth", "Sara", "Tom"];
      let flightNumbers = [101, 102, 103, 104, 105];
*/

// but we use here an array of booking objects

const airplaneBangla = {
  flightName: "Flying Bangladesh",
  atacode: "FB",
  rating: 5.0,
  booking(passenger, flightNum, seatNum) {
    console.log(
      `${passenger} Booked Flight in ${this.flightName} will flight number ${this.atacode} ${flightNum} & Seat Number ${seatNum}`
    );
  },
};

let bookMethod6 = airplaneBangla.booking.bind(airplaneBangla);

// Multiple bookings, including repeated passengers
let bookings = [
  { name: "Mike", flightNum: 101, seatNumber: "A1" },
  { name: "Alice", flightNum: 102, seatNumber: "A3" },
  { name: "Mike", flightNum: 103, seatNumber: "A2" }, // mike second ticket
  { name: "Sara", flightNum: 104, seatNumber: "b1" },
  { name: "Tom", flightNum: 105, seatNumber: "c1" },
  { name: "Sara", flightNum: 106, seatNumber: "b2" }, // sara second ticket
  { name: "Tom", flightNum: 107, seatNumber: "c2" }, // tom second ticket
  { name: "Alice", flightNum: 108, seatNumber: "c3" },
  { name: "Sara", flightNum: 109, seatNumber: "b3" }, // sara third ticket
];

let count1 = 0;

// Track total tickets per person
let ticketSummary1 = {};

let bookingsInterval = setInterval(() => {
  if (count1 < bookings.length) {
    // destructing objects
    const { name, flightNum, seatNumber } = bookings[count1];
    bookMethod6(name, flightNum, seatNumber);

    // count tickets
    ticketSummary1[name] = (ticketSummary1[name] || 0) + 1;

    count1++;
  } else {
    clearInterval(bookingsInterval);
    console.log("All Bookings Complete...");

    //use reduce to summarize after all bookings
    let ticketSummary = bookings.reduce((summary, booking) => {
      summary[booking.name] = (summary[booking.name] || 0) + 1;
      return summary;
    }, {});

    // Build summary using for...of
    let ticketSummary2 = {};
    for (let booking of bookings) {
      let name = booking.name;
      ticketSummary2[name] = (ticketSummary2[name] || 0) + 1;
    }

    // Print summary
    console.log("\n📊 Ticket Summary:");
    for (let name in ticketSummary) {
      console.log(`${name} booked ${ticketSummary[name]} ticket(s).`);
    }
  }
}, 2000);

/*  Why use reduce()?
      => Cleaner and more declarative
      => Avoids manual tracking inside the loop
      => Scales well for larger data sets 
*/

/* You have to create a Shopping_Cart array with following features :
        addItem(itemName) : this function should add string itemName to cart
        
        removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it
        
        cartSize() : returns size of cart in terms of number of cart Items. 
*/

let Shopping_Cart = {
  cart: [],

  // Add item to the cart
  addItem(itemName) {
    this.cart.push(itemName);
    console.log(`${itemName} added to cart`);
  },

  // Remove item from the cart
  removeItem(itemName) {
    const index = this.cart.indexOf(itemName);

    if (index !== -1) {
      this.cart.splice(index, 1); // splice (start index number, total delete items)
      console.log(`${itemName} removed from cart`);
    } else {
      console.log(`${itemName} not found in cart`);
    }
  },

  // Return number of items in the cart
  cartSize() {
    return this.cart.length;
  },
};

Shopping_Cart.addItem("Shoes");
Shopping_Cart.addItem("Watch");
Shopping_Cart.addItem("phone");

console.log(Shopping_Cart.cart);
console.log("Cart Size: " + Shopping_Cart.cartSize());

Shopping_Cart.removeItem("Watch");

console.log(Shopping_Cart.cart);
console.log("Cart Size: " + Shopping_Cart.cartSize());

Shopping_Cart.removeItem("Hat");

/*  New Feature -
        => Quantities — handle multiple of the same item.

        => Prices — store price per item.

        => Total calculation — sum up total cost.

        => printCart() — show the full cart in a readable way. 

        =>  discount coupons or promo codes - % off or flat amount off

        => Updated removeItem with Case-Insensitive Match
*/

// [{ Object & Array } - Object Methods with Array Methods( push(), splice() ), Array Search( find(), findIndex() ), Array Iteration ( forEach(), reduce() ), Array Sort ( Math.max() ) ]

let Shopping_Cart1 = {
  cart: [],

  discount: {
    code: null,
    amount: 0, // in currency (flat)
    percentage: 0, // in %
  },

  // Add item to cart
  addItem(itemName, price) {
    const item = this.cart.find((i) => i.name === itemName);
    if (item) {
      item.quantity++;
      console.log(`Increased Quantity of ${itemName} to ${item.quantity}`);
    } else {
      this.cart.push({ name: itemName, price: price, quantity: 1 });
      console.log(`${itemName} added to the cart at ৳ ${price}`);
    }
  },

  // Remove item or reduce quantity
  removeItem(itemName) {
    const lowerName = itemName.toLowerCase();

    const index = this.cart.findIndex(
      (i) => i.name.toLowerCase() === lowerName
    );

    if (index !== -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
        console.log(
          `Decreased quantity of ${this.cart[index].name} to ${this.cart[index].quantity}`
        );
      } else {
        console.log(`${this.cart[index].name} removed from cart`); // when 1 > 1 then log this
        this.cart.splice(index, 1); // after that remove item here

        // this.cart.splice(index, 1); // ist remove here then
        // console.log(`${itemName} removed from cart`);
        // console.log this thats why only itemName
      }
    } else {
      console.log(`${itemName} not found in cart`);
    }
  },

  // count number of item types
  cartSize() {
    return this.cart.length; // without return its undefined

    // console.log(`The cart size is: ${this.cart.length}`);
  },

  applyCoupon(code) {
    //const code = code.toUpperCase(); // SyntaxError: Identifier 'code' has already been declared

    code = code.toUpperCase();
    if (code === "SAVE20") {
      this.discount = { code, amount: 0, percentage: 20 }; // not code=null bcz null intentionally given
      console.log(
        `Promo Code ${code}...Applied: ${this.discount.percentage}% off`
      );
    } else if (code === "FREESHIP") {
      this.discount = { code, amount: 100, percentage: 0 };
      console.log(`Promo Code ${code}...Applied: ৳${this.discount.amount} off`);
    } else {
      this.discount = { code: null, amount: 0, percentage: 0 };
      console.log("Please give valid Promo Code...");
    }
  },

  //  calculate subtotal
  subTotal() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  // calculate total after applying discount
  // [ subTotal - discount = totalAmount ]
  totalAmount() {
    const subTotal = this.subTotal();
    const { amount, percentage } = this.discount;
    const discountAmount =
      percentage > 0 ? (subTotal * percentage) / 100 : amount;
    //  here percent 0 > 0 : amount; fantastic logic
    return Math.max(0, subTotal - discountAmount); // avoid negative total
  },

  // display cart with discount
  printCart() {
    if (this.cart.length === 0) {
      console.log("Your cart is empty");
      return;
    }

    console.log("\n 🛍️ Your Cart:");
    this.cart.forEach((item) => {
      console.log(
        `- ${item.name} (৳ ${item.price}) x ${item.quantity} = ৳ ${
          item.quantity * item.price
        }`
      );
    });

    const subTotal = this.subTotal();
    const discount = this.subTotal() - this.totalAmount();
    const total = this.totalAmount();

    console.log(`SubTotal - ৳ ${subTotal}`);
    if (discount > 0) {
      console.log(`Discount - ৳ ${discount} (${this.discount.code})`);
    }
    console.log(`Total: ৳ ${total}`);
  },
};

Shopping_Cart1.addItem("Phone", 9500);
Shopping_Cart1.addItem("Watch", 500);
Shopping_Cart1.addItem("Sunglass", 500);
Shopping_Cart1.addItem("Phone", 9500);

console.log(Shopping_Cart1.cart);

//Shopping_Cart1.removeItem("phone");
//Shopping_Cart1.removeItem("phone");

//console.log(Shopping_Cart1.cart);

//Shopping_Cart1.cartSize(); // The cart size is: 3

console.log("Cart Size is:", Shopping_Cart1.cartSize());

Shopping_Cart1.applyCoupon("save20");
Shopping_Cart1.printCart();

Shopping_Cart1.applyCoupon("freeship");
Shopping_Cart1.printCart();

Shopping_Cart1.applyCoupon("");
Shopping_Cart1.printCart();
