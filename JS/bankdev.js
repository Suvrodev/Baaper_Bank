console.log("Deposit");
console.log(myUtilities);

///Deposit Button start
DepostButton.addEventListener("click", function () {
  const inputValue = getInputValueByID("depositinput");
  console.log(inputValue);
  if (isNaN(inputValue)) {
    alert("Provide a valid Number");
  } else {
    const PreviousDepositeValue = getElementValueByID("maindeposit");
    console.log(
      "Previous Deposit Value: " +
        PreviousDepositeValue +
        " And its Datatype: " +
        typeof PreviousDepositeValue
    );
    const Total_Deposit = inputValue + PreviousDepositeValue;
    console.log(
      "Total deposit value: " +
        Total_Deposit +
        " And Its Datatype: " +
        typeof Total_Deposit
    );
    setElementValueByID("maindeposit", Total_Deposit);

    const PreviousMainBalance = getElementValueByID("mainbalance");
    const Total_Balance = PreviousMainBalance + inputValue;
    setElementValueByID("mainbalance", Total_Balance);
  }
  ////Empty Input Field
  DepositInput.value = "";
});
///Deposit Button end

/////Withdraw Button Work start
WithdrawButton.addEventListener("click", function () {
  const inputValue = getInputValueByID("withdrawinput");
  if (isNaN(inputValue)) {
    alert("provide a valid Number");
  } else {
    const PreviousWithdrawValue = getElementValueByID("mainwithdraw");
    const Total_Withdraw = inputValue + PreviousWithdrawValue;
    setElementValueByID("mainwithdraw", Total_Withdraw);

    const PreviousMainBalance = getElementValueByID("mainbalance");
    const Total_Balance = PreviousMainBalance - inputValue;
    setElementValueByID("mainbalance", Total_Balance);
  }
  ////Empty Input Field
  WithdrawInput.value = "";
});
/////Withdraw Button Work end

/////Comment Start
const CommentReset = document.getElementById("check1");
const CommentSubmit = document.getElementById("check2");
const CommentText = document.getElementById("docomment");
let userComment;

CommentText.addEventListener("keyup", function (event) {
  userComment = event.target.value;
});

CommentReset.addEventListener("click", function () {
  CommentText.value = "";
  /// console.log("Button: "+CommentReset.style.backgroundColor)///////////////////////////jioooooooooooooooooooooooooooo
});

CommentSubmit.addEventListener("click", function () {
    const Text=CommentText.value;
    console.log(Text);
  if (Text === "") {
     alert("Write Comment First");
  } else {
    const p_comment = document.createElement("p");
    p_comment.innerText = Text;

    const CommentContainer = document.getElementById("allusercomment");
    p_comment.classList.add("commentclass");
    CommentContainer.appendChild(p_comment);

    ////
    document.getElementById("docomment").value = "";
  }
});
/////Comment End

////Remove Comment start
// This is Okay start
document
  .getElementById("allusercomment")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
// This is Okay end

///যে রকম চাচ্ছি সেরকম হচ্ছে না
// const baal= document.getElementsByClassName('commentclass');
// for( const x of baal ){
//     x.addEventListener('click',function(event){
//         console.log(event.target.parentNode);
//         event.target.parentNode.removeChild(event.target)

//     })
// }
////Remove Comment end

///Logout Button start
const LogoutInput = document.getElementById("logoutinputid");
const LogoutButton = document.getElementById("logoutbtnid");
LogoutInput.addEventListener("keyup", function (event) {
  const Text = event.target.value;
  console.log(Text);
  if (Text === "logout") {
    LogoutButton.removeAttribute("disabled");
    LogoutButton.style.backgroundColor = "blue";
    
  } else {
    LogoutButton.setAttribute("disabled", true);
    LogoutButton.style.backgroundColor = "skyblue";
  }
});

LogoutButton.addEventListener('click',function(){
    window.location.href='index.html';
})
///Logout Button end
