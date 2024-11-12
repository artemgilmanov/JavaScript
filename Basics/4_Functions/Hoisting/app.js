/**
 * Example 1
 */
console.log(animal);
// var will be hoisting, s that it will be called first
var animal = 'Tapir';

/**
 * Example 2
 * let and const are not hoisted
 */
//console.log(shrimp);
//let shrimp = 'Harlequin Shrimp';
//const shrimp = 'Harlequin Shrimp';

/**
 * Example 3
 * Functions are hoisted
 */
// howl();

// function howl() {
//   console.log('AWOOO');
// }

/**
 * Example 4
 * Function expression is not hoisted
 */
hoot();
var hoot = function () {
  console.log('HOO HOO');
};
