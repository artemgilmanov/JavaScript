promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => console.log('Finaly finished!'))
  .then(() => console.log('I was also run!!'))
  .catch(() => console.log('Oh, no I was rejected!!!'));

////////////////////////////////////////////

url = 'https://jsonplaceholder.typicode123.com/posts123456/';

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log('BAD', error)); // handle errors above status 300
