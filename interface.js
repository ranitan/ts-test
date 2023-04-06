var Accounts = /** @class */ (function () {
    function Accounts(accountid, accountname) {
        this.account_id = accountid;
        this.account_name = accountname;
    }
    Accounts.prototype.balance = function (amount, interest) {
        console.log("ACCOUNT INFORMATION");
        console.log("Account Number:".concat(this.account_id));
        console.log("Account Name:".concat(this.account_name));
        if (interest != null) {
            console.log("savings account balance: ", amount + (amount * interest));
        }
        else {
            console.log("current account balance: " + amount);
        }
    };
    return Accounts;
}());
var c = new Accounts(1, "ranita");
c.balance(20000);
var s = new Accounts(2, "naga");
s.balance(15000);
