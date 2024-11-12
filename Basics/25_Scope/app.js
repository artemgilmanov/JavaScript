/**
 * Function scope
 */
function helpMe() {
  let msg = "I'm in fire!";
  console.log(msg);
}
//console.log(msg); // not defined

/**
 * Block scope
 */
let bird = 'mandarin duck';
function birdWatch() {
  let bird = 'gilden pheasant';
  console.log(bird);
}
console.log(bird);

/**
 * Lexical scope
 */
function outer() {
  let hero = 'Black Panther';

  // declaration
  function inner() {
    let cryForHelp = `${hero}, please save me!`;
    console.log(cryForHelp);
  }

  //execution
  inner();
}
