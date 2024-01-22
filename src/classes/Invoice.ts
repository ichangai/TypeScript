export class Invoice {
  
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

