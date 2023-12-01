'use strict';

let mein_array = ['Peter', 'Mia', 'May'];

let mein_objekt = {
  name: 'Max',
  vorname: 'Musterman',
  alter: 26,
};

console.log(mein_array);
console.log(mein_objekt);

for (let e in mein_array) {
  console.log(e);
}
console.log('--------');

for (let e in mein_objekt) {
  console.log(e);
}
console.log('--------');

for (let w of mein_array) {
  console.log(w);
}
console.log('--------');

/*
for (let w of mein_objekt) {
  console.log(w);
}
*/

//bad practice
// for (let e in mein_objekt) {
//   console.log(mein_objekt[e]);
// }

for (let paar of Object.entries(mein_objekt)) {
  console.log(paar);
  //   for (let e of paar) {
  //     console.log(e);
  //   }
}
console.log('--------');

for (let e of Object.keys(mein_objekt)) {
  console.log(e);
}
console.log('--------');

for (let w of Object.values(mein_objekt)) {
  console.log(w);
}
console.log('--------');
