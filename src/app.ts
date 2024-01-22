// example
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

// greet('jay', 'chao adios')


// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === '+') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3

type myObject = { name: string, age: number }

let logDetails: (obj: myObject) => void;

logDetails = (ninja: myObject) => {
  console.log(`${ninja.name} is ${ninja.age}`)
}

logDetails({name:'icha', age: 30})