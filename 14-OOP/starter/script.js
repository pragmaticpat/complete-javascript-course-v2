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
