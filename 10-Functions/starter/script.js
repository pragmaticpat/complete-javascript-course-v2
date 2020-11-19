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
