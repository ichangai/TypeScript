let greet: Function;


greet = () => {
  console.log("Hello, again");
}


const add = (a: number, b: number, c:number = 0):void => {
  if (c) {
    console.log(a + b + c);
  } else {
    console.log(a + b);
  }
}

add(3, 4, 3);


const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(20, 4);