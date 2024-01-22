"use strict";
// example
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// greet('jay', 'chao adios')
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === '+') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age}`);
};
logDetails({ name: 'icha', age: 30 });
