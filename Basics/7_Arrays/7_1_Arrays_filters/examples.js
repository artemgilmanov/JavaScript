var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

///////////////////////////////////////////

products.filter(function (product) {
  return product.type === 'vegetable';
});

///////////////////////////////////////////

var new_products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

var filtered_new_products = new_products.filter(function (new_product) {
  return (
    new_product.type === 'vegetable' &&
    new_product.quantity > 0 &&
    new_product.price < 10
  );
});

console.log(filtered_new_products);

///////////////////////////////////////////

var post = { id: 4, title: 'New Post' };

var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));

///////////////////////////////////////////

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbersGraterThan50 = numbers.filter(function (number) {
  return number > 50;
});

console.log(filteredNumbersGraterThan50);

///////////////////////////////////////////

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

var filteredUsers = users.filter(function (user) {
  return user.admin;
});

///////////////////////////////////////////

/*
 Create a function called 'reject'.  Reject should work in the opposite way of 'filter' - if a function returns 'true', the item should *not* be included in the new array.  Hint: you can reuse filter.


For example:

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 
lessThanFifteen // [ 10 ];
*/

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function (number) {
  return number > 15;
});
lessThanFifteen; // [ 10 ];

function reject(array, iteratorFunction) {
  return array.filter(function (item) {
    return !iteratorFunction(item);
  });
}

console.log(lessThanFifteen);

///////////////////////////////////////////
