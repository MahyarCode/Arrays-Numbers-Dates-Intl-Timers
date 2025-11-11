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

console.log('------------- Playing around with Dates -------------');
const future2 = new Date(2037, 10, 19, 15, 23, 5);
console.log('Number(future2): ', Number(future2));
console.log('+future2: ', +future2);

// DESC a function the calculate the difference between two dates:
const daysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

console.log(
  'daysPassed(): ',
  daysPassed(new Date(2037, 3, 13), new Date(2037, 3, 1))
);

console.log('------------- Internationalizing Dates -------------');
console.log('new Date(): ', new Date());
console.log(
  " new Intl.DateTimeFormat('en-US').format(new Date()): ",
  new Intl.DateTimeFormat('en-US').format(new Date()),
  'mm/dd/yyyy for en-US'
);
console.log(
  'for more options of date format, search "iso language code table"'
);

let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
console.log('options: ', options);
console.log(
  " new Intl.DateTimeFormat('en-US', options).format(new Date()): ",
  new Intl.DateTimeFormat('en-US', options).format(new Date())
);
