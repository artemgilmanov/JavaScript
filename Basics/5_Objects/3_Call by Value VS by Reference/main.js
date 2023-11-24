'use strict';

let meine_variable = 'meine_variable';
let mein_objekt = {
  zahl: 5000,
};

const meine_funktion = function (v, e) {
  v = 'V';
  e.zahl = 2500;
};

meine_funktion(meine_variable, mein_objekt);

console.log(meine_variable);
console.log(mein_objekt);
