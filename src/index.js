document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('[type=submit]').addEventListener("click", function(event){
    event.preventDefault();
  }, false);
  document.querySelector('[type=submit]').addEventListener("click",
    function(event){
      let input = document.getElementById("new-task-description").value;

      let tasks = document.getElementById("tasks");
      let li = document.createElement("li");
      let li = tasks.appendChild("li");
      li.innerHTML = input;
  })

})
