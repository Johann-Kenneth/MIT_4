var subBtn=document.getElementById("submitBtn")
var data=document.getElementById("dataContainer")
var name=document.getElementById("nameBox")
var mail=document.getElementById("mailBox")
var dlt=document.getElementById("dlt")
var index=-1

subBtn.addEventListener('click', function(){
    let name=document.getElementById("nameBox").value;
    let mailId=document.getElementById("mailBox").value;

    let details=JSON.parse(localStorage.getItem("users")) || [];

    details.push({
        name: name,
        mailId: mailId
})
    localStorage.setItem("users",JSON.stringify(details))

    data.innerHTML+=
    `<div class = "outerBox">
         <label><b>${name}</b></label><br>
         <label>${mailId}</label>
         <button id="dlt" onclick="deleteData()">Delete</button>
    </div>`

 
})
function deleteData(){
    dataContainer.remove()
}



   

   
    
    
        



