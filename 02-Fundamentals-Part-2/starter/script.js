// // // // 'use strict';

// // // // // let hasDriversLicense = false;
// // // // // const passTest = true;

// // // // // if (passTest) hasDriversLicense = true;

// // // // // if (hasDriversLicense) console.log('I can drive');

// // // // // const calcAge = function (birthYear) {
// // // // //   return 2037 - birthYear;
// // // // // }

// // // // // const calcAge2 = birthYear => 2037 - birthYear;

// // // // // const age2 = calcAge2(1991);
// // // // // console.log(age2);

// // // // // const yearUntilRetirement = (birthYear, firstName) => {
// // // // //   const age = 2037 - birthYear;
// // // // //   const retirement = 65 - age;
// // // // //   return `${firstName} retires in ${retirement}`;
// // // // // }

// // // // // console.log(yearUntilRetirement(1991, 'John 🎉'));
// // // // // console.log(yearUntilRetirement(1980, 'Bob'));

// // // // // /**
// // // // //  * coding challenge - gymnastic team averages
// // // // //  */

// // // // // const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // // // // const checkWinner = (avgDolphins, avgKoalas) => {
// // // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // // //     return 'Dolphins';
// // // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // // //     return 'Koalas';
// // // // //   } else {
// // // // //     return 'Neither team';
// // // // //   }
// // // // // }

// // // // // let avgDolphins = calcAverage(44, 23, 71);
// // // // // let avgKoalas = calcAverage(65, 54, 49);

// // // // // console.log(`${checkWinner(avgDolphins, avgKoalas)} are the winners! 🏆`);


// // // // // avgDolphins = calcAverage(85, 54, 41);
// // // // // avgKoalas = calcAverage(23, 34, 27);

// // // // // console.log(`${checkWinner(avgDolphins, avgKoalas)} are the winners! 🏆`);

// // // // // /**
// // // // //  * Coding Challenge 2 updated
// // // // //  */

// // // // // console.log('Begin of coding challenge...');

// // // // // const calcTip = bill => {
// // // // //   if (bill >= 50 && bill <= 300) {
// // // // //     return .15 * bill;
// // // // //   } else {
// // // // //     return .2 * bill;
// // // // //   }
// // // // // }

// // // // // const bills = [125, 555, 44];
// // // // // const totals = [];

// // // // // for (let i = 0; i < bills.length; i++) {
// // // // //   console.log(`For a  bill of ${bills[i]}, the tip is ${calcTip(bills[i])}`);
// // // // //   totals.push(bills[i] + calcTip(bills[i]));
// // // // // }

// // // // // console.log('Totals...');
// // // // // console.log(totals);

// // // // const jim = {
// // // //   firstName: 'Jim',
// // // //   lastName: 'Morrison',
// // // //   age: 2020 - 1950,
// // // //   job: 'musician',
// // // //   friends: ['Robby', 'Fans', 'Manager'],
// // // //   bestFriend: 'Robby'
// // // // };

// // // // console.log(jim);
// // // // const nameKey = 'Name';
// // // // console.log(jim['first' + nameKey]);
// // // // console.log(jim['last' + nameKey]);

// // // // const insterestedIn = prompt('What do you want to know about Jim? Choose between \n firstName \n lastName \n age');

// // // // if (jim[insterestedIn]) {
// // // //   console.log(jim[insterestedIn]);
// // // // } else {
// // // //   console.log('Wrong request! Choose again from  \n firstName \n lastName \n age');
// // // // }

// // // // // Challenge - name has # friends, and his best friend is

// // // // console.log(`${jim.firstName} has ${jim.friends.length} friends, and his best friend is ${jim.bestFriend}`);

// // // const jim = {
// // //   firstName: 'Jim',
// // //   lastName: 'Morrison',
// // //   birthYear: 1947,
// // //   job: 'musician',
// // //   friends: ['Robby', 'Fans', 'Manager'],
// // //   bestFriend: 'Robby',
// // //   hasDriverLicense: true,

// // //   calcAge: function () {
// // //     this.age = 2020 - this.birthYear;
// // //     return this.age;
// // //   },

// // //   getSummary: function () {
// // //     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
// // //   }
// // // };

// // // // console.log(jim['calcAge']());
// // // console.log(jim.calcAge());
// // // console.log(jim.age);
// // // console.log(jim.age);
// // // console.log(jim.age);

// // // //Challenge - summarize jim's info... 

// // // console.log(jim.getSummary());

// // /**Coding Challenge 3 - Objects */

// // const mark = {
// //   fullName: 'Mark Miller',
// //   mass: 78, // kg
// //   height: 1.69, //meters
// //   calcBMI: function () {
// //     this.BMI = this.mass / this.height ^ 2;
// //     return this.BMI;
// //   }
// // }

// // const john = {
// //   fullName: 'John Smith',
// //   mass: 92, // kg
// //   height: 1.95, //meters
// //   calcBMI: function () {
// //     this.BMI = this.mass / this.height ^ 2;
// //     return this.BMI;
// //   }
// // }

// // if (john.calcBMI() > mark.calcBMI()) {
// //   console.log(`John's BMI (${john.BMI}) is higher than Mark's (${mark.BMI})`);
// // } else {
// //   console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})`);
// // }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

/**
 * Final Coding Challenge - Tip Calculator
 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
  if (bill >= 50 && bill <= 300) {
    return .15 * bill;
  } else {
    return .2 * bill;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(`Average bill is ${calcAverage(bills)}`);
console.log(`Average tip is ${calcAverage(tips)}`);
console.log(`Average total is ${calcAverage(totals)}`);