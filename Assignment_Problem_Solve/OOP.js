/* 
    Use a constructor function to implement a Bike. A bike has a make and a speed property. The speed property is the current speed of the bike in km/h
    
        = Implement an accelerate method that will increase the bike's speed by 50, and log the new speed to the console
        = Implement a brake method that will decrease the bike's speed by 25, and log the new speed to the console
        
        = Create 2 'Bike' objects and experiment with calling accelerate and brake multiple times on each of them
        = Sample Data
            = Data car 1: bike1 going at 120 km/h
            = Data car 2: bike going at 95 km/h
    
    10.2: Re-create Question 1 But this time using ES6 class. 
*/

// Object Constructor Function
function Bike(make, speed) {
  this.bikeName = make;
  this.bikeSpeed = speed;
}

// Accelerate method
Bike.prototype.accelerate = function () {
  this.bikeSpeed += 50;
  console.log(
    `${this.bikeName} is increasing, going at ${this.bikeSpeed} km/h`
  );
  return this; // enable chaining
};

// brake method
Bike.prototype.brake = function () {
  this.bikeSpeed -= 25;
  console.log(
    `${this.bikeName} is decreasing, going at ${this.bikeSpeed} km/h`
  );
};

// create bike object
const bike1 = new Bike("Yamaha", 120);
const bike2 = new Bike("Suzuki", 95);

console.log(bike1); // Bike { bikeName: 'Yamaha', bikeSpeed: 120 }
console.log(bike2); // Bike { bikeName: 'Suzuki', bikeSpeed: 95 }

// Test accelerate and brake
bike1.accelerate().accelerate().accelerate(); // return this 170 , 220, 270
bike1.accelerate(); // 320
bike1.brake(); // 295
bike1.brake(); // 270

bike2.brake(); // 70
bike2.accelerate(); // 120
bike1.accelerate(); // 170

// ES6 class
class Bike1 {
  constructor(make, speed) {
    this.bikeName = make;
    this.bikeSpeed = speed;
  }

  accelerate() {
    this.bikeSpeed += 50;
    console.log(`${this.bikeName} is going at ${this.bikeSpeed} km/h`);
  }

  brake() {
    this.bikeSpeed -= 25;
    console.log(`${this.bikeName} is going at ${this.bikeSpeed} km/h`);
    return this; // enable chaining
  }
}

// Create Bike objects
const bike3 = new Bike1("Honda", 120);
const bike4 = new Bike1("R1 5", 95);

console.log(bike3); // Bike { bikeName: 'Yamaha', bikeSpeed: 120 }
console.log(bike4); // Bike { bikeName: 'Suzuki', bikeSpeed: 95 }

// Test accelerate and brake

bike3.accelerate(); // 170
bike3.brake(); // 145

bike3.brake().brake().brake(); // 120, 95, 70

bike4.brake(); // 70
bike4.accelerate(); // 120

// Guess the Output And Explain Why?
function Person(name) {
  this.name = name;
}
let me = new Person("John");

console.log(me.__proto__ == Person.prototype); // true
console.log(me.__proto__ == Object.prototype); // false
console.log(me.__proto__.__proto__ == Object.prototype); // true

// A new line before each log; A timestamp; A separator line for clarity

//  constructor Bike2 (){} same as
class Bike2 {
  constructor(name, speed) {
    this.bikeName = name;
    this.bikeSpeed = speed;
  }

  accelerator() {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`[${timeStamp}] --- Accelerate Action ---`);
    this.bikeSpeed += 50;
    console.log(`${this.bikeName} is going at ${this.bikeSpeed}`);
    console.log("----------------------------");
    return this;
  }
}

const bike5 = new Bike2("Yamaha", 120);

bike5.accelerator().accelerator().accelerator();

// Bike6.__proto__ refers to Function.prototype
// Bike6.__proto__.__proto__ refers to Object.prototype

// This means you’re attaching methods to Object.prototype, which is dangerous — it pollutes the entire JavaScript object system.
// Attaching methods to Object.prototype (via __proto__.__proto__) means every object in your app will inherit these methods
// and they will be available on all objects, which can lead to unexpected behavior and conflicts.

/*  this.logGroup = true 
      => Right inside the constructor, then every bike starts out in grouped log mode.That might not be what you want.
      => If you want normal logging by default (and only group logs when needed), then set: this.logGroup = false 

      => It means every time you create a new bike, that bike will have:
      a bikeName (e.g., "Yamaha")
      a bikeSpeed (e.g., 120)
      a logGroup set to false (indicating that it will not group logs by default)
*/

