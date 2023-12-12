var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];
  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

////////////////////////////////////////////

computers.every(function (computer) {
  return computer.ram > 16;
});

computers.some(function (computer) {
  return computer.ram > 16;
});

////////////////////////////////////////////

var names = ['Alexandria', 'Matthew', 'Joe'];

var eveyName = names.every(function (name) {
  return name.length > 4;
});
console.log(eveyName);

var someName = names.some(function (name) {
  return name.length > 4;
});
console.log(someName);

////////////////////////////////////////////

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 3;
};

var username = new Field('ool');
var password = new Field('my_password');
var birthday = new Field('10/10/2010');

var fields = [username, password, birthday];

var formIsValid = fields.every(function (field) {
  return field.validate();
});

console.log(username.validate());
console.log(password.validate());

if (formIsValid) {
  // allow user to submit
} else {
  // show an error message
}

console.log(formIsValid);

////////////////////////////////////////////

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every(function (user) {
  return user.hasSubmitted;
});

console.log(hasSubmitted);

////////////////////////////////////////////

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
];

var inProgress = requests.some(function (request) {
  return request.status;
});
