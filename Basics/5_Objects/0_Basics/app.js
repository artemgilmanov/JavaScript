const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13',
  45: 'forty five',
};

console.log(fitBitData);
console.log(fitBitData.totalMiles);
console.log('typeof fitBitData.totalMiles', typeof fitBitData.totalMiles);
console.log('typeof fitBitData.totalSteps', typeof fitBitData.totalSteps);
console.log('ypeof fitBitData.avgGoodSleep', typeof fitBitData.avgGoodSleep);
//console.log('typeof fitBitData[45]', typeof fitBitData.45);
console.log('typeof fitBitData[45]', typeof fitBitData[45]);

/**
 * In this example a key is a number. In order to acess it one schould convert the key to a string.
 */
const numbers = {
  100: 'one hundred',
  16: 'sixteen',
};

console.log('numbers:', numbers);
console.log('numbers[100]:', numbers[100]);
console.log('numbers[16]:', numbers[16]);
console.log('numbers["100"]:', numbers['100']);
console.log('numbers["16"]:', numbers['16']);

/**
 * It is poosible to pass any string as a property of an object.
 * Be sure the property does exist.
 */
const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
};

console.log('palette.blue:', palette.blue);
console.log('palette.["blue"]:', palette['blue']);

let mysteryColor = 'yellow';
console.log('palette[mysteryColor]:', palette[mysteryColor]);
console.log('palette.mysteryColor:', palette.mysteryColor);

/**
 * Adding and updating properties.
 */
const userReviews = {};
console.log(`${userReviews}:`, userReviews);

userReviews['queenBee49'] = 4.0;
console.log(`${userReviews}:`, userReviews);

userReviews.mrSmith78 = 3.5;
console.log(`${userReviews}:`, userReviews);
