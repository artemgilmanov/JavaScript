/**
 * Example 1
 */
// function grumpus() {
//   alert('');
// }

// setTimeout(grumpus, 500);

/**
 * Example 2
 */
// setTimeout(function () {
//   alert('WELCOME!');
// }, 500);

/**
 * Example 3
 */
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  alert('WHY DID YOU CLICK ME!');
});
