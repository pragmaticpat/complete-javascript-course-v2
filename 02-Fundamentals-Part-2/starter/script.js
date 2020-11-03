'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive');

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const calcAge2 = birthYear => 2037 - birthYear;

const age2 = calcAge2(1991);
console.log(age2);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
}

console.log(yearUntilRetirement(1991, 'John 🎉'));
console.log(yearUntilRetirement(1980, 'Bob'));

/**
 * coding challenge - gymnastic team averages
 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return 'Dolphins';
  } else if (avgKoalas >= 2 * avgDolphins) {
    return 'Koalas';
  } else {
    return 'Neither team';
  }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

console.log(`${checkWinner(avgDolphins, avgKoalas)} are the winners! 🏆`);


avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log(`${checkWinner(avgDolphins, avgKoalas)} are the winners! 🏆`);

/**
 * Coding Challenge 2 updated
 */

console.log('Begin of coding challenge...');

const calcTip = amount => {
  if (amount >= 50 && amount <= 300) {
    return .15 * amount;
  } else {
    return .2 * amount;
  }
}

const bills = [125, 555, 44];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  console.log(`For a  bill of ${bills[i]}, the tip is ${calcTip(bills[i])}`);
  totals.push(bills[i] + calcTip(bills[i]));
}

console.log('Totals...');
console.log(totals);