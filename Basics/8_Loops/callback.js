'use strict';

/*
let funktion_1 = function () {
  console.log('Ich bin CallBack Funktion.');
};
*/

let funktion_2 = (f) => {
  console.log('Ich bin Funktion 2.');
  f();
};

funktion_2(function () {
  console.log('Ich bin CallBack Funktion.');
});
