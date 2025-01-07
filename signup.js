

let sign =()=> {



    
let errorname=document.querySelector(".errorname")
let errornumber=document.querySelector(".errornumber")
let erroremail=document.querySelector(".erroremail")
let errorpass=document.querySelector(".errorpass")
let errorcpass=document.querySelector(".errorcpass")


let namee=document.querySelector(".name").value;
let number=document.querySelector(".number").value;
let email=document.querySelector(".email").value;
let pass=document.querySelector(".pass").value;
let cpass=document.querySelector(".cpass").value;

if (namee===""){
    errorname.innerHTML=`*please enter your name*`;
    errorname.style.color="red";

    return false;
}

else if (number===""){
    errornumber.innerHTML=`*please enter your number*`;
    errornumber.style.color="red";

    return false;
}

else if (email===""){
    erroremail.innerHTML=`*please enter your emil*`;
    erroremail.style.color="red";

    return false;
}

else if (pass===""){
    errorpass.innerHTML=`*please enter your passward*`;
    errorpass.style.color="red";

    return false;
}

else if (cpass===""){
    errorcpass.innerHTML=`*please enter your confirm pswd*`;
    errorcpass.style.color="red";

    return false;
}

else if(number.length!==10){
 errornumber.innerHTML="Please enter valid number 10";
 errornumber.style.color="red";

 return false ;

}

else if(isNaN(number)){
       
    errornumber.innerHTML="Please enter number only";
    errornumber.style.color="red";

    return false;

   }


   
   else if(!(email.includes("@") && email.includes(".com"))){
    erroremail.textContent="Please enter valid email";
    erroremail.style.color="red";
    return false;
   }


   else if(!
    (
        pass.match(/[1234567890]/) 
         && 
        pass.match(/[!@#$%^&*()]/) 
         && 
        pass.match(/[a-z]/) 
         && 
        pass.match(/[A-Z]/)
    )
){
    errorpass.innerHTML = "Password contain atleast 1 lower, upper ,special and number";
    document.querySelector('.errorpass').style.color = "red";
    let passinp=document.querySelector(".pass")
    passinp.style.borderColor = "red"
    passinp.style.outlineColor = "red"
    return false;
}

else if(pass != cpass){
    errorcpass.innerHTML = "Password and confirm password should be same";
    document.querySelector('.pass').value ="";
    document.querySelector('.cpass').value ="";
    document.querySelector('.pass').focus();   
    errorcpass.style.color="red";       
    return false;
}


localStorage.setItem("username",namee)
localStorage.setItem("usernumber",number)
localStorage.setItem("useremail",email)
localStorage.setItem("userpassword",pass)
localStorage.setItem("usercpass",cpass)


//go on login 

window.location.href="login.html"


return false ;


}




VANTA.NET({
    el: "#signup",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 500.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    spacing: 17.00
  })