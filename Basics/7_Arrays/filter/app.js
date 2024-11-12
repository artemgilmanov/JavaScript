/**
 * Creates a new array with all elements that pass the test implemend by the provided function.
 */

/**
 * Example 1
 */
const nums = [34, 5, 36, 17, 38, 49];
const odds = nums.filter((n) => n % 2 === 1);
const evens = nums.filter((n) => n % 2 === 0);

/**
 * Example 2
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

const goodBooks = books.filter((b) => b.rating > 4.3);

const fantasyBooks = books.filter((b) => b.genres.includes('fantasy'));

const shortForm = books.filter(
  (b) => b.genres.includes('short stories') || b.genres.includes('essays')
);

const query = 'The';
const results = books.filter((b) => {
  const title = b.title.toLowerCase();
  return title.includes(query.toLowerCase());
});
