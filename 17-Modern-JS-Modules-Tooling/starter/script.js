// importing module
// import { addToCart, quantity, totalPrice as price } from './shoppingCart.js';

// addToCart('pizza', 5);
// console.log(price, quantity);

console.log('importing module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, {
//   addToCart,
//   quantity,
//   totalPrice as price,
// } from './shoppingCart.js'; <<== avoid doing this! messy
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 25);
add('apples', 2);
console.log(cart);
