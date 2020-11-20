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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};

lufthansa.book(335, 'patrick');
lufthansa.book(337, 'glenn');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 400, 'Caitlin');
book.call(lufthansa, 349, 'Laura Cooper');

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 334, 'Laura Cooper');

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData); // not really used any more since .call exists, and can spread the array params
console.log(swiss);

book.call(swiss, ...flightData);
