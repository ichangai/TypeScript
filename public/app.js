"use strict";
// 
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says dope`);
};
// const greet = (user: { name: string, uid: string_or_num }) => {
//   console.log(`${user.name} says dope`)
// }
greet({ name: 'Icha', uid: 20 });
