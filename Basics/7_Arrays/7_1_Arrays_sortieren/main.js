'use strict';

let zahlen = [12, 23, 34, 77, 2, 32, 9, 55, 43, 11, 1];

let sortiert = zahlen.sort();
console.log(sortiert);

let neu_sortiert_inc = zahlen.sort((a, b) => {
  return a - b;
});
console.log(neu_sortiert_inc);

let neu_sortiert_dis = zahlen.sort((a, b) => {
  return b - a;
});
console.log(neu_sortiert_dis);
