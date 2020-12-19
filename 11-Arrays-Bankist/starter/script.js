'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterBegin', html);
    // containerMovements.insertAdjacentHTML('beforeEnd', html);
  });
};

const createUserName = userName => {
  return userName
    .toLocaleLowerCase()
    .split(' ')
    .map(namePart => namePart[0])
    .join('');
};

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, movement) => acc + movement, 0);
  labelBalance.textContent = `${balance} €`;
};

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const debits = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(debits)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((interests, i, arr) => {
      console.log(arr);
      return interests >= 1;
    })
    .reduce((acc, interestDeposit) => acc + interestDeposit);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

calcPrintBalance(account1.movements);

accounts.forEach(account => {
  account.userName = createUserName(account.owner);
});

const userName = createUserName('Steven Thomas Williams');
// console.log(userName);

// console.log(accounts);

displayMovements(account1.movements);
// console.log('--- deposits ---');
// const deposits = movements.filter(mov => mov > 0); //preferred due to being chain-friendly
// console.log(deposits);
// // console.log(movements);

// // const depositsfor = [];
// // for (const mov of movements) {
// //   if (mov > 0) depositsfor.push(mov);
// // }
// // console.log(depositsfor);

// console.log('--- withdrawals ---');
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

/////////////////////////////////////////////////

// SLICE
// console.log('slicing');
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr);
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// console.log(arr.slice());
// console.log([...arr]); //either one works just fine - using slice is better for chaining

// // SPLICE - actually mutates the original array
// console.log('splicing...');
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// // Reverse, mutates the original array!
// arr = ['a', 'b', 'c', 'd', 'e'];

// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // concat - to join 2 arrays
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// // end of first arrays lecture

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // cannot interrupt control flow in a forEach
// movements.forEach((movement, i, arr) => {
//   if (movement > 0)
//     console.log(`Movement ${i + 1} was a deposit of ${movement}`);
//   else
//     console.log(`Movement ${i + 1} was a withdrawal of ${Math.abs(movement)}`);
// });

// // CAN use break and continue in forOf
// for (const [i, v] of movements.entries()) {
//   if (v > 0) console.log(`Movement ${i} was a deposit of ${v}`);
//   else console.log(`Movement ${i} was a withdrawal of ${Math.abs(v)}`);
// }

// Foreach with maps and sets
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, _, map) => {
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const juliaCorrected = dogsJulia.slice(1, -2);
//   [...juliaCorrected, ...dogsKate].forEach((dog, i) => {
//     if (dog < 3) console.log(`Dog ${i + 1} is still a puppy 🐶`);
//     else console.log(`Dog ${i + 1} is an adult, and is ${dog} years old`);
//   });
// };

// console.log('----  test data 1 ----');
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// checkDogs(julia, kate);

// console.log('----  test data 2 ----');
// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];
// checkDogs(julia2, kate2);

// const eurToUsd = 1.1;
// const movementsUsd = movements.map(movement => movement * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const arrUsd = [];
// for (const mov of movements) {
//   arrUsd.push(mov * eurToUsd);
// }

// console.log(arrUsd);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementDescriptions);

// console.log(movements);
// const balance = movements.reduce((acc, movement) => {
//   return acc + movement;
// }, 0);
// console.log(balance);

// // important to prepare yourself for functional paradigm, with map, filter, reduce

// // Maximum value
// console.log('---- max value ----');
// const maxMovement = movements.reduce(
//   (acc, movement) => (movement > acc ? movement : acc),
//   movements[0]
// );
// console.log(maxMovement);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanage = function (dogAges) {
//   const humanAges = dogAges
//     .map(age => (age > 2 ? 16 + age * 4 : age * 2))
//     .filter(age => age > 18)
//     .reduce((acc, age, _, arr) => acc + age / arr.length, 0); //ahh! I like this even better!
//   // return humanAges.reduce((acc, age) => acc + age) / humanAges.length;
//   // put this all into a single map-filter-reduce...
//   return humanAges;
// };

// console.log(calcAverageHumanage(testData1));
// console.log(calcAverageHumanage(testData2));

const euroToUsd = 1.1;

// Data Pipeline
const totalDeposits = movements
  .filter(mov => mov > 0)
  .map((mov, _, arr) => {
    // console.log(arr);
    return mov * euroToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDeposits);
