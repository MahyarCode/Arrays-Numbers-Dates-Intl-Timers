'use strict';
// TODO Numbers:

console.log('------------ Converting and Checking Numbers ------------');
console.log('23 === 23.0: ', 23 === 23.0);
// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log('0.1 + 0.2: ', 0.1 + 0.2);
console.log('0.1 + 0.2 === 0.3: ', 0.1 + 0.2 === 0.3);

console.log('------------ Conversion ------------');
console.log('Number("23"): ', Number('23'));
console.log('+"23": ', +'23');

console.log('------------ Parsing ------------');
console.log("Number.parseInt('30px', 10): ", Number.parseInt('30px', 10));
console.log("Number.parseInt('e23', 10): ", Number.parseInt('e23', 10));
console.log('Number.parseInt("  2.5rem  "): ', Number.parseInt('  2.5rem  '));
console.log(
  'Number.parseFloat("  2.5rem  "): ',
  Number.parseFloat('  2.5rem  ')
);

console.log('------------ Check if value is NaN ------------');
console.log('Number.isNaN(20) :', Number.isNaN(20));
console.log("Number.isNaN('20') :", Number.isNaN('20'));
console.log("Number.isNaN(+'20X') :", Number.isNaN(+'20X'));
console.log('Number.isNaN(23 / 0) :', Number.isNaN(23 / 0));

console.log('------------ Checking if value is number ------------');
console.log('Number.isFinite(20) : ', Number.isFinite(20));
console.log("Number.isFinite('20') : ", Number.isFinite('20'));
console.log("Number.isFinite(+'20X') : ", Number.isFinite(+'20X'));
console.log('Number.isFinite(23 / 0) : ', Number.isFinite(23 / 0));
console.log('Number.isInteger(23) : ', Number.isInteger(23));
console.log('Number.isInteger(23.0) : ', Number.isInteger(23.0));
console.log('Number.isInteger(23.2) : ', Number.isInteger(23.2));
console.log('Number.isInteger(23 / 0) : ', Number.isInteger(23 / 0));

console.log('------------ Generating Random Number ------------');
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(10, 20));

// Rounding integers
console.log('------------ Rounding integers ------------');
console.log('Math.round(23.3): ', Math.round(23.3));
console.log('Math.round(23.9): ', Math.round(23.9));

console.log('Math.ceil(23.3): ', Math.ceil(23.3));
console.log('Math.ceil(23.9): ', Math.ceil(23.9));

console.log('Math.floor(23.3): ', Math.floor(23.3));
console.log("Math.floor('23.9'): ", Math.floor('23.9'));

console.log('Math.trunc(23.3): ', Math.trunc(23.3));

console.log('Math.trunc(-23.3): ', Math.trunc(-23.3));
console.log('Math.floor(-23.3): ', Math.floor(-23.3));

console.log('------------ Rounding decimals ------------');
console.log(
  '(2.7).toFixed(0): ',
  (2.7).toFixed(0),
  ' ',
  typeof (2.7).toFixed(0)
);
console.log(
  '(2.2).toFixed(0): ',
  (2.2).toFixed(0),
  ' ',
  typeof (2.2).toFixed(0)
);
console.log(
  '(2.5).toFixed(0): ',
  (2.5).toFixed(0),
  ' ',
  typeof (2.5).toFixed(0)
);
console.log(
  '(2.7).toFixed(3): ',
  (2.7).toFixed(3),
  ' ',
  typeof (2.7).toFixed(3)
);
console.log(
  '(2.345).toFixed(2): ',
  (2.345).toFixed(2),
  ' ',
  typeof (2.345).toFixed(2)
);
console.log(
  '+(2.345).toFixed(2): ',
  +(2.345).toFixed(2),
  ' ',
  typeof +(2.345).toFixed(2)
);
