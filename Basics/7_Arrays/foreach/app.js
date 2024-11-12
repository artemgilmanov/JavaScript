/**
 * Example 1
 */
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num) {
  console.log(num * 2);
});

function printTripple(n) {
  console.log(n * 3);
}

numbers.forEach(printTripple);

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

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

books.forEach(function (book, idx) {
  console.log(`${idx}-${book.title}`);
});
