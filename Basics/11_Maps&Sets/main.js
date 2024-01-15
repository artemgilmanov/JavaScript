'use strict';

let meine_map = new Map();
meine_map.set('Wert_1', 'Wert der Wert_1');
meine_map.set(13, 'Wert der 13');
meine_map.set([], 'Wert der Array');
meine_map.set(function () {}, 'Wert der Funktion');
meine_map.set({}, 'Wert des Objekt');
console.log(meine_map);
console.log('-------');

let mein_set = new Set();
mein_set.add('Wert_1');
mein_set.add(13);
mein_set.add([]);
mein_set.add(function () {});
mein_set.add({});
console.log(mein_set);
console.log('-------');

meine_map.forEach(function (wert, eigenschaft) {
  console.log(wert);
  console.log(eigenschaft);
});
console.log('-------');

mein_set.forEach(function (wert) {
  console.log(wert);
});
console.log('-------');

for (let paar of meine_map) {
  console.log(paar);
}
console.log('-------');

for (let wert of mein_set) {
  console.log(wert);
}
console.log('-------');

for (let [eingeschaft, wert] of meine_map) {
  console.log(eingeschaft);
  console.log(wert);
}
console.log('-------');

console.log(meine_map.entries());
console.log(meine_map.values());
console.log(meine_map.keys());
console.log('-------');

for (let [key, value] of meine_map.entries()) {
  console.log(key);
  console.log(value);
}
console.log('-------');

for (let wert of meine_map.values()) {
  console.log(wert);
}
console.log('-------');

for (let wert of meine_map.keys()) {
  console.log(wert);
}
console.log('-------');
