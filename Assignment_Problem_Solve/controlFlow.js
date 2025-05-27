let i = 4;

for (let j = 0; i < 10; i++) {
  // let j = 0 → Declared once at the start of the loop, and never changes
  if (j === 1 || i === 6) {
    // j === 1 (never true since j = 0)
    continue; // i === 6 (true when i = 6)
    // continue skips (6) the rest of the loop body and goes to the next iteration
  } else {
    console.log(i, j);

    if (i === 7) {
      break; // break exits the loop entirely when i is 7
    }
  }
}

let p = 0;

for (p; p < 5; p++) {
  console.log(p);
}

// block-scoped
for (let ii = 0; ii < 10; ii++) {
  console.log(ii);
}

// console.log(ii); // ReferenceError: ii is not defined (let is block-scoped)

let iii;

for (iii = 0; iii < 10; iii++) {
  console.log(iii);
}
// let outside loop => Accessible both inside and after loop

console.log("final iii", iii); // 10

// why 10 => i is incremented to 10; Condition 10 < 10 becomes false; The loop stops

// After the loop ends, ii holds the first value that failed the condition, which is 10.

let iv = 0;

for (; iv < 2; iv++) {
  console.log(iv);
}
/* for (initialization; condition; update) {
        body => that why we can leave initialization empty
} */

console.log("final iv:", iv);

// Write a simple Program in which You have to print first 10 numbers in descending order (10...1)?

/* 
    (function ...)(10)
        => This is an IIFE — the function is defined and called immediately with 10. 

    => An IIFE is a function that: 
        Is defined.
        And immediately called with arguments.  
        
        (function myFunction(arg) {
                function body
        })(value);

    => Recursion is when a function calls itself to solve a smaller version of the same problem, until it reaches a base case (stop condition).    
*/

(function printDescending(num) {
  if (num > 0) {
    // Base case: when num is 0 or less, stop recursion
    // Print the current number
    // Recursive case: call the function with num - 1
    console.log(num);
    printDescending(num - 1);
    // Each recursive call goes deeper into the stack, and prints num first, then moves to num - 1.
    // Call Stack (top to bottom)
    // printDescending(10) → prints 10, calls printDescending(9)
    // ....
    // printDescending(1) → prints 1, calls printDescending(0)
    // printDescending(0) → base case met → does not print anything, stops recursion
  }
})(5);

(function printAscending(num) {
  if (num > 0) {
    printAscending(num - 1);
    // after the recursive call => print the current number 1, 2,....10
    // delaying the printing until you reach the base case
    // 	Prints after reaching 0 → Ascending order
    // base case hit, start returning
    console.log(num);
  }
})(5);

for (let v = 5; v > 0; v--) {
  console.log(v);
}

let vi = 5;
while (vi > 0) {
  console.log(vi);
  vi--;
}

//  Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. One of the food option between these two must present Spanish food OR English food. Write an if/else if statement to help john figure out Your country is right for him?

const speaksEnglish = "usa"; // Change to false if the country does not speak English
const speaksSpanish = "spain"; // Change to true if the country speaks Spanish
const hasLessThan10MillionPeople = 6; // Change to false if the country has more than 10 million people
const hasEnglishFood = ""; // Change to false if the country does not have English food
const hasSpanishFood = "burritos"; // Change to true if the country has Spanish food

if (
  (speaksEnglish === "usa" ||
    speaksEnglish === "ireland" ||
    speaksEnglish === "uk") &&
  hasLessThan10MillionPeople < 10 &&
  (hasEnglishFood === "burger" || hasEnglishFood === "pizza")
) {
  console.log("English country is right for John!");
} else if (
  (speaksSpanish === "spain" ||
    speaksSpanish === "mexico" ||
    speaksSpanish === "argentina") &&
  hasLessThan10MillionPeople < 10 &&
  (hasSpanishFood === "tacos" || hasSpanishFood === "burritos")
) {
  console.log("Spanish country is right for John!");
} else {
  console.log("Your country is not suitable for John.");
}

const countries = [
  {
    name: "USA",
    language: "English",
    population: 331,
    food: ["Burgers", "Pizza"],
  },
  {
    name: "Spain",
    language: "Spanish",
    population: 7,
    food: ["Paella", "Tapas"],
  },
  {
    name: "Canada",
    language: "English",
    population: 38,
    food: ["Poutine", "Maple Syrup"],
  },
  {
    name: "Mexico",
    language: "Spanish",
    population: 126,
    food: ["Tacos", "Burritos"],
  },
  {
    name: "Ireland",
    language: "English",
    population: 5,
    food: ["Irish Stew", "Soda Bread"],
  },
];
const johnsCountries = [];
for (const country of countries) {
  // Check if the country speaks English or Spanish
  const speaksEnglish = country.language === "English";
  const speaksSpanish = country.language === "Spanish";

  // Check if the population is less than 10 million
  const hasLessThan10MillionPeople = country.population < 10;

  // Check if the food options include Spanish or English food
  const hasSpanishFood =
    country.food.includes("Paella") || country.food.includes("Tapas");
  const hasEnglishFood =
    country.food.includes("Burgers") || country.food.includes("Pizza");

  // If the country meets all conditions, add it to John's countries
  if (
    (speaksEnglish || speaksSpanish) &&
    hasLessThan10MillionPeople &&
    (hasSpanishFood || hasEnglishFood)
  ) {
    johnsCountries.push(country.name);
  }
}

