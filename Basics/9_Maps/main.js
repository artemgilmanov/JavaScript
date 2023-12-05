'use strict';

let meine_map = new Map();
console.log(meine_map);

meine_map.set('Test', 'Wert zur Eigenschaft Test');
meine_map.set(13, 'Wert zur Eigenschaft 13');
meine_map.set([], 'Wert zur Eigenschaft []]');
meine_map.set(() => {}, 'Wert zur Eigenschaft Funktion]');
meine_map.set({}, 'Wert zur Eigenschaft Objekt]');
console.log(meine_map);

console.log(meine_map.get('Test'));
console.log(meine_map.get(13));
console.log(meine_map.get([]));
console.log(meine_map.get(() => {}));
console.log(meine_map.get({}));

console.log(meine_map.has('Test'));
console.log(meine_map.has(13));
console.log(meine_map.has([]));
console.log(meine_map.has(() => {}));
console.log(meine_map.has({}));

console.log(meine_map.size);

meine_map.delete('Test');
console.log(meine_map.size);

//meine_map.clear();

console.log(meine_map);
