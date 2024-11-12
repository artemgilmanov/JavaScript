/**
 * Example 1
 */
const square_1 = function (x) {
  return x * x;
};

const square_2 = (x) => {
  return x * x;
};

/**
 * Example 2
 */
const isEven = (num) => {
  return num % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

/**
 * Example 3
 * with one parameter the brackets might be skipped
 */
const square_3 = (x) => {
  return x * x;
};

/**
 * Example 4
 * Implicit return
 * works only with a one expression to return
 */
const square_4 = (n) => n * n;

/**
 * Example 5
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles_1 = numbers.map(function (n) {
  return n * 2;
});

const double_2 = numbers.map((n) => {
  return n * 2;
});

const double_3 = numbers.map((n) => n * 2);

/**
 * Example 6
 */
const parityList_1 = numbers.map(function (n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
});

const parityList_2 = numbers.map((n) => {
  if (n % 2 === 0) return 'even';
  return 'odd';
});

const parityList_3 = numbers.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
