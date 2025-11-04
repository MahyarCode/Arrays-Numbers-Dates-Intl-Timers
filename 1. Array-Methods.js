'use strict';
// TODO Slice: (doesn't change the original array)
const arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log('arr1.slice(2): ', arr1.slice(2));
console.log('arr1: ', arr1);

// TODO Splice: (it mutates the original array)
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log('arr2.splice(2): ', arr2.splice(2));
console.log('arr2: ', arr2);

// TODO Reverse: (it mutates the original array)
const arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log('arr3.reverse(): ', arr3.reverse());
console.log('arr3: ', arr3);

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
console.log(str1.at(2));

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
  if (movement > 0) {
    console.log(`${index + 1}. arr7 deposited: ${movement}`);
  } else {
    console.log(`${index + 1}. arr7 Withdrew: ${movement}`);
  }
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
