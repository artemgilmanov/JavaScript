const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

/////////////////////////////

const numbers = [1, 2, 3, 4];
let total = 0;

for (let number of numbers) {
  total += number;
}

/////////////////////////////

function* shopping() {
  //stuff on the sidewalk

  // walking down the sidewalk

  //go into the  store with cash
  const sfuffFromStore = yield 'cash';

  // walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return [sfuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // leaving our house
// walked into the store
// walking up and down the aisles...
// purchase our stuff

console.log(gen.next('groceries')); // leaving the store with groceries
console.log(gen.next('cleanClothes')); // leaving the store with cleanClothes and groceries

/////////////////////////////

function* colors_1() {
  yield 'red', yield 'blue', yield 'green';
}

const gen_1 = colors_1();
console.log(gen_1.next());
console.log(gen_1.next());
console.log(gen_1.next());
console.log(gen_1.next());

const myColors = [];
for (let color of colors_1()) {
  myColors.push(color);
}

console.log(myColors);

/////////////////////////////

const engeneeringTeam = {
  size: 3,
  department: 'Engeneering',
  lead: 'Jill',
  manager: 'Alex',
  engeneer: 'Dave',
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engeneer;
}

const names = [];
for (let name of TeamIterator(engeneeringTeam)) {
  names.push(name);
}

console.log(names);

/////////////////////////////
// Generator delegation

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};

const engeneeringTeam_2 = {
  testingTeam,
  size: 3,
  department: 'Engeneering',
  lead: 'Jill',
  manager: 'Alex',
  engeneer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engeneer;
    yield* this.testingTeam;
  },
};

const names_2 = [];
for (let name of engeneeringTeam_2) {
  names_2.push(name);
}

console.log(names_2);

/////////////////////////////

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', []),
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
  values.push(value);
}

console.log(tree);
console.log(values);
