document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener("submit", function(event){
    let input = document.getElementById("new-task-description").value;
    let tasks = document.getElementById("tasks");
    //let li = document.createElement("li");
    tasks.appendChild(input);
    //li.innerHTML = input;
    event.preventDefault(); return false;
  });


})
