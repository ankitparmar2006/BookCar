let ins=()=>{

    let inpname=document.querySelector("#name").value
    let inpnumber=document.querySelector("#number").value
    let inpage=document.querySelector("#age").value
    let inpdate=document.querySelector("#date").value

    let url=`http://localhost:3000/car`;
    fetch(url,{method:"POST"})

}