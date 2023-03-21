var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(CustomerName, Age, ContactNumber, Address) {
        this.CustomerName = CustomerName;
        this.Age = Age;
        this.ContactNumber = ContactNumber;
        this.Address = Address;
    }
    return Customer;
}());
var Loan = /** @class */ (function (_super) {
    __extends(Loan, _super);
    function Loan(CustomerName, Age, ContactNumber, Address, LoanAccountNo, LoanType, LoanAmount, Duration, InterestRate) {
        var _this = _super.call(this, CustomerName, Age, ContactNumber, Address) || this;
        _this.LoanAccountNo = LoanAccountNo;
        _this.LoanType = LoanType;
        _this.LoanAmount = LoanAmount;
        _this.Duration = Duration;
        _this.InterestRate = InterestRate;
        return _this;
    }
    Loan.prototype.AccessDetails = function () {
        console.log("Customer Name:" + this.CustomerName + "\n" + "Age:" + this.Age + '\n' + "Contact Number:" + this.ContactNumber + '\n' + "Address:" + this.Address);
        console.log("LoanAccountNo" + this.LoanAccountNo + '\n' + "LoanType:" + this.LoanType + '\n' + "LoanAmount:" + this.LoanAmount + '\n' + "Duration:" + this.Duration + '\n' + "IntrestRate:" + this.InterestRate);
    };
    Loan.prototype.InterestCalculate = function () {
        console.log("Interest and the total amount to be paid:" + (this.LoanAmount * this.Duration * this.InterestRate) / 100);
    };
    Loan.prototype.display = function () {
        console.log("LOAN AMOUNT DEATILS");
        this.AccessDetails();
        this.InterestCalculate();
    };
    return Loan;
}(Customer));
var y = new Loan("yamini", 20, 9944050247, "vsk nagar", 101, "personal loan", 100000, 20, 0.4);
y.display();
