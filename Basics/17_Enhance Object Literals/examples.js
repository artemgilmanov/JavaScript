/*
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function (title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}
*/

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

/////////////////////////////////////////////////////////////////////////

/*
function saveFile() {
  $.ajax({ method: 'POST', url: url, data: data });
}
*/

function saveFile() {
  $.ajax({ url, data, method: 'POST' });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);

/////////////////////////////////////////////////////////////////////////

/*
Multiple Properties with Enhanced Notation
Refactor to use enhanced literal notation

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };
*/

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

/////////////////////////////////////////////////////////////////////////

/*
Condensing Code with Enhanced Literals
Refactor the following to use enhance object literal syntax

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields: fields };
*/

const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

/////////////////////////////////////////////////////////////////////////

/*
Refactor to use enhanced literal notation

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}
*/

const canvasDimensions = function (width, initialHeight) {
  const height = (initialHeight * 9) / 16;
  return {
    width,
    height,
  };
};

/////////////////////////////////////////////////////////////////////////

/*
Refactor to use enhanced literal notation

const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
*/

const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  },
};
