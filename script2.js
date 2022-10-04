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
        listElement.innerHTML = todoList[num].subject;
        if(todoList[num].isDone === true){
            listElement.classList.add("active")
        }
        ul.append(listElement);
    }
}
displayTodos();