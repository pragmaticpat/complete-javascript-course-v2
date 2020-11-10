'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true; //function scope since var
      // const millenial = true; //block scope since ES6 style declaration
      const firstName = 'Stephen';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'New output!!!';
    }

    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3)); // won't work with strict mode, but WILL work without strict mode
  }

  printAge();

  return age;
}

const firstName = 'Patrick';
console.log(calcAge(1992));
