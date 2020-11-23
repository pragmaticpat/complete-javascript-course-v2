'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

console.log('Most parameters are empty');
createBooking('LJ123');
console.log('Providing passeger count and ticket price');
createBooking('LJ123', 2, 800);
createBooking('LJ123', 5, 700);
console.log('Providing passenger count but no ticket value');
createBooking('LJ1235', 5);
console.log('Cannot skip parameters...');
createBooking('lksjhdf', undefined, 7);
*/
/*
const flight = 'LH234';
const patrick = {
  name: 'Patrick Sullivan',
  passport: 2586746453,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LKH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2586746453) {
    alert('check in');
  } else {
    alert('wrong passport! 😿');
  }
};

// checkIn(flight, patrick);
// console.log(flight);
// console.log(patrick);

const flightNum = flight;
const passenger = patrick;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() + 1000000000000);
};

newPassport(patrick);
checkIn(flight, patrick);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callback functions all the time - basically the same as pub sub / event handling in C#, etc
const high5 = function () {
  console.log('🙌');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Patrick');
greet('Hello')('Jonas');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Arrow function!');
*/

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
//   },
// };

// lufthansa.book(335, 'patrick');
// lufthansa.book(337, 'glenn');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 400, 'Caitlin');
// book.call(lufthansa, 349, 'Laura Cooper');

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'SA',
//   bookings: [],
// };

// book.call(swiss, 334, 'Laura Cooper');

// const flightData = [583, 'George Cooper'];

// book.apply(swiss, flightData); // not really used any more since .call exists, and can spread the array params
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23); //partial application
// bookEW23('patrick');
// bookEW23('martha');

// // with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //manally apply "this" since "this" would otherwise just be the eventhandler / button

// // partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (price) {
//     return price + price * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(1000));
// console.log(addVAT2(2000));
// console.log(addVAT2(3000));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};
