// Create a function Declaration called describeYourState Which take three parameters Population, traditional food and historical place. Based on this input function should return a String with this format.My state population is ** Its traditional food is ** and historical place name is ___

// function definition

function describeYourState(population, traditionalFood, historicalPlace) {
  return `My state population is ${population}. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}.`;
}
console.log(describeYourState(1000000, "Biryani", "Red Fort"));

function describeYourState1(population, traditionalFood, historicalPlace) {
  console.log(
    `My state population is ${population}. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}.`
  );
}

describeYourState1(5000000, "Pani Puri", "Gateway of India");

//  Create a function expression which does the exact same thing as defined in Question 1

// function expression (anonymous function => a function without a name)

const describeYourState2 = function (
  population,
  traditionalFood,
  historicalPlace
) {
  return `My state population is ${population}. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}.`;
};

console.log(describeYourState2(2000000, "Mutton", "Lal Bagh kella"));

// Create an arrow function which does the exact same thing as defined in Question 1

// arrow function

const describeYourState3 = (population, traditionalFood, historicalPlace) =>
  `My state population is ${population}. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}.`;

console.log(describeYourState3(3000000, "Samosa", "Hawa Mahal"));

// Create an callback function which does the exact same thing as defined in Question 1

// callback function

function describeYourStateCallback(
  population,
  traditionalFood,
  historicalPlace,
  callback
) {
  const description = `My state population is ${population}. Its traditional food is ${traditionalFood} and historical place name is ${historicalPlace}.`;
  callback(description);
}

//  Using a function expression as a callback
const result1 = function (definedDescription) {
  console.log(definedDescription);
};

// Using an arrow function as a callback
const result2 = (definedDescription) => {
  console.log(definedDescription);
};

// Using a named function as a callback

function result3(definedDescription) {
  console.log(definedDescription);
}

describeYourStateCallback(4000000, "Dhokla", "Ajanta Caves", result1);
describeYourStateCallback(4000000, "Dhokla", "Ajanta Caves", result2);
describeYourStateCallback(4000000, "Dhokla", "Ajanta Caves", result3);

// Using an inline arrow function as a callback

describeYourStateCallback(4000000, "Dhokla", "Sea Bird", (result) => {
  console.log(result);
});

// Guess the Output And Explain Why?

let arrowFunction = (name = "Coders") => {
  `Welcome ${name}`;
};

// The arrow function is defined but does not return a value.
// This will log undefined because the function does not have a return statement.

console.log(arrowFunction("Programmers")); // undefined

// another method

let arrowFunction2 = (name = "coders") => `welcome ${name}`;
// The arrow function is defined correctly and returns a string.
console.log(arrowFunction2()); // Welcome coders

// To fix the function, we need to add a return statement.

arrowFunction2 = (name = "Coders") => {
  return `Welcome ${name}`;
};
console.log(arrowFunction2("Programmers"));

// Create function addition which takes two numbers as an argument And return the result of sum of two numbers

// In the function call you are not passing any parameter. You can modify function to achieve this.

// If you are not allowed to modify the function call, you can set default parameters in the function definition.

// function addition(num1, num2) {}

function addition(num1 = 0, num2 = 0) {
  return num1 + num2;
}
// If no argument is passed then it should return 0.

console.log(addition()); //You are not allowed to modify this line any more

console.log(addition(10, 20));

// another way

function addition2(num1, num2) {
  let num3 = num1 || 5; // If num1 is undefined, set it to 5
  let num4 = num2 || 6; // If num2 is undefined, set it to 6

  return num3 + num4;
}

console.log(addition2()); //You are not allowed to modify this line any more

// yet another way

function addition3(num1, num2) {
  if (num1 === undefined) num1 = 1; // If num1 is undefined, set it to 1
  if (num2 === undefined) num2 = 1; // If num2 is undefined, set it to 1

  return num1 + num2;
}

console.log(addition3()); //You are not allowed to modify this line any more

// Using nullish coalescing operator to set default values

// nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined.

const addition1 = (num1, num2) => {
  num1 = num1 ?? 0; // If num1 is undefined, set it to 0
  num2 = num2 ?? 0; // If num2 is undefined, set it to 0

  return num1 + num2;
};

console.log(addition1()); //You are not allowed to modify this line any more

//  Identify which type of value passed below into the function greet(). What will be the return value of greet?

let person = {
  name: "john",

  age: 25,
};

function greet(person) {
  person.name = `Mr ${person.name}`;

  return `Welcome ${person.name}`;
}

