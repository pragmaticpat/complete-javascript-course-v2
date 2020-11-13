'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDeliver: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    //allows flexibility in param order
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, ...otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
console.log([...menu.entries()]);

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
