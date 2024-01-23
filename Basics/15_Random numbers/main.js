'use strict';

console.log(Math.floor(Math.random() * (12 + 1)));

const min = 40;
const max = 60;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomNumber(min, max));
