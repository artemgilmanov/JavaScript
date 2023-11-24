'use strict';

const person = {
  vorname: 'vorname',
  nachname: 'nachname',
  alter: 18,
};

person.vorname = 'Peter';
person.hobby = 'Laufen';

delete person.nachname;

console.log(person);
