const LoginButton_Button=document.getElementById('btnsubmit');
const Registration_Button=document.getElementById('btnregistration');

const User_Email=document.getElementById('useremail');
const User_Password=document.getElementById('userpassword');

LoginButton_Button.addEventListener('mousemove',function(){
    const Email=User_Email.value;
    const Password=User_Password.value;

    //console.log("Email: "+Email+" Password: "+Password);
    if(Email==='' || Password===''){
        // LoginButton_Button.style.position='relative';
        // LoginButton_Button.style.left='150px'
        LoginButton_Button.style.visibility='hidden';
    }
})
LoginButton_Button.addEventListener('mouseleave',function(){
    LoginButton_Button.style.visibility='visible';
})

LoginButton_Button.addEventListener('click',function(){
    //console.log('Check Button');
    const Email=User_Email.value;
    const Password=User_Password.value;

    console.log("Email: "+Email+" Password: "+Password);
    if(Email==='suvrodev.cse@yahoo.com' && Password==='12345'){
        console.log('valid');
        window.location.href='Bank.html';
    }else{
       alert("Invalid Email or Password");
    }
    //console.log("Global Email: "+GlobalEmail+" Global Password: "+GlobalPassword);
})

Registration_Button.addEventListener('click',function(){
    window.location.href='Registration.html';
})