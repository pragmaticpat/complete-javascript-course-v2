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
  balance: 500,
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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movementsForDisplay = sort
    ? movements.slice().sort((a, b) => a - b)
    : movements;

  movementsForDisplay.forEach((mov, i) => {
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

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (acc, movement) => acc + movement,
    0
  );
  labelBalance.textContent = `${account.balance} €`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const debits = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(debits)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((interests, i, arr) => {
      return interests >= 1;
    })
    .reduce((acc, interestDeposit) => acc + interestDeposit);
  labelSumInterest.textContent = `${interest}€`;
};

accounts.forEach(account => {
  account.userName = createUserName(account.owner);
});

const userName = createUserName('Steven Thomas Williams');

// EVENT HANDLERS

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }!`;

    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    console.log(`${currentAccount.owner} is logging in...`);
    updateUI(currentAccount);
  }
});

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName
  ) {
    console.log(currentAccount, receiverAccount);
    console.log('transfer is valid!');
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  console.log(inputCloseUsername.value, Number(inputClosePin.value));
  if (
    inputCloseUsername?.value === currentAccount.userName &&
    Number(inputClosePin?.value) === currentAccount.pin
  ) {
    console.log(accounts);
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );

    // remove the account from the accounts list
    accounts.splice(index, 1);

    // hide the ui
    containerApp.style.opacity = 0;

    // clear fields
    inputClosePin.value = inputCloseUsername.value = '';

    console.log(accounts);
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, (sorted = !sorted));
});

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

// // Data Pipeline
// const totalDeposits = movements
//   .filter(mov => mov > 0)
//   .map((mov, _, arr) => {
//     // console.log(arr);
//     return mov * euroToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDeposits);

/* 
Coding Challenge #3

Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanage = dogAges =>
//   dogAges
//     .map(age => (age > 2 ? 16 + age * 4 : age * 2))
//     .filter(age => age > 18)
//     .reduce((acc, age, _, arr) => acc + age / arr.length, 0); //ahh! I like this even better!

// console.log('Here is the first test data set');
// console.log(calcAverageHumanage([5, 2, 4, 1, 15, 8, 3]));

// console.log('Here is the second test data set');
// console.log(calcAverageHumanage([16, 6, 10, 5, 6, 1, 4]));

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// // EQUALITY
// console.log(movements.includes(-130));

// // SOME: CONDITION
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // EVERY
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log('passing every...', account4.movements.every(deposit));
// console.log('passing some...', account4.movements.some(deposit));
// console.log('passing filter...', account4.movements.filter(deposit));

// 159
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // only goes one level deep

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov);
// console.log(overallBalance);

// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements) //flatmap only goes one level deep!
//   .reduce((acc, mov) => acc + mov);
// console.log(overallBalance2);

// 160

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // console.log(movements);
// // console.log(movements.sort());

// // return < 0, then a before b (keep order)
// // return > 0, then b before a (switch order)

// // ascending
// movements.sort((a, b) => a - b);
// console.log(movements);

// // descending
// movements.sort((a, b) => b - a);

// console.log(movements);

// 161
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
// // console.log(x.fill(1));
// console.log(x.fill(1, 3, 5));

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// // 100 random dice rolls
// const rolls = Array.from({ length: 100 }, () =>
//   Math.floor(Math.random() * 6 + 1)
// );
// console.log(rolls);

// labelBalance.addEventListener('click', () => {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );

//   console.log(movementsUI);
// });

// 164 : Coding Challenge
///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. ✅ Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. ✅ Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. ✅ Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. ✅ Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. ✅ Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. ✅ Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. ✅ Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. ✅ Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(d => {
  d.recommendedFood = Math.floor(d.weight ** 0.75 * 28);
});

const isEatingOkayAmount = dog =>
  dog.curFood < dog.recommendedFood * 1.1 &&
  dog.curFood > dog.recommendedFood * 0.9;

// 2, 3, 4, 7
const ownersEatTooMuch = dogs
  .filter(d => d.curFood > d.recommendedFood)
  .flatMap(d => d.owners);
console.log('too much', ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(d => d.curFood < d.recommendedFood)
  .flatMap(d => d.owners);
console.log('too little', ownersEatTooLittle);

console.log(`${ownersEatTooMuch.flat().join(' and ')}'s dogs eat too much!`);
console.log(
  `${ownersEatTooLittle.flat().join(' and ')}'s dogs eat too little!`
);

const ownersEatingOkayAmount = dogs.filter(isEatingOkayAmount);
console.log('okay amount', ownersEatingOkayAmount);

console.log(
  `${ownersEatingOkayAmount.flat().join(', ')}'s dogs eat an okay amount!`
);

// 5
console.log(
  `It is a ${dogs.some(
    d => d.recommendedFood === d.curFood
  )} statement that there is at least one dog eating the exact recommended daily food intake`
);

// 6
console.log(
  `It is a ${dogs.some(
    isEatingOkayAmount
  )} statement that there is at least one dog eating within the recommended range for daily food intake`
);

// 8
const sortedByRecommendedAmount = dogs
  .slice()
  .sort((cur, next) => cur.recommendedFood - next.recommendedFood);
console.log(sortedByRecommendedAmount);

console.log(dogs);
