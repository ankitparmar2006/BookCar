//<!--====================  this is swiper slider work   ===================== -->
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
  //<!--====================  this is swiper slider work   ===================== -->


    //<!--====================  add to cart  work start from here   ===================== -->

    let temp=0;

addcart=()=>{

  let cart1= document.querySelector(".cart1")


  if (temp>9){
    alert("Space is full") 
    return;
   }

 
  temp=temp+1;
  cart1.innerHTML=temp;

}


 removecart=()=>{

   let cart1= document.querySelector(".cart1")

   if (temp<1){
    alert("Item does not exist") 
    return;
   }
 
  else
  {
    temp=temp-1;
    cart1.innerHTML=temp;
  }
  
   
  
 
 }


 
      //<!--====================  add to cart  work end from here   ===================== -->

//<!--====================  add to cart  work end from here   ===================== -->
// let sign =()=>{

//   let yes=confirm("you want to signup")

//   if (yes) {
// alert("ok")
//   }
//   else {
//     alert("signup filed")
//   }

// }

//<!--====================  add to cart  work end from here   ===================== -->


