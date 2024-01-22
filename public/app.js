import { Invoice } from './classes/Invoice.js';
var invOne = new Invoice('Ichan', 'work on website', 240);
var invTwo = new Invoice('Jackk', 'work on website', 400);
// console.log(invOne, invTwo)
invOne.client = 'Mike';
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var anchor = document.querySelector('a');
if (anchor) {
    // console.log(anchor.href);
}
// console.log(anchor.href);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
