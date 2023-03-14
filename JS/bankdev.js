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



CommentReset.addEventListener("click", function () {
  CommentText.value = "";
  /// console.log("Button: "+CommentReset.style.backgroundColor)///////////////////////////jioooooooooooooooooooooooooooo
});


///Create Function start
const ShowText=(Text)=>{
  console.log('Show Text Function')
  console.log('Test Button: '+Text)
  alert(Text)
}
const dlt=(Text)=>{
  console.log('Delete Function')
  console.log('Delete: '+Text);
}
///Create Function end


const submitcomment=()=>{
       console.log('It is in Submit comment function')
        const Text=CommentText.value;
        console.log("In Submit Comment: "+Text);
      if (Text === "") {
        alert("Write Comment First");
      } else {
        const li_comment = document.createElement("li");
        const Delete_Button=document.createElement('button');
        const Convert_Button=document.createElement('button');

      // Delete_Button.innerText='DB'
        Delete_Button.classList.add('bi')
        Delete_Button.classList.add('bi-archive-fill')
        Delete_Button.classList.add('redcolor')

        Convert_Button.classList.add('bi')
        Convert_Button.classList.add('bi-eye-fill')
        Convert_Button.classList.add('greencolor')

        // li_comment.classList.add('commentclass');
        // li_comment.appendChild(Delete_Button);
        // li_comment.appendChild(Convert_Button);
        // li_comment.innerText=Text;
      

        try{
        li_comment.innerHTML=`
          <button onclick="dlt('${Text}')"><i class="bi bi-archive-fill redcolor"></i></button>  <button onclick="ShowText('${Text}')"><i class="bi bi-eye-fill greencolor"></i></button>  ${Text}
        `;
        }catch(err){
          console.log('Error: '+err)
        }
        li_comment.classList.add('commentclass')

        const CommentContainer = document.getElementById("commentcontainernew");
        CommentContainer.appendChild(li_comment);

        ////
        document.getElementById("docomment").value = "";
      }
}

CommentText.addEventListener("keyup", function (event) {
  userComment = event.target.value;
 // console.log(userComment)

  if(event.key == 'Enter'){
  // console.log('This is okay');
   submitcomment();
  }
});

CommentSubmit.addEventListener("click", ()=> {
  submitcomment();
});



/////Comment End




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
    localStorage.removeItem('BB_Emai');
    localStorage.removeItem('BB_Password');

    window.location.href='index.html';
})
///Logout Button end


