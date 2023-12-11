var users = [{ name: 'Jill' }, { name: 'Alex' }, { name: 'Bill' }];

var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}

console.log(user);

users.find(function (user) {
  return user.name === 'Alex';
});

////////////////////////////////////////

function Car(model) {
  this.model = model;
}

var cars = [new Car('Buick'), new Car('Camaro'), new Car('Focus')];

cars.find(function (car) {
  return car.model === 'Focus';
});

console.log(cars);

////////////////////////////////////////

var posts = [
  { id: 1, title: 'New Post' },
  { id: 1, title: 'Old Post' },
];

var comment = { postId: 1, content: 'Great post' };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));

////////////////////////////////////////

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin = users.find(function (user) {
  return user.admin;
});

////////////////////////////////////////

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function (account) {
  return account.balance === 12;
});

////////////////////////////////////////
/*
The most common find operation is to an object that has a given property.  
Rather than writing out a full function every time, it would be 
great if we has a shorthand syntax to find an object like this:
findWhere(ladders, { height: '20 feet' });
The object { ladders: '20 feet' } should be used as the search 
criteria - we would want to find a ladder whose 'height' property was '20 feet';

Your goal: Write a 'findWhere' function that achieves this shorthand approach.
'findWhere' should return the found object.

In summary:

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); 
// result: { id:3, height: 25 }

Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  
You can use Object.keys(criteria)[0] to figure out the name of the property on the object.  
For example, Object.keys({ height: '20 feet' }) would return 'height'.  
You could then check to see if a given element in the array had a property 
equal to the criteria's value with something like element[property] === criteria[property].
  */

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0];

  return array.find(function (arrayItem) {
    return arrayItem[property] === criteria[property];
  });
}