console.log("John's potential countries to live in:", johnsCountries);
// Output: John's potential countries to live in: [ 'Ireland' ]

//  to check your age>18 than check your height height > 5.10.If both true show any message(I can sit in exam) in the console?

function checkEligibility(age, height) {
  if (age > 18) {
    if (height > 5.1) {
      console.log("I can sit in the exam");
    } else {
      console.log("You are not tall enough to sit in the exam");
    }
  } else {
    console.log("You are not old enough to sit in the exam");
  }
}

checkEligibility(20, 5.11); // Change the values to test different scenarios

// Another way to check eligibility using variables

const age = 20; // Change to your age
const height = 5.11; // Change to your height in feet

if (age > 18) {
  if (height > 5.1) {
    console.log("I can sit in the exam");
  } else {
    console.log("You are not tall enough to sit in the exam");
  }
} else {
  console.log("You are not old enough to sit in the exam");
}

// Another way to check eligibility using a single if statement

if (age > 18 && height > 5.1) {
  console.log("I can sit in the exam");
} else if (age <= 18) {
  console.log("You are not old enough to sit in the exam");
} else {
  console.log("You are not tall enough to sit in the exam");
}

// Another way to check eligibility using a ternary operator

const canSitExam =
  age > 18 && height > 5.1
    ? "I can sit in the exam"
    : age <= 18
    ? "You are not old enough to sit in the exam"
    : "You are not tall enough to sit in the exam";
console.log(canSitExam);

// Another way to check eligibility using a switch statement

switch (true) {
  case age > 18 && height > 5.1:
    console.log("I can sit in the exam");
    break;
  case age <= 18:
    console.log("You are not old enough to sit in the exam");
    break;
  default:
    console.log("You are not tall enough to sit in the exam");
}

// Another way to check eligibility using a while loop

let checkAge = age;
let checkHeight = height;

while (checkAge > 18 && checkHeight > 5.1) {
  console.log("I can sit in the exam");
  break;
}
// if (checkAge <= 18) {
//   console.log("You are not old enough to sit in the exam");
// } else {
//   console.log("You are not tall enough to sit in the exam");
// }

// Another way to check eligibility using a do-while loop

let checkAgeDoWhile = age;
let checkHeightDoWhile = height;

do {
  if (checkAgeDoWhile > 18 && checkHeightDoWhile > 5.1) {
    console.log("I can sit in the exam");
  } else if (checkAgeDoWhile <= 18) {
    console.log("You are not old enough to sit in the exam");
  } else {
    console.log("You are not tall enough to sit in the exam");
  }
  break;
} while (false);

// Another way to check eligibility using a forEach loop

const eligibilityChecks = [
  { age: 20, height: 5.11 },
  { age: 17, height: 5.5 },
  { age: 19, height: 4.9 },
];

eligibilityChecks.forEach(({ age, height }) => {
  if (age > 18 && height > 5.1) {
    console.log("I can sit in the exam");
  } else if (age <= 18) {
    console.log("You are not old enough to sit in the exam");
  } else {
    console.log("You are not tall enough to sit in the exam");
  }
});

// Another way to check eligibility using a map function

const eligibilityResults = eligibilityChecks.map(({ age, height }) => {
  if (age > 18 && height > 5.1) {
    return "I can sit in the exam";
  } else if (age <= 18) {
    return "You are not old enough to sit in the exam";
  } else {
    return "You are not tall enough to sit in the exam";
  }
});

console.log(eligibilityResults);

// Output: Array of eligibility results based on the checks
// Output: [
//   'I can sit in the exam',
//   'You are not old enough to sit in the exam',
//   'You are not tall enough to sit in the exam'
// ]

// Another way to check eligibility using a filter function

const eligibleForExam = eligibilityChecks.filter(
  ({ age, height }) => age > 18 && height > 5.1
);
console.log("Eligible for exam:", eligibleForExam);

// Output: Eligible for exam: [ { age: 20, height: 5.11 } ]

// Another way to check eligibility using a reduce function

const eligibilitySummary = eligibilityChecks.reduce(
  (summary, { age, height }) => {
    if (age > 18 && height > 5.1) {
      summary.canSit.push("I can sit in the exam");
    } else if (age <= 18) {
      summary.notOldEnough.push("You are not old enough to sit in the exam");
    } else {
      summary.notTallEnough.push("You are not tall enough to sit in the exam");
    }
    return summary;
  },
  { canSit: [], notOldEnough: [], notTallEnough: [] }
);
console.log("Eligibility Summary:", eligibilitySummary);

// Output: Eligibility Summary: {
//   canSit: [ 'I can sit in the exam' ],
//   notOldEnough: [ 'You are not old enough to sit in the exam' ],
//   notTallEnough: [ 'You are not tall enough to sit in the exam' ]
// }

// Create two variables grade and passingYear.Check if your grade == "A" and passingYear < 2020 with the help of ternary operator(Not allowed to use any logical operator).If both condition true print on console Qualify. Otherwise Fail

const grade = "Ab"; // Change to your grade
const passingYear = 2019; // Change to your passing year

const result =
  grade === "A" ? (passingYear < 2020 ? "Qualify" : "Fail") : "Fail";
console.log(result); // Output: Qualify or Fail based on the conditions

// Another way to check the conditions using an if statement

if (grade === "A") {
  if (passingYear < 2020) {
    console.log("Qualify");
  } else {
    console.log("Fail");
  }
} else {
  console.log("Fail");
}
