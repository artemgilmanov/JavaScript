/**
 * Operator Presedence
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
 *
 * && operator takes presedece over
 * result false
 */
let x = 7;
console.log('x == 7 || (x === 3 && x > 10)', x == 7 || (x === 3 && x > 10));
/**
 * but it is possible to regroup the presedence
 */
console.log('(x == 7 || x === 3) && x > 10', (x == 7 || x === 3) && x > 10);
/**
 * NOT (!) has higher presedence than && and ||
 * && has higher presence than ||
 */
