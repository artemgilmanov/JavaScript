/**
 * Spread syntax allows an iterable such as an array to be expanded
 * in places where zero or more arguments (for function calls) or
 * elements (for array literals) are expected, or an object expression
 * to be expanded in places where zero or more key-values pairs
 * (for object literals) are expected.
 */

/**
 * Example 1
 * Spread in method
 */
const nums_1 = [45, 23, 34, 7, 5];
const max_1 = Math.max(45, 23, 34, 7, 5);

/**
 * Example 2
 * Spread in method
 */
const nums_2 = [45, 23, 34, 7, 5];
const max_2 = Math.max(...nums_2);

/**
 * Example 3
 * Spread in array
 */
const cephalopods = [
  'dumbo octopus',
  'humboldt squid',
  'flamboyant cuttlefish',
];
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
const inverts = [...cnidaria, ...gastropods, ...cephalopods];

// create a new array with another reference
const cephCopy = [...cephalopods];
console.log(cephalopods === cephCopy);

/**
 * Example 3
 * Spread in object
 */
const feline = {
  legs: 4,
  family: 'Felidae',
};

const canine = {
  furry: true,
  family: 'Caninae',
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

// the order of merged objects matter
const catDog = {
  ...canine,
  ...dog,
};
