'use strict';

let date = new Date();
//console.log(date);

let currentTime = Date.now();
//console.log(currentTime);

let g = new Date(1991, 5, 14);
//console.log(g);

date.setFullYear(1991);
date.setMonth(5);
date.setDate(14);
date.setHours(9);
date.setMinutes(32);
date.setSeconds(16);
date.setMilliseconds(11);
console.log(date);

/*
console.log(date.getFullYear(1991));
console.log(date.getMonth(5));
console.log(date.getDate(14));
console.log(date.getHours(9));
console.log(date.getMinutes(32));
console.log(date.getSeconds(16));
console.log(date.getMilliseconds(11));
*/
let date_utc = new Date();
date_utc.setUTCFullYear(1991);
date_utc.setUTCMonth(5);
date_utc.setUTCDate(14);
date_utc.setUTCHours(9);
date_utc.setUTCMinutes(32);
date_utc.setUTCSeconds(16);
date_utc.setUTCMilliseconds(11);
console.log(date_utc);

let date_unix = new Date();
date_unix.setTime(15685570000000);
console.log(date_unix);

///////////////////////////////////

let de_DE = date.toLocaleDateString('de-DE');
let en_US = date.toLocaleDateString('en-US');
console.log(de_DE);
console.log(en_US);

///////////////////////////////////
// Timeouts and Intervals
///////////////////////////////////

console.log('Los!');
setTimeout(function () {
  console.log('Fertig!');
}, 2000);

// console.log('Start!');
// setTimeout('Console.log("Ready!")', 2000);

clearTimeout(1);

///////////////////////////////////

setInterval(function () {
  console.log('Eine Secunde ist um');
}, 1000);

clearInterval(1);
