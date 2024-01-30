var expense = {
  type: 'Dusiness',
  amount: '$45 USD',
};

/*
var type = expense.type;
var amount = expense.amount;
*/
// ES6

const { type, amount } = expense;

///////////////////////////////

var savedFiles = {
  extension: 'jpg',
  name: 'repost',
  size: 14040,
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}.`;
}

fileSummary(savedFiles);

///////////////////////////////

const companies = ['Google', 'Facebook', 'Uber'];
// to discructure elements []
const [name, ...rest] = companies;
// to discructure property {}
const { length } = companies;
console.log(length);

///////////////////////////////

const companies_2 = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' },
];

const [{ location }] = companies_2;
console.log(location);

///////////////////////////////

const Google = {
  locations_g: ['Mountain View', 'New York', 'London'],
};

// not te best case, difficult to read
const {
  locations_g: [location_g],
} = Google;
console.log(location_g);

///////////////////////////////

function signup({ username, password, dateBirth, city }) {
  //create new user
}

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'maemail',
  dateBirth: '1/1/1990',
  city: 'New York',
};

signup(user);

///////////////////////////////

const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

points.map(([x, y]) => {
  return { x, y };
});

///////////////////////////////

/*
The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  
Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  
Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}
*/

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}

///////////////////////////////

/*
The 'classes' variable holds an array of arrays, 
where each array represents a single class that a student is enrolled in.  
Convert this array of arrays into an array of objects, 
where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  
Use array destructuring and the map helper.

An array for a class has the form [subject, time, teacher]

The resulting data structure should 
look something like the following:

const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
*/

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher}
});

///////////////////////////////

/*
This one is probably the hardest exercise in the entire course!  
Use array destructuring, recursion, and the rest/spread operators 
to create a function 'double' that will return a new array with 
all values inside of it multiplied by two.  Do not use any array helpers! 
Sure, the map, forEach, or reduce helpers would make this extremely easy 
but give it a shot the hard way anyways :)

Input:
double([1,2,3])

Output
[2,4,6]

Hint: Don't forget that with recursion you must add a base case 
so you don't get an infinite call stack.  
For example, if 'const [ number, ...rest ] = numbers' and number is 
undefined do you need to keep walking through the array?

const numbers = [1, 2, 3];

function double() {
    
}
*/
const numbers = [1, 2, 3];

function double([first, ...rest]) {
    // Base case: if the array is empty, 
    //return an empty array
    if (first === undefined) {
      return [];
    }
  
    // Multiply the first element by 2 
    //and concatenate with the result of the 
    //recursive call on the rest of the array
    return [first * 2, ...double(rest)];
  }