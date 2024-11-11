let exampleNumber = 0;
/**
 * for loop: Example 1
 */
console.log(`Example: ${exampleNumber++}`);
for (let num = 0; num <= 20; num++) {
  console.log(`${num}x${num}:`, num * num);
}

/**
 * for loop: Example 2
 */
console.log(`Example: ${exampleNumber++}`);
const examScores = [98, 77, 84, 91, 57, 66];
for (let i = 0; i <= examScores.length - 1; i++) {
  console.log(`examScores ${i}:`, examScores[i]);
}

/**
 * for loop: Example 3
 */
console.log(`Example: ${exampleNumber++}`);
for (let a = 0; a <= 10; a++) {
  console.warn('OUTER LOOP:', a);
  for (let b = 10; b >= 0; b -= 2) {
    console.log('INNER LOOP:', b);
  }
}

/**
 * for loop: Example 4
 */
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];
let sum = 0;
console.log(`Example: ${exampleNumber++}`);
for (let a = 0; a < gameBoard.length; a++) {
  let row = gameBoard[a];
  console.warn(row);
  for (let b = 0; b < row.length; b++) {
    sum += row[b];
    console.log(row[b]);
  }
}
console.log('Total sum:', sum);

/**
 * while loop: Example 5
 */
console.log(`Example: ${exampleNumber++}`);
for (let a = 0; a <= 5; a++) {
  console.warn(a);
}
let b = 0;
while (b <= 5) {
  console.log(b);
  b++;
}

/**
 * while loop: Example 6
 */
console.log(`Example: ${exampleNumber++}`);

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
  //   console.log('guess:', guess);
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congrats you win!');

/**
 * while loop: Example 7
 */
console.log(`Example: ${exampleNumber++}`);

const anotherTarget = Math.floor(Math.random() * 10);
let anotherGuess = Math.floor(Math.random() * 10);

while (true) {
  if (target === guess) {
    break;
  }
  console.log(`Target: ${anotherTarget} Guess: ${anotherGuess}`);
  anotherGuess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${anotherTarget} Guess: ${anotherGuess}`);
console.log('Congrats you win!');

/**
 * for of: Example 8
 */
const subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for (i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}
console.log(`Example: ${exampleNumber++}`);
for (let sub of subreddits) {
  console.log(sub);
}

/**
 * for of: Example 9
 */
console.warn(`Example: ${exampleNumber++}`);
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let a = 0; a < magicSquare.length; a++) {
  let row = magicSquare[a];
  sum = 0;
  for (let b = 0; b < row.length; b++) {
    sum += row[b];
  }
  console.log(`${row} summed to ${sum}`);
}

console.warn(`Example: with for ... of...`);
for (let row of magicSquare) {
  sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

/**
 * for of: Example 10
 */
console.warn(`Example: ${exampleNumber++}`);

const movieReviews = {
  Arrival: '9.5',
  Alien: '9.0',
  Amelie: '8.0',
  Coraline: '7.5',
  Amadeus: '10.0',
};

// it is not allowed to itirate through properties
try {
  for (let review of movieReviews) {
    console.log(review);
  }
} catch (error) {
  console.log(error);
}
// but possible to itirate through values
console.warn(`Values`);
for (let values of Object.values(movieReviews)) {
  console.log(values);
}
// or keys
console.warn(`Keys`);
for (let values of Object.keys(movieReviews)) {
  console.log(values);
}

/**
 * for in: Example 11
 */
console.warn(`Example: ${exampleNumber++}`);
const jeopardzWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 30000,
  battleOfTheDecades: 1000,
};

let total = 0;
for (let prop in jeopardzWinnings) {
  console.log(prop);
  console.log(jeopardzWinnings[prop]);
  total += jeopardzWinnings[prop];
}
console.log('Total:', total);

/**
 * for in: Example 12
 */
console.warn(`Example: ${exampleNumber++}`);

for (let key in [12, 66, 70]) {
  console.log(key);
}
