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
  
 

  constructor(
    readonly client: string,
    private details: string,
    private amount: number
  ) {
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('Ichan', 'work on website', 240)
const invTwo = new Invoice('Jackk', 'work on website', 400)

// console.log(invOne, invTwo)
invOne.client = 'Mike'

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices);

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