import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

const invOne = new Invoice('Ichan', 'work on website', 240)
const invTwo = new Invoice('Jackk', 'work on website', 400)

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('ryu', 'webapp', 200)

// console.log(invOne, invTwo)
// invOne.client = 'Mike'

// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// console.log(invoices);

const anchor = document.querySelector('a')!;
if (anchor) {
  // console.log(anchor.href);
}
// console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});