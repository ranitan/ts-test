abstract class Customer{
    public CustomerName:string;
    public Age:number|string;
    public ContactNumber :number;
    public Address : string;
constructor(CustomerName:string, Age:number|string,ContactNumber :number,Address : string){
    this.CustomerName=CustomerName;
    this.Age=Age;
    this.ContactNumber=ContactNumber;
    this.Address=Address
}
abstract AccessDetails():void
}


class Loan extends Customer{
    LoanAccountNo:number;
    LoanType:string; 
    LoanAmount:number;
    Duration:number; 
    InterestRate:number
    constructor(CustomerName:string, Age:number|string,ContactNumber :number,Address : string,LoanAccountNo:number,LoanType:string,LoanAmount:number,Duration:number,InterestRate:number){
        super(CustomerName,Age,ContactNumber,Address)
        this.LoanAccountNo=LoanAccountNo;
        this.LoanType=LoanType;
        this.LoanAmount=LoanAmount;
        this.Duration=Duration;
        this.InterestRate=InterestRate;
            }
        AccessDetails(): void {
            console.log("Customer Name:"+this.CustomerName+"\n"+"Age:"+this.Age+'\n'+"Contact Number:"+this.ContactNumber+'\n'+"Address:"+this.Address);
            console.log("LoanAccountNo"+this.LoanAccountNo+'\n'+"LoanType:"+this.LoanType+'\n'+"LoanAmount:"+this.LoanAmount+'\n'+"Duration:"+this.Duration+'\n'+"IntrestRate:"+this.InterestRate);
        }    
        InterestCalculate():void{
        console.log("Interest and the total amount to be paid:"+(this.LoanAmount*this.Duration*this.InterestRate)/100)
        }
        display():void{
            console.log("LOAN AMOUNT DEATILS")
            this.AccessDetails();
            this.InterestCalculate();

        }
}
let y= new Loan("yamini",20,9944050247,"vsk nagar",101,"personal loan",100000,20,0.4)
y.display();