console.log(person.name);
//greet(person); // The value passed into the function greet() is an object.
// The function modifies the name property of the object and returns a string with the modified name.
console.log(greet(person)); // Welcome Mr john

console.log(person.name);

console.log(greet(person)); // Welcome Mr Mr john
console.log(greet(person)); // Welcome Mr Mr Mr john

console.log(person.name);
// The return value of greet(person) is "Welcome Mr john".

// The original object is modified, so if we call greet(person) again, it will return "Welcome Mr Mr john".

// The function modifies the name property of the object, so the original object is changed.

// If we want to avoid modifying the original object, we can create a copy of the object and modify the copy instead.

let person1 = {
  name: "john",

  age: 25,
};

function greetCopy(person) {
  // Create a copy of the person object

  const personCopy = { ...person };

  //  Using spread operator to create a shallow copy of the object

  // const personCopy = Object.assign({}, person1); // Alternatively, using Object.assign to create a shallow copy

  // const personCopy = JSON.parse(JSON.stringify(person1)); // Using JSON methods to create a deep copy (not needed here)

  personCopy.name = `Mr ${personCopy.name}`;

  return `Welcome ${personCopy.name}`;
}

console.log(greetCopy(person1)); // Welcome Mr john

console.log(person1.name); // john

console.log(greetCopy(person1)); // Welcome Mr john
console.log(greetCopy(person1)); // Welcome Mr john

console.log(person1.name); // john

// The original object remains unchanged, and the function returns the modified name without affecting the original object.

//  Create higher order function named as transformer which take string and firstUpperCaseWord function as an arguments. firstUpperCaseWord is function which make first word UpperCase from a given String.

// Higher-order function is a function that takes another function as an argument or returns a function as its result.

// Higher-order function => CallBack function & Closure

function firstUpperCaseWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);

  // charAt(0) gets the first character, toUpperCase() converts it to uppercase, and slice(1) gets the rest of the string.

  // slice method returns a new string that is a part of the original string,
  // (a, b) => start point and end point (1 , 6) => "Hello"

  // This function capitalizes the first letter of the string and returns the modified string.
}

//  firstUpperCaseWord(string) is a function that takes a string as an argument

function transformer(string, func) {
  return func(string);
}

console.log(transformer("hello world", firstUpperCaseWord)); // Hello world

// Create a JavaScript Function to capitalize the first letter of each word of a given string.....input: capitalize('we are the champions'); output: 'We Are The Champions';

// another way

function capitalize(str) {
  return (
    str
      .split(" ")
      // Split the string into an array of words ; String method
      // "we are the champions" → ["we", "are", "the", "champions"]

      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      // Capitalize the first letter of each word; Array method

      // "we" → "W" + "e" = "We"; // "are" → "A" + "re" = "Are"; "the" → "T" + "he" = "The"; "champions" → "C" + "hampions" = "Champions" ......["We", "Are", "The", "Champions"]
      .join(" ")
    // Join the array of words back into a string with spaces; Array method
    // ["We", "Are", "The", "Champions"] → "We Are The Champions"
  );
}

console.log(capitalize("we are the champions")); // We Are The Champions

// another way

function capitalize2(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capitalize2("i'm frontend developer")); // I'm Frontend Developer

// another way

function capitalize1(str) {
  return str
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word; // For all other words, return them as they are
      // leave other words unchanged
    })
    .join(" "); // join back to sentence
}

console.log(capitalize1("i'm frontend developer")); // I'm frontend developer

// yet another way

function capitalize3(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalize3("we are the champions")); // We Are The Champions

function capitalize4(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}

console.log(capitalize4("we are the champions")); // We Are The Champions

// yet another way using regex

function capitalize5(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.replace(/^\w/, (c) => c.toUpperCase()); // Using regex to replace the first character with its uppercase version
      // ^\w matches the first word character (letter, digit, or underscore) at the start of the string
    })
    .join(" ");
}

console.log(capitalize5("we are the champions")); // We Are The Champions

//  create function which will display Your name after every 5 seconds

// function displayName(name) {
//   setTimeout(() => {
//     console.log(`Your name is ${name}`);
//   }, 3000);
// }

// displayName("Marley Dip");
// The setTimeout => function will call the provided function after 3000 milliseconds (3 seconds).

// function displayName1(name) {
//   setInterval(() => {
//     console.log(`${name} is after 3 seconds`);
//   }, 3000);
// }

