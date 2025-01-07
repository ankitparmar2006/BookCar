
let fetchData=async()=>{

    let url=`http://localhost:3000/car`;
    let res= await fetch(url, {method:"GET"})
    let data=await res.json()
    console.log(data);

    let output=document.querySelector("#display")

    data.map((e)=>{

        output.innerHTML+=  `
        
        
<tr>
    <td>${e.carname}</td>
    <td>${e.carcolor}</td>
    <td>${e.carbrand}</td>
    <td>${e.carprice}</td>

        <td onclick="condelte('${e.id}')">DELETE</td>

</tr>
        
        `
    })
    }


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
       
        let url=`http://localhost:3000/car/${id}`
        fetch(url,{
            method:"DELETE"
        })
    }
    