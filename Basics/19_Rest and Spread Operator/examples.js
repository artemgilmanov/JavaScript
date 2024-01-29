//////////////////// Rest

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1, 2, 3, 4, 5]);

//////////////////// Spread

const defaultColors = ['red', 'green'];
const userFavouriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

console.log(['blue', ...defaultColors, ...userFavouriteColors, ...fallColors]);

////////////////////

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));

////////////////////

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};

////////////////////

/*
Refactor the following function to use the rest operator.  
Remember, an argument using the rest operator does *not* need to be called 'rest'.

function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
*/

function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
}

////////////////////

/*
Refactor the following to use the spread operator.

function join(array1, array2) {
  return array1.concat(array2);
}
*/

function join(array1, ...array2) {
  return array1.concat(...array2);
}

////////////////////

/*
Refactor the following to use the only the rest operator

function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/

function unshift(array, ...inputs) {
  return inputs.concat(array);
}
