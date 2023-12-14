// normal function
const add = function (a, b) {
  return a + b;
};

add(1, 2);

//ES6 -> arrow function
const addArrow = (a, b) => {
  let sum = a + b;
  return sum;
};

addArrow(1, 2);

// when there is only a line of code inside the function
// it is possible to avoid function body

const addArrowWithoutBody = (a, b) => a + b;

addArrowWithoutBody(1, 2);

///////////////////////////////////////////

const numbers = [1, 2, 3];
numbers.map((number) => 2 * number);

///////////////////////////////////////////
/*
  const ream = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

team.teamSummary();
 */

// TypeError: Cannot read property "teamName" of undefined

/*
  const ream = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this)); <---- SOLUTION 1
  },
};

team.teamSummary();
 */

/*
  const ream = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  var self = this; <---- SOLUTION 2
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${self.teamName}`;
    });
  },
};

team.teamSummary();
 */

// lexical this
const ream = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  },
};

team.teamSummary();

///////////////////////////////////////////

/*
The function below uses the 'function' keyword.  
There's nothing wrong with using the 'function' keyword 
here, but it might look a bit nicer if we refactor it to 
use the fat arrow syntax instead.  

Refactor the code below to use a fat arrow function.  
Remember the rules of fat arrow functions:

If the function has a single expression in its body, 
the curly braces and 'return' keyword can be removed
If the function has a single argument, the parentheses 
around the argument list can be removed

const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
 */

const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

///////////////////////////////////////////

/*
Arrow Functions Aren't Always a Solution
Arrow functions bind the value of 'this' 
to the surrounding context, and sometimes 
this isn't the behavior we expect.  The code 
below has an object that represents a users profile.  
The profile has a 'name' currently.  
Add another key to this object called 'getName'.  
'getName' should be a function that returns the 
profiles name, using 'this.name'.  Does the solution 
work with a fat arrow function or will you have to 
use a function keyword instead?

const profile = {
    name: 'Alex'
};
 */

const profile = {
  name: 'Alex',
  getName: function () {
    return this.name;
  },
};
