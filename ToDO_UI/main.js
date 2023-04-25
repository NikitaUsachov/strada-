

let addTaskInFormButton = document.getElementById('addTaskButton');

function addTask(){
    console.log('sdsdsd')
    let inputForm= document.getElementById('addTask').value
    let newElementTask = document.createElement('div');
    newElementTask.textContent = inputForm;
    newElementTask.classList.add('task-block')
}


addTaskInFormButton.addEventListener('click', addTask)