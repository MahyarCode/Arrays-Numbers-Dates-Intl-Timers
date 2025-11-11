'use strict';

// TODO setTimeout: executes a callback function after given timeout (in milliseconds)
setTimeout(() => console.log('Hello World'), 1000);
console.log('Waiting... ');

setTimeout(() => console.log('waiting'), 3000);

setTimeout(
  (ingredient1, ingredient2) =>
    console.log(`here is your pizza with ${ingredient1} and ${ingredient2}`),
  5000,
  'olives',
  'spinach'
);

// TODO setInterval: executes a callback function in every given timeout
console.log('--------- create a cloak ---------');
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);
