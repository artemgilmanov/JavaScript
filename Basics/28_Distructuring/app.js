/**
 * Example 1
 * Array distructuring.
 */
const raceResults = [
  'Eliud Kipchode',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Jared Ward',
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

const [gold, silver, bronze] = raceResults;

/**
 * Example 2
 */
const [winner, ...notWinners] = raceResults;

/**
 * Example 3
 * Object distructuring.
 */
const runner = {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya',
};

const { first, last } = runner;

// assign a new name
const { country: nation } = runner;

/**
 * Example 4
 * Nested object.
 */
const results = [
  { first: 'Eliud', last: 'Kipchoge', country: 'Kenya' },
  { first: 'Feyisa', last: 'Lilesa', country: 'Ethiopia' },
  { first: 'Galen', last: 'Rupp', country: 'United States' },
];

const [{ first: goldWinner }, { country }] = results;

/**
 * Example 5
 * Destructuring parameters.
 */
function print_1(person) {
  const { first, last, title } = person;
  console.log(`${first},${last},${title}`);
}

function print_2({ first, last, title }) {
  console.log(`${first},${last},${title}`);
}

/**
 * Example 6
 * Destructuring parameters.
 */
const response = ['HTTP/1.1', '200 OK', 'application/json'];

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
