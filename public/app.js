"use strict";
// class Invoice {
//   readonly client: string;
//   private details: string;
//   private amount: number
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`
//   }
// }
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Ichan', 'work on website', 240);
const invTwo = new Invoice('Jackk', 'work on website', 400);
// console.log(invOne, invTwo)
invOne.client = 'Mike';
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const anchor = document.querySelector('a');
if (anchor) {
    // console.log(anchor.href);
}
// console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
