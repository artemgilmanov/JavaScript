'use strict';

let el = document.querySelector('body > nav > ul > li > a');
console.log(el);

let nav = document.querySelector('#navigation');
console.log(nav);

let child_nodes = nav.childNodes;
let children = nav.children;
let first_child = nav.firstChild;
let last_child = nav.lastChild;
let first_element_child = nav.firstElementChild;
let last_element_child = nav.lastElementChild;

let ul = document.querySelector('#navigation > ul');

let next_sibling = ul.nextSibling;
let previous_sibling = ul.previousSibling;
let next_element_sibling = ul.previousElementSibling;
let previous_element_sibling = ul.previousElementSibling;

let parent_element = il.parent_element;

let anker = ul.querySelector('li > a');

console.log(child_nodes);
console.log(children);
console.log(first_child);
