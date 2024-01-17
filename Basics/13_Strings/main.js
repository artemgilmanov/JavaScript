'use strict';

let s = 'Lorem shmorem etwas impressum.         ';

console.log(s.length);
console.log(s.indexOf('Lorem', 5));
console.log(s.lastIndexOf('Lorem'));
console.log(s.includes('etwas'));

console.log(s.toLocaleLowerCase());
console.log(s.toUpperCase());

console.log(s.trim());

console.log(s.repeat(5));

console.log(s.search('etwas'));
console.log(s.replace('etwas', 'bonbon'));

//////////Regex////////////

let regex = /i\w{4}/g;
console.log(s.search(regex));
console.log(s.replace(regex, 'bonbon'));
console.log(s.match(regex));