function displayName(name) {
  let count = 0; // Initialize a counter to keep track of the number of times the function has been called

  const intervalId = setInterval(() => {
    console.log(`${name} is after 3 seconds`);
    count++;
    // Increment the counter each time the function is called

    if (count === 5) {
      clearInterval(intervalId); // Stop the interval after 5 calls / times
      console.log("Interval cleared after 5 calls.");
    }
  }, 3000);
}

displayName("Marley Dip");
// The setInterval => function will call the provided function every 3000 milliseconds (3 seconds).

// setInterval => is used to repeatedly execute a function at specified intervals, while setTimeout => is used to execute a function once after a specified delay.

// setTimeout => is used to execute a function after a specified number of milliseconds, while setInterval is used to repeatedly execute a function at specified intervals.

// setInterval => will keep running until you stop it, while setTimeout => will run only once after the specified time.

// Create a timer that logs the elapsed time every second and stops after 15 seconds

function startTimer() {
  let seconds = 0; // Initialize seconds counter

  const timerId = setInterval(() => {
    seconds++; // Increment seconds counter
    // start counting from 1
    console.log(`Timer: ${seconds} seconds`);
    //seconds++; // start counting from 0

    if (seconds >= 15) {
      clearInterval(timerId); // Stop the timer after 15 seconds
      console.log("Timer stopped after 15 seconds.");
    }
  }, 1000);
}

startTimer();
// The startTimer function uses setInterval to log the elapsed time every second and stops after 15 seconds using clearInterval.

// Create a countdown timer that starts from 10 seconds and logs the remaining time every second until it reaches 0
function startCountDown() {
  let seconds = 15;

  const countDownId = setInterval(() => {
    console.log(`Countdown: ${seconds} seconds remaining`);
    seconds--; // Decrement seconds counter

    if (seconds <= 0) {
      clearInterval(countDownId); // Stop the countdown when it reaches 0
      console.log("Countdown finished.");
    }
  }, 1000);
}

startCountDown();
// The startCountDown function uses setInterval to log the remaining time every second and stops when it reaches 0 using clearInterval.

// Create a function that takes a number and returns a function that logs the number after a specified delay

function delayedNumber(num, delay) {
  return function () {
    setTimeout(() => {
      console.log(`The Number is ${num}`);
    }, delay);
  };
}

delayedNumber(5, 2000)(); // The Number is 5

// Create a function that takes two number to multiply as an argument and returns a function that logs the number after a specified delay

function delayedMultiplication(num1, num2) {
  return function (delay) {
    setTimeout(() => {
      console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
    }, delay);
  };
}

delayedMultiplication(5, 10)(4000);

// Create a function that takes a string and returns a function that logs the string after a specified delay

function delayedString(str) {
  return function (delay) {
    setTimeout(() => {
      console.log(`The string is: ${str}`);
    }, delay);
  };
}

delayedString("Sofian, Hasan!")(6000); // The string is: Sofian, Hasan!

// Create a function that takes a number and returns a function that logs the square of the number after a specified delay

function delayedSquare(num) {
  return function (delay) {
    setTimeout(() => {
      console.log(`The Square of ${num} is ${num * num}`);
    }, delay);
  };
}

delayedSquare(5)(8000); // The Square of 5 is 25

// Asynchronous callback hell

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log(`Data with ID: ${dataId} fetched.`);
    if (getNextData) {
      getNextData();
    }
  }, 5000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4); //
    });
  });
});

// Create a JavaScript Function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) where s is half the perimeter, or (a + b + c)/2; input: area_of_triangle(5, 6, 7);

function area_of_triangle(a, b, c) {
  const s = (a + b + c) / 2; // Calculate the semi-perimeter
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(area_of_triangle(5, 6, 7)); // 14.696938456699069

// The area_of_triangle function calculates the area of a triangle using Heron's formula.

// It takes the lengths of the three sides as arguments, calculates the semi-perimeter (s), and then uses the formula to compute the area.

// another way to calculate the area of a triangle is to use the formula: Area = 1/2 * base * height

function area_of_triangle2(base, height) {
  return 0.5 * base * height;
}

console.log(area_of_triangle2(5, 10)); // 25

// Create a JavaScript Function to find the area of a rectangle where length is 5 and width is 10. : Area = length * width; input: area_of_rectangle(5, 10);

function area_of_rectangle(length, width) {
  return length * width; // Calculate the area of the rectangle
}
console.log(area_of_rectangle(5, 10)); // 50
