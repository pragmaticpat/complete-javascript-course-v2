'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log('I can drive');

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const calcAge2 = birthYear => 2037 - birthYear;

// const age2 = calcAge2(1991);
// console.log(age2);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// }

// console.log(yearUntilRetirement(1991, 'John 🎉'));
// console.log(yearUntilRetirement(1980, 'Bob'));

// /**
//  * coding challenge - gymnastic team averages
//  */

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return 'Dolphins';
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return 'Koalas';
//   } else {
//     return 'Neither team';
//   }
// }

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// console.log(`${checkWinner(avgDolphins, avgKoalas)} are the winners! 🏆`);


// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);

// console.log(`${checkWinner(avgDolphins, avgKoalas)} are the winners! 🏆`);

// /**
//  * Coding Challenge 2 updated
//  */

// console.log('Begin of coding challenge...');

// const calcTip = bill => {
//   if (bill >= 50 && bill <= 300) {
//     return .15 * bill;
//   } else {
//     return .2 * bill;
//   }
// }

// const bills = [125, 555, 44];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   console.log(`For a  bill of ${bills[i]}, the tip is ${calcTip(bills[i])}`);
//   totals.push(bills[i] + calcTip(bills[i]));
// }

// console.log('Totals...');
// console.log(totals);

const jim = {
  firstName: 'Jim',
  lastName: 'Morrison',
  age: 2020 - 1950,
  job: 'musician',
  friends: ['Robby', 'Fans', 'Manager'],
  bestFriend: 'Robby'
};

console.log(jim);
const nameKey = 'Name';
console.log(jim['first' + nameKey]);
console.log(jim['last' + nameKey]);

const insterestedIn = prompt('What do you want to know about Jim? Choose between \n firstName \n lastName \n age');

if (jim[insterestedIn]) {
  console.log(jim[insterestedIn]);
} else {
  console.log('Wrong request! Choose again from  \n firstName \n lastName \n age');
}

// Challenge - name has # friends, and his best friend is

console.log(`${jim.firstName} has ${jim.friends.length} friends, and his best friend is ${jim.bestFriend}`);