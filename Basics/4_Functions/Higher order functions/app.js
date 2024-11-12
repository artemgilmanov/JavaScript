/**
 * Function is an object
 */
function add(x, y) {
  return x + y;
}

const substract = function (x, y) {
  return x - y;
};

const divide = function (x, y) {
  return x / y;
};

const multiply = function (x, y) {
  return x * y;
};

const operations = [add, substract, multiply, divide];

for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

const operationsOnObject = {
  add,
  substract,
  multiply,
  divide,
};
