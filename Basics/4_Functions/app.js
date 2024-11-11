/**
 * Example 1
 */
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
  for (let i = 1; i <= numRolls; i++) {
    rollDie();
  }
}

/**
 * Example 2
 */
function greet(name) {
  console.log(`Hi, ${name}!`);
}

/**
 * Example 3
 */
function sum(x, y) {
  console.log(x + y);
}

function divide(a, b) {
  console.log(a / b);
}

/**
 * Example 4
 */
function add(x, y) {
  return x + y;
}

/**
 * Example 5
 */
function isPurple(color) {
  return color.toLowerCase() == 'purple';
}

/**
 * Example 6
 */
function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
}

/**
 * Example 7
 */
function isValidPassword(password, username) {
  const threshold = 8;
  const isShort = password.length < threshold;
  const containSpace = password.indexOf(' ') !== -1;
  const containUsername = password.includes(`${username}`);

  return !(isShort || containSpace || containUsername);
}

/**
 * Example 8
 */
function avg(arr) {
  if (arr !== undefined) {
    const arrLength = arr.length;
    let sum = 0;

    if (arrLength === 0) return 0;

    for (let num of arr) {
      sum += arr[i];
    }

    return sum / arrLength;
  }

  return 0;
}

/**
 * Example 9
 * A pangram is a sentence that contains every letter of the alphabet, like:
 * "the five boxing wizards jump quickly"
 */
function isPangram(sentence) {
  if (sentence !== undefined && sentence.length !== 0) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
      if (lowerCased.indexOf(char) === -1) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * Example 10
 */
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];

  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  return { suit: pick(values), value: pick(suits) };
}
