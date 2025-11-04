'use strict';
// TODO Slice: (doesn't change the original array)
const arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log('arr1: ', arr1);
console.log('arr1.slice(2): ', arr1.slice(2));

// TODO Splice: (it mutates the original array)
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log('arr2: ', arr2);
console.log('arr2.splice(2): ', arr2.splice(2));

// TODO Reverse: (it mutates the original array)
const arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log('arr3: ', arr3);
console.log('arr3.reverse(): ', arr3.reverse());

// TODO Concat:
const arr4 = ['a', 'b', 'c', 'd', 'e'];
const arr5 = ['f', 'g', 'h', 'i', 'j'];

const letters = arr4.concat(arr5);
// const letters = [...arr4, ...arr5]

console.log('letters: (arr4.concat(arr5))', letters);

// TODO Join:
console.log('letters.join(" - "): ', letters.join(' - '));

// TODO At:
const arr6 = [23, 11, 56];
console.log('arr6[-1]: ', arr6[-1]); // undefined
console.log('arr6.at(-1)', arr6.at(-1)); // pick the item from the right
// arr6.at(-1) === arr6[arr6.length - 1]

// NOTE "At" method also used for strings:
const str1 = 'mahyar';
console.log('str1: ', str1);
console.log('str1.at(2): ', str1.at(2));
console.log('str1.at(-2): ', str1.at(-2));

// TODO foreach method
console.log('------ For method -------');

const arr7 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, movement] of arr7.entries()) {
  if (movement > 0) {
    console.log(`${index + 1}. arr7 deposited: ${movement}`);
  } else {
    console.log(`${index + 1}. arr7 Withdrew: ${movement}`);
  }
}
//////////// OR ///////////////
console.log('------ ForEach method -------');

arr7.forEach(function (movement, index, array) {
  console.log(
    `${
      movement > 0
        ? index + 1 + '. arr7 deposited: ' + movement
        : index + 1 + '. arr7 Withdrew: ' + movement
    }`
  );
  // // if (movement > 0) {
  // //   console.log(`${index + 1}. arr7 deposited: ${movement}`);
  // // } else {
  // //   console.log(`${index + 1}. arr7 Withdrew: ${movement}`);
  // // }
});

// DESC forEach is definitely easier to use

// NOTE you cannot use 'break' and 'continue' statement in forEach loop !

// TODO forEach for Maps
console.log('------ ForEach method in MAP -------');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, entireMap) {
  console.log(`currencies: ${key}: ${value}`);
});

// TODO forEach for Sets
console.log('------ ForEach method in SET -------');

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function (value, _, entireSet) {
  console.log(`currenciesUnique: ${value}: ${value}`);
});

// TODO Map method: it creates a new array. So, you should save it in a new variable.
console.log('------ Map method -------');

const arr8 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const newArr8 = arr8.map(function (value) {
  return value * 2;
});

// const newArr8 = arr8.map((value, index) => value * 2)
console.log('Arr8: ', arr8);
console.log('newArr8: ', newArr8);

// TODO Filter method: it creates a new array. So, you should save it in a new variable.
console.log('------ Filter method -------');

const arr9 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const newArr9 = arr9.filter(value => value > 0);
console.log('Arr9: ', arr9);
console.log('newArr9: ', newArr9);

// TODO Reduce method: it convert the array to a single value.
console.log('------ Reduce method -------');

const arr10 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const newArr10 = arr10.reduce(function (accumulator, current, index, array) {
//   console.log(
//     `accumulator: ${accumulator}, current: ${current}, index: ${index}`
//   );
//   return accumulator + current;
// }, 0);

const newArr10 = arr10.reduce((acc, cur) => acc + cur, 0);
console.log('Arr10: ', arr10);
console.log('newArr10: ', newArr10);

// TODO Find method: returns the first element which satisfies the condition

console.log('------ Find method -------');

const arr11 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const newArr11 = arr11.find(value => value < 0);

console.log('Arr11: ', arr11);
console.log('newArr11.find(value => value < 0): ', newArr11);

// DESC this is the best example of how 'Find' method is best use :

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// DESC here Find is used to see the exact account detail of a person
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log('Object found: ', account);

// // for (const account of accounts) {
// //   if (account.owner === 'Jessica Davis') {
// //     console.log(account);
// //   }
// // }

// TODO FindIndex method: returns the index of the first element which satisfies the condition
console.log('------ FindIndex method -------');

// we want to delete Jessica Davis's account ===> index = 1
// DESC finding part
const accountIndex = accounts.findIndex(acc => acc.owner === 'Jessica Davis');
console.log('Jessica Davis"s index: ', accountIndex); //= 1
// DESC deleting part
accounts.splice(accountIndex, 1);
console.log('Jessica is deleted: ', accounts);

// TODO FindLast method: returns the LAST element which satisfies the condition
console.log('------ FindLast method -------');

const arr12 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const new12 = arr12.findLast(value => value < 0);

console.log('arr12: ', arr12);
console.log('new12: ', new12);

// TODO FindLastIndex method: returns the LAST index which satisfies the condition
console.log('------ FindLastIndex method -------');

const arr13 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const new13 = arr13.findLastIndex(value => value < 0);

console.log('arr13: ', arr13);
console.log('new13: ', new13);

// TODO includes method: returns true or false if an element is meeting the condition ( equality ).
console.log('------ includes method -------');

const arr14 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const new14 = arr14.includes(-400);
console.log('arr14: ', arr14);
console.log('arr14.includes(-400): ', new14);

// TODO some method: returns true or false if some elements are meeting the condition.
console.log('------ Some method -------');
const arr15 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const new15 = arr15.some(value => value > 500);

console.log('arr15: ', arr15);
console.log('arr15.some(value => value > 500): ', new15);

// TODO every method: returns true or false if all elements are meeting the condition.
console.log('------ Every method -------');

const arr16 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const new16 = arr16.every(value => value > 0);

console.log('arr16: ', arr16);
console.log('arr16.every(value => value > 0): ', new16);

// TODO flat method: turn multi dimension array into one.
console.log('------ Flat method -------');

const arr17 = [[1, 2, 3], [4, 5], [6], [7, 7, 8, 9]];
const newArr17 = arr17.flat();

console.log('arr17: ', arr17);
console.log('arr17.flat(): ', newArr17);

// DESC for the following array, we should set value for flat which is the amount of dimension it goes deep
const arr18 = [[[1], [2, 3]], [4, [5]], [6], [7, [7, [8]], 9], 10, 11];
const newArr18 = arr18.flat(3);

console.log('arr18: ', arr18);
console.log('arr18.flat(2): ', newArr18);

// TODO flatMap method: turn multi dimension array into one.
console.log('------ FlatMap method -------');

const arr19 = accounts;
const newArr19 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);

const newArr19Map = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);

console.log('arr19: ', arr19);
console.log('newArr19 ', newArr19);
console.log('newArr19Map ', newArr19Map);

// TODO Sort method: turn multi dimension array into one.
console.log('------ Sort method -------');

console.log('- String -');

const owners = ['jonas', 'mahyar', 'zach', 'adam'];
console.log('owners: ', owners);
console.log('owners.sort(): ', owners.sort());

console.log('- Numbers -');

const arr20 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const newArr20 = arr20.sort();
const newArr20Sorted = arr20.sort((a, b) => a - b);
console.log('arr20: ', arr20);
console.log('newArr20: arr20.sort() ', newArr20);
console.log('newArr20Sorted: arr20.sort((a, b) => a - b) ', newArr20Sorted);
