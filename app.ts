// Explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;

isLoggedIn = true;

// arrays

let games: string[];

games = ['Mk1', 'Fifa']

console.log(games);

let dopeGames: string[] = [];

dopeGames.push('Hitman')
dopeGames.push('COD')

console.log(dopeGames)

// union types

// union types for arrays
let mixed: (string | number)[] = [];
mixed.push('joe');
mixed.push(20);
console.log(mixed);
// union types for primitive
let uid: string | number;


// objects

let userOne: object;

userOne = {
  name: 'Mike',
  age: 28
};

// console.log(userOne.age)

let admin: {
  name: string,
  age: number,
  isLoggedIn: false
}

admin = {
  name: 'Icha',
  age: 30,
  isLoggedIn: false
}

console.log(admin.name)




