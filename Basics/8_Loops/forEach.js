'use strict';

let colors = ['red', 'blue', 'green'];
colors.forEach(function (color) {
  console.log(color);
});

let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
console.log(zahlen);

function adder(number) {
  sum += number;
}

/*
numbers.forEach(function(number){
  sum += number;
})
*/

zahlen.forEach(adder);
console.log(sum);
