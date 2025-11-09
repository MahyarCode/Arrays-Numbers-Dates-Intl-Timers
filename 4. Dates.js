'use strict';
const now = new Date();
console.log('new Date() ==> now:', now);
console.log(
  'new Date("Nov 09 2025 17:56:59") :',
  new Date('Nov 09 2025 17:56:59')
);
console.log(
  'new Date(2037, 10, 19, 15, 23, 5) :',
  new Date(2037, 10, 19, 15, 23, 5)
);

console.log('new Date(0): ', new Date(0));
console.log(
  'new Date(3 * 24 * 60 * 60 * 1000): "3 days after the time 0" ',
  new Date(3 * 24 * 60 * 60 * 1000)
);

// TODO Methods
console.log('------------- GET Methods in Dates -------------');
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log('future: ', future);
console.log('future.getFullYear(): ', future.getFullYear());
console.log('future.getMonth(): ', future.getMonth());
console.log('future.getDate(): ', future.getDate());
console.log(
  'future.getDay(): ',
  future.getDay(),
  '(day of the week - Sunday: 0 - Saturday: 6)'
);
console.log('future.getHours():', future.getHours());
console.log('future.getMinutes():', future.getMinutes());
console.log('future.getSeconds():', future.getSeconds());

console.log('future.toISOString():', future.toISOString());
console.log('future.getTime():', future.getTime());
console.log('new Date(2142242585000):', new Date(2142242585000), '= future');

console.log('Date.now(): ', Date.now());

console.log('------------- SET Methods in Dates -------------');
console.log('future.setFullYear(2040):', future.setFullYear(2040));
console.log('future:', future);
console.log('Like all GET methods, you can set everything to the new value');
