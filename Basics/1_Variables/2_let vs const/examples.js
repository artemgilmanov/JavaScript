// from ES6 no longer use var
// instead const and let

// var name="Jane";
// var title = "Software Engeneer";
// var hourlyWage = 40;

// ES6

const name = 'Jane';
let title = 'Software Engeneer';
let hourlyWage = 40;
// some time later ...

title = 'Senior Software Engeneer';
hourlyWage = 45;

////////////////////////////////////
// allows engeneers to understand
// what is going on on the code

function count(targetString) {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  for (var i = 0; targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }

  return number;
}

count('dsnunduendueduenfeufeufnefnef');

////////////////////////////////////

/*
Imagine that you are building an application to manage 
a user's Facebook profile.  A profile might have 
a 'name', 'age', and 'dateOfBirth'.
Declare three variables with these same names, 
making sure to use 'const' or 'let' depending on whether you expect the value to change over time.
*/

const name_2 = 'name';
const age = 'age';
const dateOfBirth = 'dateOfBirth';

////////////////////////////////////

/**
 * The following code uses 'var' instead of 'const' 
 * and 'let'. Refactor the function to use the new 
 * keywords.  Be sure to consider whether the variable 
 * should be declared using 'const' or 'let' depending 
 * on whether the variable gets reassigned or not.
 * 
 * var statuses = [ 
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
  ];
  var message = '';
  var currentCode = 'OK';
  
  for (var i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
      message = statuses[i].response;
    }
  }
 */

const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' },
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
