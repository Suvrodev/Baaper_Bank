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

let Check_Pass_Rules;
let UserPassword="";
Password.addEventListener('keyup', (event)=>{
     UserPassword=event.target.value;
    const TextLength=UserPassword.length;
    console.log(UserPassword);
    console.log(TextLength);
    if(TextLength<6){
        PasswordText.style.display='block';
        PasswordText.innerText="Password Should be more than 6 digit";
        Check_Pass_Rules= false;
    }else{
        PasswordText.style.display='none';
        Check_Pass_Rules= true;
    }  
})

let ConfirmPassword;
Confirm_Password.addEventListener('keyup',function(event){
   
   console.log("Password Result: "+Check_Pass_Rules)
   ConfirmPassword=event.target.value;
   console.log(ConfirmPassword);
   if(Check_Pass_Rules===true){
        if(ConfirmPassword!==UserPassword){
            ConfirmPasswordText.style.display='block';
            console.log("User Password: "+UserPassword);
            
        }else{
        ConfirmPasswordText.style.display='none'; 
     }
   }else{
      ConfirmPasswordText.style.display='block';
      ConfirmPasswordText.innerText='Password is not follow our criteria'
   }
  
})
Submit.addEventListener('click',function(){
    
    const Get1=MyGlobalEmail(Email.value);
    const Get2=MyGlobalPassword(UserPassword);
    console.log("Global Email: "+Get1+" Global Password: "+Get2);
    
    //////////////
   // var aa="Thus is My Data";
    sessionStorage.setItem("ek",Get1);
    sessionStorage.setItem("pk",Get2);
    alert('Registration successfully')
  //  alert("Email: "+Get1+"Password: "+Get2);
    /////////////////
    window.location.href='index.html';
})