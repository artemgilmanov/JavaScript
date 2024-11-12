/**
 * Every - tests whether all elements in the array pass the provided function.
 * It returns a Boolean value.
 */

/**
 * Example 1
 */
const words = ['dog', 'dig', 'log', 'bag', 'wad'];
const allThreeLetters = words.every((word) => word.length === 3);
const allEndsWithG = words.every((word) => {
  const last = word.length - 1;
  return word[last] === 'g';
});

/**
 * Every - similarly to every, but returns true if ANY
 * of the array elements pass the test function.
 */

/**
 * Example 1
 */
const someStartWithD = words.some((word) => word[0] === 'd');
const everyStartWithD = words.every((word) => word[0] === 'd');
