// importing module
// import { addToCart, quantity, totalPrice as price } from './shoppingCart.js';

// addToCart('pizza', 5);
// console.log(price, quantity);

// console.log('importing module');
// // import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.totalPrice);

// // import add, {
// //   addToCart,
// //   quantity,
// //   totalPrice as price,
// // } from './shoppingCart.js'; <<== avoid doing this! messy
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 25);
add('apples', 2);
console.log(cart);

// Legacy module pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
// import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone); //allows us to disconnect from the source object

// parcel-specific hot module replacement
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';

  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const patrick = new Person('Patrick');

console.log('Patrick' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';

// polyfilling async functions
import 'regenerator-runtime/runtime';
