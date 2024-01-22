"use strict";
let greet;
greet = () => {
    console.log("Hello, again");
};
const add = (a, b, c = 0) => {
    if (c) {
        console.log(a + b + c);
    }
    else {
        console.log(a + b);
    }
};
add(3, 4, 3);
const minus = (a, b) => {
    return a + b;
};
let result = minus(20, 4);
