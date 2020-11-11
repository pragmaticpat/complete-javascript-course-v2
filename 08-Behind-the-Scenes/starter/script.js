'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true; //function scope since var
      // const millenial = true; //block scope since ES6 style declaration
      const firstName = 'Stephen';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'New output!!!';
    }

    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3)); // won't work with strict mode, but WILL work without strict mode
  }

  printAge();

  return age;
}
const firstName = 'Patrick';
console.log(calcAge(1992));
*/

// Hoisiting with variables
/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Patrick';
let job = 'teacher';
const year = 1990;

// Functions
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;

// let and const do not create properties on the window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
/*
// "this" keyword
// function call for this = undefined, unless in sloppy mode, in which case it's window

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1990);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //points to this of parent scope... which is window in this case
};

calcAgeArrow(990);

const patrick = {
  birthYear: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);
  },
};

patrick.calcAge();

const matilda = {
  birthYear: 2017,
};

matilda.calcAge = patrick.calcAge; //method borrowing
matilda.calcAge();

const f = patrick.calcAge;
f();
*/

/*
var firstName = 'Matilda';

const patrick = {
  // not a code block, this is an object literal
  firstName: 'Patrick',
  birthYear: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);

    const self = this; // self or that

    // solution 1
    // const isMillenial = function () {
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    //   // // console.log((this.birthYear >= 1981) & (this.birthYear <= 1996));
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
      // // console.log((this.birthYear >= 1981) & (this.birthYear <= 1996));
    };
    isMillenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
    console.log(this);
  },
};

patrick.greet();
patrick.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments); // arguments doesn't exist on arrow functions
  return a + b;
};

addArrow(2, 3);
*/

/*
//PRIMITIVES
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'patrick',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(me);
console.log(friend);
*/

// pritimitves
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log(jessica);
console.log(marriedJessica);

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'james', 'jennifer'],
};

const jessicaCopy = Object.assign({}, jessica2); // shallow copy, not a deep clone
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('albert');
jessicaCopy.family.push('jason');
console.log(jessica2);
console.log(jessicaCopy);
