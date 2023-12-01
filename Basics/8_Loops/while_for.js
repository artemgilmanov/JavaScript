'use strict';

let x = 0;
while (x < 5) {
  console.log(`While: X: ${x}`);
  x++;
}

let z = 0;
while (z < 10) {
  z++;
  if (z == 5) {
    continue;
  } else if (z == 7) {
    break;
  }

  console.log(`While: Z: ${z}`);
}

let personen = ['Peter', 'Mia', 'Max'];
for (let i = 0; i < personen.length; i++) {
  console.log(`For I: ${personen[i]}`);
}

let obst = ['Apfel', 'Birnen', 'Bananen'];
let gemuse = ['Möhren', 'Sellerie', 'Kohl'];
let brot = ['Graubrot', 'Schwarzbrot'];

let waren = [obst, gemuse, brot];

for (let i = 0; i < waren.length; i++) {
  for (let j = 0; j < waren[i].length; j++) {
    console.log(waren[i][j]);
  }
}
