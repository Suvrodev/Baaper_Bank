console.log("Deposit");
console.log(myUtilities);

DepostButton.addEventListener("click", function () {
    const inputValue=getInputValueByID('depositinput');
    console.log(inputValue);
    if(isNaN(inputValue)){
        alert("Provide a valid Number");
    }else{
        const PreviousDepositeValue=getElementValueByID('maindeposit');
        console.log("Previous Deposit Value: "+PreviousDepositeValue+" And its Datatype: "+typeof PreviousDepositeValue);
        const Total_Deposit=inputValue+PreviousDepositeValue;
        console.log("Total deposit value: "+Total_Deposit+" And Its Datatype: "+typeof Total_Deposit)
        setElementValueByID('maindeposit',Total_Deposit);

        const PreviousMainBalance=getElementValueByID('mainbalance');
        const Total_Balance=PreviousMainBalance+inputValue;
        setElementValueByID('mainbalance',Total_Balance);
    }
 ////Empty Input Field
  DepositInput.value = "";
});

/////Withdraw Button Work
WithdrawButton.addEventListener("click", function () {
    const inputValue=getInputValueByID('withdrawinput');
    if(isNaN(inputValue)){
        alert('provide a valid Number');
    }else{
        const PreviousWithdrawValue=getElementValueByID('mainwithdraw');
        const Total_Withdraw=inputValue+PreviousWithdrawValue;
        setElementValueByID('mainwithdraw',Total_Withdraw);

        const PreviousMainBalance=getElementValueByID('mainbalance');
        const Total_Balance=PreviousMainBalance-inputValue;
        setElementValueByID('mainbalance',Total_Balance);
    }
  ////Empty Input Field
  WithdrawInput.value = "";
});
