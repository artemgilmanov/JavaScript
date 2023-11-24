'use strict';

let inhaber_1 = {
  vorname: 'Vorname',
  nachname: 'Nachname',
  geschlecht: 'Geschlecht',
  alter: 18,
};

let konto_1 = {
  iban: 'DE12154585623',
  bic: 'WESD450',
  kontostand: 3500,
  aktiv: true,
  inhaber_1,
};

const konto_ausgeben = function (konto_1) {
  console.log(
    `${konto_1.inhaber_1.vorname} ${konto_1.inhaber_1.nachname}, hat IBAN ${konto_1.iban}`
  );
};

konto_ausgeben(konto_1);