// To group the logs together in one block
function Bike6(bikeName, bikeSpeed) {
  this.bikeName = bikeName;
  this.bikeSpeed = bikeSpeed;
  this.logGroup = false; // Flag to control whether log output is grouped
}

Bike6.__proto__.__proto__.startLog = function (action = "ACTION") {
  const timeStamp = new Date().toLocaleTimeString();
  console.log(`\n[${timeStamp}] --- ${action} ---`);

  this.logGroup = true; // Turn on "grouped logging" mode
  return this; // Enable method chaining (e.g., startLog().accelerate())

  // You're turning on grouped logging mode (logGroup = true) and allowing chaining (return this), so multiple method calls behave like one log block.
};

Bike6.__proto__.__proto__.endLog = function () {
  console.log("----------------------------");
  this.logGroup = false; // Turn off grouped logging mode
  return this; // Continue allowing chaining
};

Bike6.__proto__.__proto__.accelerate = function () {
  this.bikeSpeed += 50;
  const message = `${this.bikeName} is going at ${this.bikeSpeed} km/h`;
  console.log(`\n${message}`);

  if (!this.logGroup) {
    //console.log("----------------------------");
  }
  return this; // Allow chaining again (e.g., accelerate().brake())
};

Bike6.__proto__.__proto__.brake = function () {
  this.bikeSpeed -= 25;
  const message = `${this.bikeName} is going at ${this.bikeSpeed} km/h`;
  console.log(`\n${message}`);

  if (!this.logGroup) {
    //console.log("----------------------------"); // Only print separator if not in grouped logging mode
  }
  return this;
};

const bike7 = new Bike6("Yamaha FZ", 1000);

bike7
  .startLog("Accelerate Action")
  .accelerate()
  .accelerate()
  .accelerate()
  .endLog();

bike7.startLog("Brake Action").brake().brake().brake().endLog();

bike7.accelerate().brake().accelerate().brake();

// Create constructor function inside Car class with three properties color , model , company
class Car {
  constructor(color, model, company) {
    this.carColor = color;
    this.carModel = model;
    this.carCompany = company;
  }

  engineMethod = function () {
    console.log(
      `This is a ${this.carColor} ${this.carModel} from ${this.carCompany}`
    );
  };
}

// Creating instances of the Car class
// Each instance represents a specific car with its own properties
// and methods defined in the Car class
// The engineMethod is an instance method that can be called on each car instance to display its details.
// The engineMethod is defined as an instance method using a function expression
// which allows it to access the instance properties (carColor, carModel, carCompany) using 'this'.
// This is a common pattern in JavaScript classes to define methods that operate on instance data.
// The Car class is a blueprint for creating car objects with specific properties and methods.

const car1 = new Car("Red", "Model S", "Tesla"); // instance of Car
car1.engineMethod(); // this is a Red Model S from Tesla
// engineMethod is instance method of Car class

const car2 = new Car("Blue", "Mustang", "Ford");
car2.engineMethod(); // this is a Blue Mustang from Ford

/* 
class  Car = {
constructor(){},
engineMethod  =  function(){ console.log("This is engine method of Car class"); }
}
   => when declare class not equal to class keyword
   => constructor where declare property there not use comma
*/

class CarCar {
  constructor() {}

  engineMethod = function () {
    console.log("This is engine method of Car class");
  };
}

const car3 = new CarCar();
car3.engineMethod(); // This is engine method of Car class

// Guess the Output and explain Why? And if there is any error How we can remove that error?

function Person(name, age) {
  this.name = name;

  this.age = age;

  this.brainMethod = function () {
    console.log("This is brain method of Person");
  };
}

/*Person.heartMethod = function () {
  console.log('This is heart method of Person');
};*/

// Person.heartMethod is not defined because it's not added to the prototype
// to access prototype methods, we need to add them to Person.prototype

Person.prototype.heartMethod = function () {
  console.log("This is heart method of Person");
};

let myself = new Person("john", 34);

myself.brainMethod();
myself.heartMethod();

console.log(Bike.prototype); // { accelerate: [Function (anonymous)], brake: [Function (anonymous)] }; The object where shared methods for all Bike instances are stored

console.log(bike1.__proto__); // { accelerate: [Function (anonymous)], brake: [Function (anonymous)] }; the prototype that the instance points to prototype of the Bike constructor function

console.log(bike1.__proto__ === Bike.prototype); // true; bike1's prototype is the same as Bike.prototype

