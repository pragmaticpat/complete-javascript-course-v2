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
// 3. {} is linked to a prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = { name: 'jay' };
console.log(jonas instanceof Person);
console.log(jay instanceof Person);
