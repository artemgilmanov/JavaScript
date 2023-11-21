"use strict";

const my_firs_function = function() {
    console.log("My first function!");
};
my_firs_function();
console.log("-------");

const my_second_function = function(parameter_1, parameter_2) {
    console.log(`${parameter_1} + ${parameter_2}`);
    console.log(parameter_1 + parameter_2);
};
my_second_function(15,20);
console.log("-------");

const my_third_function = function(a, b=10) {
    console.log(a);
    console.log(b);
    console.log(a/b);
}
my_third_function(5);
my_third_function(5,5);
console.log("-------");

const my_fourth_function = function(a,b) {
    return a*b;
}
let result = my_fourth_function(13, 111);
console.log(result);
console.log("-------");

var a;
a = 5;
console.log(a);

var b;
console.log(b);
b = 10;
console.log(b);
console.log("-------");

c = 15;
console.log(c);
var c; // var is moved to the top of heap and executed before declaration of "c"
console.log("-------");

if(true){
    var d = 20;
}
console.log(d); // scoping does not work hier, because var modet to the top of the heap
console.log("-------");


var c = 15;
if(true){
    var c = 20;
    console.log(c);
}
console.log(c); // scoping does not work hier, because var modet to the top of the heap
console.log("-------");

const my_fifth_function = function() {
    console.log("5th function");
}
my_fifth_function();

let my_sixth_function = function() {
    console.log("6th function");
}
my_sixth_function();

my_sixth_function = function() {
    console.log("6th function (NEW!)");
}
console.log("-------");

// Declaration of the function (functions as var -> HOISTING)
function my_seventh_function() {
    console.log("my 7th function");
}
my_seventh_function();