/* What is difference between ** proto** and prototype property of Object? 
    
=> **proto** is an internal property of an object that points to its prototype, while **prototype** is a property of a constructor function that defines methods and properties shared by all instances created by that constructor.
    
    => **proto** is used to access the prototype chain, while **prototype** is used to define shared behavior for instances of a constructor function.
  
    prototype	(Function's property)
        => On constructor functions	
        => Used to define methods/properties for instances
        => It's a property that exists on constructor functions (like function Bike() {}).
        => Used to define shared methods or properties for all instances created by that constructor.

    __proto__ (Instance's property)	
        => On objects/instances	
        => Points to the object’s internal prototype (i.e., inheritance chain)
        => It exists on every object and points to its prototype object.
        => This is how inheritance works in JavaScript:
              --> bike1.__proto__ === Bike.prototype is true.
*/
function Plane() {}
Plane.prototype.fly = function () {
  console.log("The Plane is flying");
};
const plane1 = new Plane();

console.log(plane1.__proto__); // points to Plane.prototype
console.log(Plane.prototype); // the object with shared methods

console.log(plane1.__proto__ === Plane.prototype); // true

// create class of Person with properties name, age.
// Your main task is to add static method in that class of your choice ( e.g brainMethod)

// static methods are methods that are called on the class itself, not on instances of the class. They are defined using the static keyword and can be accessed without creating an instance of the class.

// [instance is an object created from the class] = {key: value, name: "John"} key defines the property and value defines the value of that property.
// here class is a blueprint for creating objects with specific properties and methods.

class Person11 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static brainMethod() {
    console.log("I belong to the species Home sapiens and I have a brain!");
  }
}

let person1 = new Person11("John", 30); // instance = value of class Person11
Person11.brainMethod(); // Static method: belongs to the class, not instances

//person1.brainMethod(); // TypeError: person1.brainMethod is not a function

class DipCar {
  constructor() {}
}

let dipCar = new DipCar(); // dipCar is an instance of the DipCar class, but it has no properties or methods defined yet.
// To add properties or methods to the DipCar class, you can define them inside the constructor or add them to the prototype.

console.log(DipCar.prototype.isPrototypeOf(DipCar)); // false // DipCar.prototype is not an instance of DipCar, so it cannot be a prototype of the class itself.

console.log(dipCar instanceof DipCar); // true; dipCar is an instance of the DipCar class, so it is an instance of the class.

console.log(DipCar.prototype.isPrototypeOf(dipCar)); // true;

/* DipCar.prototype is the prototype of dipCar, so it is a prototype of the instance.
      dipCar is an instance of DipCar, so its prototype is DipCar.prototype 
      The prototype of the instance (dipCar) is the same as the prototype of the class (DipCar).
      The prototype of the class is not the same as the instance, but the instance's prototype is the class's prototype.
*/

// console.log(dipCar.prototype.isPrototypeOf(DipCar)); // TypeError: dipCar.prototype is undefined

// console.log(dipCar.prototype.isPrototypeOf(dipCar)); // TypeError: dipCar.prototype is undefined; dipCar is an instance, not a constructor function, so it does not have a prototype property.

// console.log(DipCar.prototype.isPrototypeOf(DipCar.prototype)); // false; DipCar.prototype is not an instance of DipCar.prototype, so it cannot be a prototype of itself.

function carObject(name, model) {
  let car = Object.create(constructorObject);

  car.name = name;
  car.model = model;

  car.engineMethod = function () {
    console.log(`This is my car ${this.name} & model is ${this.model}`);
  };

  return car;
}

// let constructorObject = {
//   speak: function () {
//     return `This is my Car`;
//   },
// };

let constructorObject = {
  speak() {
    return `This is my Car`;
  },
};

let myCar = carObject("Honda", 2023); // myCar is an object created using the carObject function, which uses Object.create to inherit from constructorObject

console.log(myCar); // { name: 'Honda', model: 2023, engineMethod: [Function (anonymous)] }

myCar.engineMethod(); // This is my car Honda & model is 2023

console.log(myCar.speak()); // This is my Car; speak is a method from the constructorObject that myCar inherits from

console.log(myCar.__proto__); // { speak: [Function (anonymous)] }; myCar's prototype is constructorObject

console.log(myCar.__proto__ === constructorObject); // true; myCar's prototype is the same as constructorObject

console.log(myCar.__proto__ === Object.prototype); // false; myCar's prototype is constructorObject, not Object.prototype
