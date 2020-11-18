'use strict';

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = new Set(gameEvents.values());
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
// total of minutes between, divided by number of events
let total = 0;
let prior = 0;
for (const [key, val] of gameEvents) {
  total += key - prior;
  prior = key;
}

console.log(
  `An event happened, on average, every ${total / gameEvents.size} minutes`
);

// 4
for (const [time, event] of gameEvents) {
  console.log(
    `${time > 45 ? '[SECOND HALF] ' : '[FIRST HALF] '} ${time}: ${event}`
  );
}

/** Maps */

// Setting multiple vals into a map
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again! 💩'],
]);

console.log(question);

// convert object to map via new Map(Object.entries(obj));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3; //Number(prompt('Your answer'));
console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
const rest = new Map();
rest.set('name', 'classico italiano');
rest.set(1, 'firenze, italy');
rest.set(2, 'lisbon, portugal');
// console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 12;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
console.log(rest);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.get(arr));
*/
/*
// Sets - unique lists
const orderSet = new Set(['pasta', 'pizza', 'pizza', 'pasta', 'pizza']);
console.log(orderSet);
console.log(new Set('Patrick'));
console.log(orderSet.size);
console.log(orderSet.has('mushrooms'));
console.log(orderSet.has('pizza'));
orderSet.add('garlic bread');
orderSet.add('garlic bread');
// orderSet.delete('pizza');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// main usecase for a set is to remove dups
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
console.log(staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set('Patrick').size);
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (let index = 0; index < game.scored.length; index++) {
  const player = game.scored[index];
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2
let oddsTotal = 0;
const odds = Object.entries(game.odds); // he used object.values(game.odds)

for (const [team, odd] of odds) {
  oddsTotal += odd;
}
console.log(`Average odds are ${oddsTotal / odds.length}`);

// 3
for (const [team, odd] of odds) {
  console.log(`Odd of victory for ${game[`${team}`] ?? 'a Tie'} is ${odd}`);
}

// 4
let scorers = {};
game.scored.forEach(player => {
  if (scorers[player]) scorers[player] += 1;
  else scorers[player] = 1;
});

console.log(scorers);
/*
const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literatls
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDeliver({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    //allows flexibility in param order
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, ...otherIngredients);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) openStr += `${day}, `;

console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}
*/
/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon);
}

// console.log(restaurant.openingHours.mon.open);
// with optional chaining
console.log(restaurant.openingHours.mon?.open); //only attempts to open if not undefined
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'patrick', email: 'none@none.net' }];

console.log(users[0]?.name ?? 'User array is empty');
*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
console.log([...menu.entries()]);
*/
/*
coding challenge 1
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [munich, dortmund] = game.players;
// 2
const [gk, ...fieldPlayers] = munich;
console.log(`Keeper is ${gk}`);
console.log(`Field Players are ${[...fieldPlayers]}`);
//3
const allPlayers = [...munich, ...dortmund];
console.log(allPlayers);
// 4
const [...playersFinal] = [...munich, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...playerNames) {
  const [goals] = [playerNames];
  for (let index = 0; index < goals.length; index++) {
    console.log(goals[index]);
  }
  console.log(`...for a total of ${goals.length} goals!`);
};

printGoals(...game.scored);

// 7
game.odds.team1 < game.odds.team2 && console.log('team1');
game.odds.team1 > game.odds.team2 && console.log('team2');
*/
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

// Nullish are Null and Undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
/*
// Short circuiting
console.log(3 || 'patrick');
console.log('' || 'patrick');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || null || '' || 0 || 'hello');

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'patrick');
console.log(7 && 'patrick');

console.log('Hello' && 23 && null && 'patrick');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinachachacha');
/*
restaurant.orderPizza('pepperoni', 'peppers', 'cheese', 'onions', 'olives');
restaurant.orderPizza('mushrooms');

restaurant.orderDeliver({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDeliver({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(...newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Join Arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables: strings, arrays, maps, sets... NOT objects
const str = 'Patrick';
const letters = [...str, ' ', 's'];
// console.log(letters);
// console.log(...str);

// // Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  ...restaurant,
  founder: 'Guiseppe',
  foundingYear: 1998,
};

console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'New Rest';
console.log(restaurantCopy);
console.log(restaurant);

// Spread operator unpacks, Rest operator packs

const [a, b, ...others] = [1, 2, 3, 4, 5]; //"Rest" because it takes the "rest" of the unused items from the destructring process
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  // doesn't include skipped elements!
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest in objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// functions
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });

  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
const x = [2, 65, 7, 3, 4, 5];
add(...x);
/** Destructuring objects
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating varibales
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // when starting with {, need to wrap in parens
console.log(a, b);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
 */
/*
// Chapter: Destructuring Arrays
const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// SECTION: Default Values - similar to optionals
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
