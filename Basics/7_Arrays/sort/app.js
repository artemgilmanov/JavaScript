/**
 * Sort mutates original array.
 */

/**
 * Example 1
 * Mutated sort.
 */
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
const ascSort = prices.sort((a, b) => a - b);
const descSort = prices.sort((a, b) => b - a);
/**
 * Example 2
 * Immutable sort.
 */
const ascSort_1 = prices.slice().sort((a, b) => a - b);
const descSort_1 = prices.slice().sort((a, b) => b - a);
/**
 * Ecample 3
 */
const books = [
  {
    title: 'Good Omens',
    author: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy', 'short stories'],
  },
  {
    title: 'Bone: The Complete Edition',
    author: ['Jeff Smith'],
    rating: 4.42,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'American Gods',
    author: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'graphic novel', 'fantacy'],
  },
  {
    title: 'A Gentleman in Moscow',
    author: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
];

books.sort((a, b) => a.rating - b.rating);
