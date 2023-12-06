'use strict';

let mein_set = new Set();
console.log(mein_set);

mein_set.add('Test');
mein_set.add('Test');

mein_set.add(13);
mein_set.add(13);

mein_set.add([]);
mein_set.add([]);

mein_set.add(() => {});
mein_set.add(() => {});

console.log(mein_set);

console.log(mein_set.has('Test'));
console.log(mein_set.has(13));
console.log(mein_set.has([]));
console.log(mein_set.has(() => {}));

console.log(mein_set.size);
mein_set.delete('Test');
console.log(mein_set.size);

mein_set.clear();
console.log(mein_set);
