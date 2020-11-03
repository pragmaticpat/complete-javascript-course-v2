// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = 23;
// const test = 'hello';

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1980));

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };

//   // console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;

//   return kelvin;
// };

// console.log(measureKelvin());

/**
 * Coding challenge 1 in this section ...
 */

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = arrTemperatures => {
  let message = '';

  for (let index = 0; index < arrTemperatures.length; index++) {
    message += ` ... ${arrTemperatures[index]}°C in ${index + 1} days`;
  }

  console.log(message);
};

printForecast(temp1);
printForecast(temp2);
