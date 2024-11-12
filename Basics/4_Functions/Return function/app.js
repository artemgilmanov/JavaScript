/**
 * Example 1
 */
// const triple = multiplyBy(3);
// triple(5); //15

// const double = multiplyBy(2);
// double(8); //16

/**
 * Example 2
 */
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const halve = multiplyBy(0.5);
const double = multiplyBy(2);
const triple = multiplyBy(3);

/**
 * Example 3
 */
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);
const isNineties = makeBetweenFunc(1990, 2000);
