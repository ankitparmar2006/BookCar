
let ins = () => {
    let pick = document.querySelector("#pick-loc").value;
    let drop = document.querySelector("#drop-loc").value;
    let pickup = document.querySelector("#pick-date").value;
    let dropo = document.querySelector("#drop-date").value;
    let time1 = document.querySelector("#picktime").value;
    let url = "http://localhost:3000/car";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pickup: pick,
        dropoff: drop,
        pickupdate: pickup,
        dropoffdate: dropo,
        time: time1,
      }),
    });
    window.location.href = "bookings.html";
    return false;
    };
  
//   let fetchdata = async () => {
//     let url = "http://localhost:3000/car";
//     let res = await fetch(url);
//     let result = await res.json();
//     let show1 = document.querySelector("#pickupshow");
//     let show2 = document.querySelector("#dropofshow");
//     let show3 = document.querySelector("#dropofshow1");
//     result.map((e) => {
//       show1.innerHTML = `
//           <p> ${e.pickup}</p>
//            <p>${e.pickupdate}</p>
//            <p>${e.time}</p>
//         `;
//       show2.innerHTML = `
//         <p>${e.dropoff}</p>
//         <p>${e.dropoffdate}</p>
//         <p>${e.time}</p>
//         `;
//       show3.innerHTML = `
//         <p>${e.dropoff}</p>
//         <p>53 Albert St, Brisbane Old,</p>
//         <P>Brisbane Old,4000</p>
//         `;
//     });
//   };

  //============================  GET ===========================================

let fetchData=  async ()=>{

    try{
    let url='http://localhost:3000/car';
     let res= await fetch(url,{method:"GET"})
     let data=await res.json()
     console.log(data);
  
     let output=document.querySelector("#display")
  
     data.map((e)=>{
        output.innerHTML+=`
           <tr>
           <td>${e.carname}</td>
           <td>${e.carprice * e.carrentaldays}</td>
           <td>${e.carcolor}</td>
           <td>${e.carbrand}</td>
           <td>${e.carrentaldays}</td>
           <td onclick="condelte('${e.id}')">Delete</td>
           </tr>
        `
     })
  
    }
    catch(error){
        console.log(error);
        
    }
  
  
  }
  









//   {
//     "car": [
//       {
//         "id": "2aa2",
//         "carname": "verna",
//         "carprice": 2000,
//         "carcolor": "yellow",
//         "carbrand": "alto",
//         "carrentaldays": 2
//       },
//       {
//         "id": "3b58",
//         "carname": "maruti ski 800",
//         "carprice": 20,
//         "carcolor": "balckddd",
//         "carbrand": "lovyyyy",
//         "carrentaldays": 1
//       },
//       {
//         "id": "66cf",
//         "carname": "fararoooo",
//         "carprice": 40,
//         "carcolor": "red",
//         "carbrand": "ank",
//         "carrentaldays": 1
//       },
//       {
//         "id": "4744",
//         "carname": "pppppp",
//         "carprice": 40,
//         "carcolor": "red",
//         "carbrand": "anks",
//         "carrentaldays": 1
//       }
//     ]
//   }