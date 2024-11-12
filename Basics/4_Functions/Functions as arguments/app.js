/**
 * Example 1
 */
function callThreeTimes(f) {
  f();
  f();
  f();
}

function cry() {
  console.log("BOO HOO I'M SO SAD!");
}

function rage() {
  console.log('I HATE EVERYTHING!');
}

/**
 * Example 2
 */
function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 4);

/**
 * Example 3
 */
function pickOne(f1, f2) {
  let rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}
