let addButton = document.getElementById("button");
let input = document.getElementById("input");
let ul = document.querySelector("#showList ul");
let todoList = [];
addButton.addEventListener("click" , addTodo);
function addTodo(){
    let todoText = input.value;
    if(todoText == ""){
        alert("لطفا فیلد را پر کنید");
    } else {
        let todoObject = {
            subject: todoText,
            isDone: false,
        }
        todoList.unshift(todoObject);
        displayTodos();
    }
    input.value= "";
} 
function addTodoWithEnter(event){
    if(event.keyCode === 13){
        addTodo();
    }
}
input.addEventListener("keypress" , addTodoWithEnter);
function displayTodos(){
    ul.innerHTML="";
    for(let num=0; num < todoList.length; num++){
        let listElement = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("data-id" , todoList[num].subject)
        deleteBtn.appendChild(document.createTextNode("x"));
        listElement.innerHTML = todoList[num].subject;
        listElement.appendChild(deleteBtn)
        if(todoList[num].isDone === true){
            listElement.classList.add("active")
        }
        deleteBtn.addEventListener("click" , function(event){
            let selectedItem = event.target.getAttribute("data-id")
            deleteItem(selectedItem)
        })
        ul.append(listElement);
    }
}
function deleteItem(selectedItem){
   todoList.splice( todoList.findIndex(function(item){
    if (item.subject == selectedItem){
        return true
    }
   }) , 1)
   displayTodos()
}
displayTodos();