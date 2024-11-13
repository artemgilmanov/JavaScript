/**
 * Example 1
 */
function multiply_1(x, y) {
  if (typeof y === 'undefined') {
    y = 1;
  }
  return x * y;
}

function multiply_2(x, y = 1) {
  return x * y;
}

/**
 * Example 2
 */
function greeting(person, greeting = 'Hi') {
  return `${greeting}, ${person}`;
}
