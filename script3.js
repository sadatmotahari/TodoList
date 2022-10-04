let button = document.getElementById("button");
let input = document.getElementById("input");
let ul = document.querySelector("#showList ul")
function createTask(){
    if (input.value !== ""){
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value= ""
}
    else{alert("لطفا فیلد را پر کنید")}
}
button.addEventListener("click" , createTask)