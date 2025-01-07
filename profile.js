
//<!--====================  profile  cording start from here   ===================== -->




let data1=document.querySelector(".data1")
 let ans1=localStorage.getItem("username")
 data1.innerHTML=` Your name is = `+ans1;



 
 let data2=document.querySelector(".data2")
 let ans2=localStorage.getItem("usernumber")
 data2.innerHTML=`Your number is = `+ans2;
 
 let data3=document.querySelector(".data3")
 let ans3=localStorage.getItem("useremail")
 data3.innerHTML=`Your email is =`+ ans3;

 
let data4=document.querySelector(".data4")
let ans4=localStorage.getItem("userpassword")
data4.innerHTML=`Your password is =`+ans4;





let  data5=document.querySelector(".data5")
let ans5=localStorage.getItem("usercpass")
data5.innerHTML=`Your confirm pswd is =`+ans5;




let logout=()=>{

    localStorage.clear();

        let a =confirm("You want to logout")
    
        if (a){
            alert("your account is logout")
        }
    
    
    else{
        alert("logout filed")
    }
    }
    





///<!--==================== profile  cording end from here   ===================== -->





// VANTA.HALO({
//     el: "#profile",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     amplitudeFactor: 0.90,
//     size: 0.70
//   })