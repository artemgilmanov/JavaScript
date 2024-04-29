'use strict';

let html_collection = document.getElementsByClassName('jumbotron');
//console.log(html_collection);

for (let i = 0; i < html_collection.length; i++) {
  console.log(html_collection[i]);
}

let html_collection_2 = document.getElementsByTagName('li');
//console.log(html_collection_2);

for (let i = 0; i < html_collection_2.length; i++) {
  console.log(html_collection_2[i]);
}

for (let e of html_collection) {
  console.log(e);
}

for (let e of html_collection_2) {
  console.log(e);
}

let node_list = document.querySelectorAll('p');
console.log(node_list);

node_list.forEach((node) => console.log(node));
