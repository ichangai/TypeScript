var Payment = /** @class */ (function () {
    function Payment(receipient, details, amount) {
        this.receipient = receipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.receipient, " is owed ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
export { Payment };
