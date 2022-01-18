class Bank{
    createAccount(){
        let accountNumber=bk_acno.value;
        let personName=bk_pname.value;
        let accountType=bk_actype.value;
        let password=bk_pwd.value;
        let balance=2000;
        let account={
            accountNumber,personName,accountType,password,balance
        }
        localStorage.setItem(account.accountNumber,JSON.stringify(account))
        alert("account created")
    }

}
var obj=new Bank()