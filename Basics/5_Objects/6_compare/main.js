'use strict';

const auto_1 = {
  marke: 'Tesla',
  modell: 'XXL',
  preis: 1800,
};

const auto_2 = {
  marke: 'BMW',
  modell: '8',
  preis: 5000,
};

const auto_3 = {
  marke: 'BMW',
  modell: '8',
  preis: 5000,
};

console.log(auto_1 == auto_2);
console.log(auto_2 == auto_3);
console.log(auto_3 == auto_3);
console.log({} == {});
console.log('---------');
console.log(auto_1 === auto_2);
console.log(auto_2 === auto_3);
console.log(auto_3 === auto_3);
// console.log({} === {});
console.log('---------');

const autos_vergleichen = function (a, b) {
  return a.marke == b.marke && a.modell == b.modell;
};

console.log(autos_vergleichen(auto_1, auto_2));
console.log(autos_vergleichen(auto_2, auto_3));
