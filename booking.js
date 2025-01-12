//============================  GET ===========================================


let fetchData=  async ()=>{

    try{
    let url='http://localhost:3000/carbooking';
     let res= await fetch(url,{method:"GET"})
     let data=await res.json()
     console.log(data);
  
     let output=document.querySelector("#display")
  
     data.map((e)=>{
        output.innerHTML+=`
           <tr>
           <td>${e.pickuplocation}</td>
           <td>${e.dropofflocation}</td>
           <td>${e.pickupdate}</td>
           <td>${e.dropoffdate}</td>
           <td>${e.pickuptime}</td>
           <td onclick="condelte('${e.id}')">Delete</td>
                      <td onclick="formfill('${e.id}')">Update</td>

           </tr>
        `
     })
  
    }
    catch(error){
        console.log(error);
        
    }
  
  
  }
  
   // =================================== delete ====================================

  let condelte=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            del(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
  }
  
  let del=(id)=>{
   
    let url=`http://localhost:3000/carbooking/${id}`
    fetch(url,{
        method:"DELETE"
    })
  }
  
  
  //============================  POST ===========================================
  let ins=()=>{
   
    let pickloc=document.querySelector("#pick-loc").value;
    let droploc=document.querySelector("#drop-loc").value;
    let pickdate=document.querySelector("#pick-date").value;
    let dropdate=document.querySelector("#drop-date").value;
    let picktime=document.querySelector("#pick-time").value;
  
    let url='http://localhost:3000/carbooking'
    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "pickuplocation": pickloc,
            "dropofflocation": droploc,
            "pickupdate": pickdate,
            "dropoffdate": dropdate,
            "pickuptime": picktime
        })
  
    })

    location.href="booking.html"

  return false;
  
  }
  
  
 // ===================================Update form====================================


 
 let formfill=async(id)=>{

    let url=`http://localhost:3000/carbooking/${id}`
   let res=await fetch(url)
   let data=await res.json()
  
   let formdata=`

    
    <section id="booking" >
        <div class="book-div">
            
            <form action="">

            <div class="book-div1" style="background-color: red;">

                  <h2 style="margin-left:0px; font-size:30px; color:blue;">UPDATE YOUR FORM</h2>

                 <h4>UPDATE PICK-UP LOCATION</h4>
                 <input type="text" id="update-pick-loc">

                 
                 <h4>UPDATE DROP-OFF LOCATION</h4>
                 <input type="text" id="update-drop-loc">

                 
                 <h4>UPDATE PIC-UP DATE</h4>
                 <input type="date" id="update-pick-date">

                 
                 <h4>UPDATE DROP-OFF DATE</h4>
                 <input type="date" id="update-drop-date">

                 
                 <h4>UPDATE PIC-UP TIME</h4>
                 <input type="time" id="update-pic-time"> <br>


      <input type="submit" onclick="finalupdate('${data.id}')" style="width: 130px; height: auto; background-color: blue;margin-left: 90px; ">

                </form>
        </div>
    </section>
   
   `

   document.querySelector("#updateshow").innerHTML=formdata
}

  // ===================================Update fill form====================================


let finalupdate=(id)=>{

  let updatepickloc=document.querySelector("#update-pick-loc").value;
  let updatedroploc=document.querySelector("#update-drop-loc").value;
  let updatepickdate=document.querySelector("#update-pick-date").value;
  let updatedropdate=document.querySelector("#update-drop-date").value;
  let updatepicktime=document.querySelector("#update-pic-time").value;


  
try{
  let url=`http://localhost:3000/carbooking/${id}`
    fetch(url,
      {method:"PUT",
       
      headers:{
          "Content-Type":"application/json",
      },

      body:JSON.stringify(
          {
            "pickuplocation": updatepickloc,
            "dropofflocation": updatedroploc,
            "pickupdate": updatepickdate,
            "dropoffdate": updatedropdate,
            "pickuptime": updatepicktime

          }
      )
      })
      
  }
  catch(error){
      console.log(error);
      
  }


}


VANTA.CLOUDS({
  el: "#book-tablee",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  skyColor: 0x14d9d9,
  cloudColor: 0xafc0d7,
  cloudShadowColor: 0xe2a43,
  sunColor: 0xff920a,
  sunGlareColor: 0xdc5a2e,
  sunlightColor: 0xfff230,
  speed: 2.00
})
