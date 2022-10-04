let button = document.getElementById("button");
let input = document.getElementById("input");
let ul = document.querySelector("#showList ul");
function create(){
    if(input.value !== ""){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    let removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("X"));
    li.appendChild(removeButton);
    removeButton.addEventListener("click" , function(){
        li.remove();
    })
    li.addEventListener("click" , function(){
        li.classList.toggle("active");
    })
    ul.appendChild(li);
    input.value = "";
    }
}
button.addEventListener("click", create)