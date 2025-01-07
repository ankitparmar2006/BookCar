
let login=()=>{




    let loginname=document.querySelector(".name").value;
    let loginpass=document.querySelector(".pass").value;
let checkname=localStorage.getItem("username")
let checkpass=localStorage.getItem("userpassword")

if (loginname===checkname && loginpass===checkpass) {


    alert("login suceess")

    window.location.href="index.html"

}
else {
    alert("login faild")
}
return false;

}