'use strict';

let inhaber_1 = {
  vorname: 'Vorname',
  nachname: 'Nachname',
  geschlecht: 'Geschlecht',
  alter: 18,
};
console.log(inhaber_1);

let konto_1 = {
  iban: 'DE12154585623',
  bic: 'WESD450',
  kontostand: 3500,
  aktiv: true,
  inhaber_1,
};
console.log(konto_1);

// Werte Auslesen: Dot-Notation
let wert_1 = konto_1.iban;
let wert_2 = konto_1.inhaber_1.alter;
console.log(
  `IBAN: ${wert_1}
    Alter: ${wert_2}`
);

// Werte Auslesen: Bracket-Notation
let wert_3 = konto_1['bic'];
let wert_4 = konto_1['inhaber_1']['vorname'];
console.log(
  `BIC: ${wert_3}
  Vorname: ${wert_4}`
);

console.log(`${konto_1['kontostand']} bevore`);
konto_1['kontostand'] = 1000;
console.log(`${konto_1['kontostand']} after`);

let eigenschaft_iban = 'iban';
let wert_5 = konto_1[eigenschaft_iban];
console.log(wert_5);

/*
[vorname, nachname] = inhaber_1;
console.log(`${vorname} ${nachname}`);
*/
