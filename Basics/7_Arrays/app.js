/**
 * Example 1
 */
let shoppingList = ['Cheddar Cheese', '2% Milk'];

shoppingList[1] = 'Whole Milk';
shoppingList[2] = 'Ice cream';

shoppingList[shoppingList.length] = 'Tomatoes';

/**
 * Example 2
 * push add an item to the end of the list
 */
let topSongs = [
  'First Time Ever I Saw Your Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars',
];

topSongs.push('Fortunate Son');

/**
 * .pop() removes the item at the end of the array
 * return the removed value
 */

/**
 * shift() - removes an element at start of a list
 * unshift() - adds an element at the end of a list
 * dishesToDo.unshift('cereal bowl');
 */
let dishesToDo = ['big platter'];

/**
 * concat does not mutate any of the arrays it returns a new version
 */
let fruits = ['apple', 'banana'];
let vegetables = ['asparagus', 'onion'];
let meats = ['steak', 'chicket breast'];

console.log(fruits.concat(vegetables));
console.log(vegetables.concat(fruits));

let allFood = fruits.concat(vegetables, meats);

/**
 * includes returns true or false
 */
const searchParam = 'schrimp';
console.log(`allFood contains ${searchParam}:`, allFood.includes(searchParam));

/**
 * indexOf() - returns -1 if the index does not exist
 */
console.log(allFood.indexOf('carrot'));

/**
 * reverse() - reverse the sequence of elements in a collection
 */
let letters = ['A', 'B', 'C', 'D'];
console.log(letters);
letters.reverse();
console.log(letters);

/**
 * join() - join elements in a collection in a string
 */
console.log('allFood join():', allFood.join());
console.log('allFod join("-"):', allFood.join('-'));

/**
 * slice() - takes a certain part of a collection
 */
console.log('slice(0,3) of allFood:', allFood.slice(0, 3));
console.log('slice(3) of allFood:', allFood.slice(3));
console.log('slice(-3) of allFood:', allFood.slice(-3));

/**
 * splice() - removes, replaces, or replaced elements in a collection
 */
console.log('allFood.splice(1,2)', allFood.splice(1, 2));
console.log(
  "allFood.splice(1, 1, 'carrot', 'grapes')",
  allFood.splice(1, 1, 'carrot', 'grapes')
);
console.log('allFood:', allFood);

/**
 * sort()
 */
let people = ['mr.Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
console.log('people:', people);
people.sort();
console.log('people.sort:', people);

let nums = [1, 100, 20, 520, 3];
console.log('nums:', nums);
nums.sort();
console.log('nums.sort:', nums);
