/**
 * Example 1
 * Create a new array from another
 */
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});

console.log(texts);
console.log(caps);

/**
 * Example 2
 * Create a new array from another
 */
const nums = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = nums.map(function (num) {
  return num * 2;
});

const numDetail = nums.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

const abbreves = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
});
