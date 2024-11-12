/**
 * Find returns the first match only
 */
/**
 * Example 1
 */
let movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Douptfire',
  'Mr. Deeds',
];

const movie_1 = movies.find((movie) => {
  return movie.includes('Mrs.');
});

const movie_2 = movies.find((m) => m.indexOf('Mrs') === 0);

/**
 * Example 2
 */
const books = [
  {
    title: 'Good Omens',
    author: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
  },
  {
    title: 'Bone: The Complete Edition',
    author: ['Jeff Smith'],
    rating: 4.42,
  },
  {
    title: 'American Gods',
    author: ['Neil Gaiman'],
    rating: 4.11,
  },
  {
    title: 'A Gentleman in Moscow',
    author: ['Amor Towles'],
    rating: 4.36,
  },
];

const goodBook = books.find((book) => book.rating >= 4.3);
const neilBook = books.find((book) => book.author.includes('Neil Gaiman'));
