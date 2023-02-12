const Submit_Button=document.getElementById('btnsubmit');
const User_Email=document.getElementById('useremail');
const User_Password=document.getElementById('userpassword');

Submit_Button.addEventListener('click',function(){
    //console.log('Check Button');
    const Email=User_Email.value;
    const Password=User_Password.value;

    //console.log("Email: "+Email+" Password: "+Password);
    if(Email==='suvrodev.cse@yahoo.com' && Password==='12345'){
        console.log('valid');
        window.location.href='Bank.html';
    }else{
       alert("Invalid Email or Password");
    }
})