const Name=document.getElementById('nameid');
const Title=document.getElementById('surenameid');
const Email=document.getElementById('emailid');
const Password=document.getElementById('passid');
const Confirm_Password=document.getElementById('cpassid');
const Submit=document.getElementById('submitid');
const Reset=document.getElementById('resetid');

const PasswordText=document.getElementById('passwordtextid');
const ConfirmPasswordText=document.getElementById('cpasswordtextid');

PasswordText.style.display='none';
ConfirmPasswordText.style.display='none';

Reset.addEventListener('click',function(){
    Name.value="";
    Title.value="";
    Email.value="";
    Password.value="";
    Confirm_Password.value="";
})

let UserPassword="";
Password.addEventListener('keyup',function(event){
     UserPassword=event.target.value;
    const TextLength=UserPassword.length;
    console.log(UserPassword);
    console.log(TextLength);
    if(TextLength<6){
        PasswordText.style.display='block';
        PasswordText.innerText="Password Should be more than 6 digit";
    }else{
        PasswordText.style.display='none';
    }  
})

let ConfirmPassword;
Confirm_Password.addEventListener('keyup',function(event){
   ConfirmPassword=event.target.value;
   console.log(ConfirmPassword);
   if(ConfirmPassword!==UserPassword){
      ConfirmPasswordText.style.display='block';
      console.log("User Password: "+UserPassword);
   }else{
     ConfirmPasswordText.style.display='none';
   }
})
Submit.addEventListener('click',function(){
    const Get1=MyGlobalEmail(Email.value);
    const Get2=MyGlobalPassword(UserPassword);
    console.log("Global Email: "+Get1+" Global Password: "+Get2);
    window.location.href='index.html';
})