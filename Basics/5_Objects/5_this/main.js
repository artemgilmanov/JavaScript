'use strict';

let konto = {
  iban: 'DE12154585623',
  bic: 'WESD450',
  kontostand: 3500,
  aktiv: true,
  inhaber_1: {
    vorname: 'Vorname',
    nachname: 'Nachname',
    geschlecht: 'Geschlecht',
    alter: 18,
  },
  einzahlen(e) {
    this.kontostand += e;
  },
  abheben(a) {
    this.kontostand -= a;
  },
};

konto.einzahlen(500);
console.log(konto.kontostand);
