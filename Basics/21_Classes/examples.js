// Prototype inherinces
/*
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'wroom';
};

const car = new Car({ title: 'Focus' });
console.log(car.drive());
console.log(car);
*/

/*
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'wroom';
};

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return 'beep';
};

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log('----');
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
*/

class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); // Car.constructor()
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const car = new Car({ title: 'Toyota' });
const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });

console.log('>---- Car ----<');
console.log(car);
console.log(car.drive());
console.log('>---- Toyota ----<');
console.log(toyota.drive());
console.log(toyota.honk());
console.log(toyota);

//////////////////////////

/*
You are a game developer tasked with setting up some basic classes for 
a new game you are working on.  Create a class called 'Monster'.  
In the constructor, you'll need to do some basic setup for Monster 
whenever they are created. 

Initialize the Monster's health to 100.
The constructor will be called with an 'options' object that has a 'name' 
property.  Assign the 'name' to the Monster

class Monster {
  
}
*/

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

/////////////////////////////////

/*
Subclassing Monsters
Now that you have a monster created, create a subclass of the 
Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this 
method is another instance of a Snake.
The instance of Snake that is passed in should have their health 
deducated by 10

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake {

}
*/

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(otherSnake) {
    return (otherSnake.health -= 10);
  }
}
