'use strict';

let person = {
  vonrame: 'Muss',
  nachname: 'Mustermann',
  alter: 18,
};

const person_verarbeiten = function (p) {
  return {
    n: `${p.vonrame} ${p.nachname}`,
    z: `${p.vonrame} ${p.nachname} (${p.alter} Jahre)`,
    b: `Hallo ${p.vonrame} ${p.nachname}`,
  };
};

console.log(person_verarbeiten(person));
