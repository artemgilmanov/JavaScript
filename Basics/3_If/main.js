"use strict";


const minimumAge = 18;
let userInput = 15;

if (userInput >= minimumAge) {
    if (userInput == minimumAge) {
        console.log("Wow exact age!");
    } else {
        console.log("You are old enought!");
    }
} else {
    console.log("You are not old enought!");
}

if (userInput == minimumAge) {
    console.log("Wow exact age!");
} else if (userInput >= minimumAge) {
    console.log("You are old enought!");
} else {
    console.log("You are not old enought!");
}