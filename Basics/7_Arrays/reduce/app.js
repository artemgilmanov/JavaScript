/**
 * Reduce - executes a reducer function on each element of the array, resulting in a single value.
 */
/**
 * Example 1
 */
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentValue) => {
  return total * currentValue;
});

/**
 * Example 2
 */
const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade_1 = grades.reduce((max, currentValue) => {
  if (currentValue > max) return currentValue;
  return max;
});

/**
 * Example 3
 */
const maxGrade_2 = grades.reduce((max, currentValue) => {
  return Math.max(max, currentValue);
});

const maxGrade_3 = grades.reduce((max, currentValue) =>
  Math.max(max, currentValue)
);

/**
 * Example 4
 */
const sum = [10, 20, 30, 40, 50].reduce((sum, currentValue) => {
  return sum + currentValue;
}, 1000);

/**
 * Example 5
 */
const votes = ['y', 'n', 'n', 'y', 'y', 'y', 'n', 'y', 'n'];

const result_1 = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++;
  } else {
    tally[val] = 1;
  }
  return tally;
}, {});

const result_2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

/**
 * Example 6
 */
const books = [
  {
    title: 'Good Omens',
    author: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 1.25,
    genres: ['fiction', 'fantasy', 'short stories'],
  },
  {
    title: 'Bone: The Complete Edition',
    author: ['Jeff Smith'],
    rating: 1.42,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'American Gods',
    author: ['Neil Gaiman'],
    rating: 2.11,
    genres: ['fiction', 'graphic novel', 'fantacy'],
  },
  {
    title: 'A Gentleman in Moscow',
    author: ['Amor Towles'],
    rating: 3.36,
    genres: ['fiction', 'historical fiction'],
  },
];

const summary = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
