let form = document.forms[0];
let formLow = document.forms[1];
let inputFormHigh = document.getElementById('tasks-priority-high');
let inputFormLow = document.getElementById('tasks-priority-low');
let addedTask = document.querySelector('.tasks-priority');
let addedTaskLow = document.querySelector('.tasks-priority-low');


try {
    function addTask(event) {
        event.preventDefault(); // Предотвращаем отправку формы на сервер
        if (event.target === form) {
            // первая форма
            let textTask = inputFormHigh.value;
            let newDiv = document.createElement('div');
            newDiv.className = 'task-item'
            let newLabel = document.createElement('label')
            newDiv.appendChild(newLabel);
            let newInput = document.createElement('input')
            newInput.type = "checkbox"
            newInput.className = 'input-checkbox'
            newLabel.appendChild(newInput);
            let newDivTextTask = document.createElement('div');
            newDivTextTask.className = 'checkbox-text'
            newDivTextTask.textContent = textTask
            newLabel.appendChild(newDivTextTask);
            let newButton = document.createElement('button')
            newButton.className = "btn-task-delete"
            newDiv.appendChild(newButton)
            addedTask.appendChild(newDiv)
            newButton.addEventListener('click', () => {
                newDiv.remove()
            })
            inputFormHigh.value = '';
            // const i = true;
            console.log('Данные отправлены из первой формы');

        } else if (event.target === formLow) {
            // вторая форма
            event.preventDefault(); // предотвращаем отправку формы на сервер
            let textTask = inputFormLow.value;
            let newDiv = document.createElement('div');
            newDiv.className = 'task-item'
            let newLabel = document.createElement('label')
            newDiv.appendChild(newLabel);
            let newInput = document.createElement('input')
            newInput.type = "checkbox"
            newInput.className = 'input-checkbox'
            newLabel.appendChild(newInput);
            let newDivTextTask = document.createElement('div');
            newDivTextTask.className = 'checkbox-text'
            newDivTextTask.textContent = textTask
            newLabel.appendChild(newDivTextTask);
            let newButton = document.createElement('button')
            newButton.className = "btn-task-delete"
            newDiv.appendChild(newButton)
            addedTaskLow.appendChild(newDiv);
            newButton.addEventListener('click', () => {
                newDiv.remove()
            })

            inputFormLow.value = '';
            console.log('Данные отправлены из второй формы');
        }
    }


    form.addEventListener('submit', addTask);
    formLow.addEventListener('submit', addTask);

} catch (err) {
    alert('Возникла ошибка!')
    alert(err.name)
}
