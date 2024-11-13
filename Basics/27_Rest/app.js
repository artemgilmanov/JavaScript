/**
 * Rest is the arguments object.
 * Available inside every function.
 * It's an array like object:
 *  - has a length property;
 *  - does not have array methods like push/pop;
 * Contains all the arguments passed to the function.
 * Not available inside of arrow functions!
 */

/**
 * Example 1
 */
function sum_1() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function sum_2() {
  // Uncaught TypeError: arguments.reduce is not a function
  return arguments.reduce((total, currentValue) => {
    return (total += currentValue);
  });
}

function sum_3() {
  const argsArr = [...arguments];
  return argsArr.reduce((total, currentValue) => {
    return (total += currentValue);
  });
}

/**
 * Example 2
 */
function fullName_1(first, last) {
  console.log(arguments);
  console.log(first);
}

const fullName_2 = (first, last) => {
  console.log(arguments);
};

/**
 * Example 3
 */
function sum_4(...nums) {
  console.log(nums);
}

function sum_5(...nums) {
  return nums.reduce((total, currentValue) => {
    return (total += currentValue);
  });
}

/**
 * Example 4
 */
function fullName_3(first, last, ...titles) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}

/**
 * Example 5
 */
const multiply_3 = (...nums) => {
  nums.reduce((total, currentValue) => total * currentValue);
};
