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
// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 25);
// add('apples', 2);
// console.log(cart);

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
