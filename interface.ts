interface ISavingsaccount {
    account_id: number;
    account_name: string

balance(interest?: any, amount?: any):void  
}

interface Icurrentaccount{
    account_id: number;
    account_name: string
    balance(interest?: any, amount?: any):void  
}

class Accounts implements ISavingsaccount, Icurrentaccount {
    account_id: number;
    account_name: string
    constructor(accountid: number, accountname: string) {
        this.account_id = accountid;
        this.account_name = accountname;
    }
    balance(amount?: any, interest?: any) {
        console.log("ACCOUNT INFORMATION");
        console.log(`Account Number:${this.account_id}`);
        console.log(`Account Name:${this.account_name}`);
        if (interest != null) {
            console.log("savings account balance: ", amount + (amount * interest));
        }
        else {
            console.log("current account balance: "+amount);

        }
    }
}
let c:Icurrentaccount=new Accounts(1,"yamini");
c.balance(25000);
let s:ISavingsaccount=new Accounts(2,"meena");
s.balance(20000);
