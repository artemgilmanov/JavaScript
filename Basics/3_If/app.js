/**
 * Example 1
 */
let password = 'kitty';

if (password.length >= 6) {
  if (password.indexOf('') === -1) {
    console.log('Valid Password!');
  } else {
    console.log('Password is long enough, but connot cotain spaces.');
  }
} else {
  console.log('Passwort must be longer!');
}

/**
 * Example 2
 */
let mystery = '';

if (mystery) {
  console.log('True');
} else {
  console.log('False');
}

/**
 * Example 3
 */
// if (useLoggin) {
//   console.log('You are logged in!');
// } else {
//   console.log('You are not logged in!');
// }

/**
 * Example 4
 */
let loggedUser = null;

if (loggedUser) {
  console.log('You are logged in!');
} else {
  console.log('You are not logged in!');
}
