document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", function(event){
    let input = document.getElementById("new-task-description").value;

    let tasks = document.getElementById("tasks");
    let li = document.createElement("li");
    tasks.appendChild("li");
    li.innerHTML = input;
    event.preventDefault();
  }, false);


})
