'use strict';

let produkte_array = ['Bananen', 'Apfel', 'Schokolade', 'Brot'];
console.log(produkte_array);

let produkte_objekt = { 0: 'Bananen', 1: 'Apfel', 2: 'Schokolade', 3: 'Brot' };
console.log(produkte_objekt);

let obst = ['Apfel', 'Birnen', 'Bananen'];
let gemuse = ['Möhren', 'Sellerie', 'Kohl'];
let brot = ['Graubrot', 'Schwarzbrot'];

let waren = [obst, gemuse, brot];
console.log(waren);

let auto_1 = {
  marke: 'Hyundai',
  model: 'i30 N',
  farbe: 'rot',
};

let auto_2 = {
  marke: 'Ford',
  model: 'XXL',
  farbe: 'yellow',
};

let autos = [auto_1, auto_2];
console.log(autos);

console.log(autos[0]['marke']);
console.log(autos[1]['model']);
console.log(autos[0].farbe);

let personen = ['Katja', 'Artem', 'Nastja', 'Seva'];
console.log(personen[0]);

personen.push('Henry');
console.log(personen);

personen.pop();
console.log(personen);

personen.unshift('Max');
console.log(personen);

personen.shift();
console.log(personen);

console.log(personen.includes('Seva'));
console.log(personen.includes('Artem', 2));

console.log(personen.indexOf('Seva'));
console.log(personen.indexOf('Artem', 2));
personen.push('Artem');
console.log(personen.indexOf('Artem'));
console.log(personen.lastIndexOf('Artem'));
