'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this!! a function copy for each instance of Person
  this.calcAge = function () {
    console.log(2037 - birthYear);
  };
};

const jonas = new Person('Jonas', '1991');
console.log(jonas);

// 1. a new empty object is created
// 2. the function is called, this = {}
// 3. {} is linked to a prototype => Creates the "proto" property
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = { name: 'jay' };
console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  // this is how to implement very basic prototypal inheritance in JavaScript
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person)); //NOT!

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); //NOPE! because it's in the Person prototype

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // Object.prototype - top of the prototype chain
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 7, 3, 5, 4, 7, 6, 5, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  //this is generally not a good idea - this is like monkey-patching
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
