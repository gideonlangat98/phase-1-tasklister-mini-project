document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    addToDo(e.target.add.value)
    form.reset()
  })
});

function addToDo(theList) {
  let newList = document.createElement('list')
  let butn = document.createElement('button')
  let task = document.createElement('tasks')

  newList.innerHTML = `${theList}`
  butn.innerHTML = 'deleteToDo'
  butn.addEventListener("click", deleteToDo)
  newList.appendChild(butn)
  task.appendChild(newList)
}
addToDo(theList);

function deleteToDo(e) {
  e.target.parentNode.remove();
}


