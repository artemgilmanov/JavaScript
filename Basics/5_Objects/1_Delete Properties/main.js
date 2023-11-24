'use strict';

let auto = {
  marke: 'Tesla',
};

auto.marke = 'BMW';
console.log(auto.marke);

auto.model = 'Model X';
auto.farbe = 'rot';
console.log(auto);

delete auto.farbe;
console.log(auto);
