console.log("Deposit");
const MainDeposit = document.getElementById("maindeposit");
const MainWithdraw = document.getElementById("mainwithdraw");
const MainBalance = document.getElementById("mainbalance");

const DepositInput = document.getElementById("depositinput");
const DepostButton = document.getElementById("btndeposit");
const WithdrawInput = document.getElementById("withdrawinput");
const WithdrawButton = document.getElementById("btnwithdraw");

DepostButton.addEventListener("click", function () {
  // console.log("This is Deposit Button");
  const Get = DepositInput.value;
  const Get_in_Number = parseFloat(Get);
  console.log("Get from box: " + Get);
  console.log(
    "Get form box in Number: " +
      Get_in_Number +
      " which Datatype: " +
      typeof Get_in_Number
  );

  if (isNaN(Get_in_Number)) {
    alert("Provide a valid Number");
    return;
  } else {
    const Main_Deposit = MainDeposit.innerText;
    const Main_Deposit_in_Number = parseFloat(Main_Deposit);
    console.log(
      "Main deposit: " +
        Main_Deposit_in_Number +
        "--Datatype: " +
        typeof Main_Deposit_in_Number
    );

    const TotalValue = Get_in_Number + Main_Deposit_in_Number;
    console.log("Total: " + TotalValue);
    MainDeposit.innerText = TotalValue;

    const PreviousBalanceTotalString = MainBalance.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);
    console.log(
      "Previous Total Balance: " +
        PreviousBalanceTotal +
        " Which Data type: " +
        typeof PreviousBalanceTotal
    );
    const TotalBalance = PreviousBalanceTotal + Get_in_Number;
    MainBalance.innerText = TotalBalance;
  }
  //Thako tumi tomar mato
  DepositInput.value = "";
});

/////Withdraw Button Work
WithdrawButton.addEventListener("click", function () {
  //console.log("Withdraw Button");
  const WithdrawString = WithdrawInput.value;
  const WithdrawAmount = parseFloat(WithdrawString);
  console.log(
    "Withdraw: " + WithdrawAmount + " Data type: " + typeof WithdrawAmount
  );

  if (isNaN(WithdrawAmount)) {
    alert("Provide A Valid number");
  } else {
    const PreviousWithdraw = MainWithdraw.innerText;
    const PreviousWithdrawAmount = parseFloat(PreviousWithdraw);
    console.log(
      "Previous Withdraw: " +
        PreviousWithdrawAmount +
        " Datatype: " +
        typeof PreviousWithdrawAmount
    );

    const TotalWithdraw = PreviousWithdraw - WithdrawAmount;
    MainWithdraw.innerText = TotalWithdraw;
    console.log(
      "Total Withdraw: " + TotalWithdraw + " Datatype: " + typeof TotalWithdraw
    );

    const PreviousTotalBalanceString = MainBalance.innerText;
    const PreviousTotalBalanceAmount = parseFloat(PreviousTotalBalanceString);
    const TotalBalane = PreviousTotalBalanceAmount - WithdrawAmount;
    console.log("Now Total Balance: " + TotalBalane);
    MainBalance.innerText = TotalBalane;
  }
  ////Thako
  WithdrawInput.value = "";
});
