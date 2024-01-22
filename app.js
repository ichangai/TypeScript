// Explicit types
var character;
var age;
var isLoggedIn;
isLoggedIn = true;
// arrays
var games;
games = ['Mk1', 'Fifa'];
console.log(games);
var dopeGames = [];
dopeGames.push('Hitman');
dopeGames.push('COD');
console.log(dopeGames);
// union types
// union types for arrays
var mixed = [];
mixed.push('joe');
mixed.push(20);
console.log(mixed);
// union types for primitive
var uid;
// objects
var userOne;
userOne = {
    name: 'Mike',
    age: 28
};
// console.log(userOne.age)
var admin;
admin = {
    name: 'Icha',
    age: 30,
    isLoggedIn: false
};
console.log(admin.name);
