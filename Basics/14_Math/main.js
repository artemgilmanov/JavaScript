'use strict';

console.log(Math);

let a = Math.PI * Math.pow(2, 2);
console.log(a);

let a_gerundet = Math.round(a);
console.log(a_gerundet);

let a_abgerundet = Math.floor(a);
console.log(a_abgerundet);

let a_aufgerundet = Math.ceil(a);
console.log(a_aufgerundet);

// return string
let a_nachkommerstellen = a.toFixed(3);
// work around
let a_integer = parseInt(a_nachkommerstellen);
let a_float = parseFloat(a_nachkommerstellen);
console.log(a_integer);
console.log(a_float);