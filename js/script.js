//Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#todo-form");
const cacelEditBtn = document.querySelector("#cacel-edit-btn");

//Funções

//Eventos
todoForm.addEventListener("submit", (e)=>{
  e.preventDefault();

  const inputValue = todoInput.value

  if(inputValue){
    console.log(inputValue);
    //save ToDo
  }
})