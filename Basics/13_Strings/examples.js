// Template string

function getMessage() {
  const year = new Date().getFullYear();
  return `The year is ${year}`;
}

getMessage();

/**
 * Refactor the function to use template strings
 * 
 * function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}
 */

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

/**
 * Refactor the function to use template strings
 * function fullName(firstName, lastName) {
  return firstName + lastName;
}
 */

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
