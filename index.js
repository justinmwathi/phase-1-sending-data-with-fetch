// Add your code here
function submitData(name,email){
return(fetch("http://localhost:3000/users",{
    method:"POST",
    headers:{
        "Content-type":"application/json",
        "Accept":"application/json",
    },
    body:JSON.stringify({
        name:"Steve",
        email:"steve@steve.com"
    })
})
.then((response)=>response.json())
.then((data)=>{
    const newId=data.id;
    appendNewIdToDOM(newId)
})
.catch(error => {
    const message = `Error: ${error.message}`;
    appendToDOM(message);
  })
);
}

const appendNewIdToDOM = (newId) => {
    const newIdElement = document.createElement('p'); 
    newIdElement.textContent = `New id: ${newId}`; 
    document.body.appendChild(newIdElement); 
  }
  function appendToDOM(message) {
    const div = document.createElement("div");
    div.textContent = message;
    document.body.appendChild(div); 
  }
submitData()
 
