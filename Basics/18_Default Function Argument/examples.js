function makeAjaxRequest(url, method = 'GET') {
  return method;
  // logic to make the rquest
}

makeAjaxRequest('google.com', undefined);
makeAjaxRequest('google.com', 'POST');

/////////////////////////////////////////////

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random * 999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());
createAdminUser();

/////////////////////////////////////////////

/*
Refactor the following code to use default function arguments.  
Be sure to remove any unused code after you refactor it.

function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}
*/

function sum(a = 0, b = 0) {
  return a + b;
}

/////////////////////////////////////////////

/*
Refactor the following code to use default function arguments.  
Be sure to remove any unused code after you refactor it.

function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}
*/

function addOffset(style = { offset: '' }) {
  style.offset = '10px';
  return style;
}
