const highPriorityList = [
    { name: "create a post", status: "In progress", priority: "high" },
    { name: "test", status: "Done", priority: "high" },
    { name: "programs", status: "To Do", priority: "high" },
];

const lowPriorityList = [];

const highPriorityForm = document.forms[0];
const highPriorityInputForm = document.getElementById("tasks-priority-high");
const highPriorityRendDiv = document.getElementById("addedTask");

const lowPriorityForm = document.forms[1];
const lowPriorityInputForm = document.getElementById("tasks-priority-low");
const lowPriorityRendDiv = document.querySelector(".tasks-priority-low");

function addInArray(event, list, inputForm, rendDiv) {
    event.preventDefault();
    const task = inputForm.value;
    const addTask = { name: task, status: "To Do", priority: "Low" };
    list.push(addTask);
    inputForm.value = "";
    render(list, rendDiv);
}

function render(list, rendDiv) {
    rendDiv.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const newDiv = document.createElement("div");
        // const taskName = document.createElement("span");
        const newLabel = document.createElement('label')
        const checkbox = document.createElement("input");
        const divTextCont = document.createElement('div')
        const closeBtn = document.createElement("button");
        const taskItemClass = list[i].priority === "high" ? "task-high-priority" : "task-low-priority";

        newDiv.className = `task-item task-high-priority`;
        divTextCont.textContent = list[i].name;
        divTextCont.className = "checkbox-text"
        checkbox.type = "checkbox";
        checkbox.className = "input-checkbox"
        checkbox.name = ""
        checkbox.checked = list[i].status === "Done";
        closeBtn.classList.add("btn-task-delete");

        closeBtn.addEventListener("click", () => {
            list.splice(i, 1);
            render(list, rendDiv);
        });

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                list[i].status = "Done";
            } else {
                list[i].status = "To Do";
            }
        });
        rendDiv.appendChild(newDiv);
        newDiv.appendChild(newLabel);
        newLabel.appendChild(checkbox)
        newLabel.appendChild(divTextCont);
        newDiv.appendChild(closeBtn);
    }
}

highPriorityForm.addEventListener("submit", (event) => addInArray(event, highPriorityList, highPriorityInputForm, highPriorityRendDiv));
lowPriorityForm.addEventListener("submit", (event) => addInArray(event, lowPriorityList, lowPriorityInputForm, lowPriorityRendDiv));
window.addEventListener("load", () => {
    render(highPriorityList, highPriorityRendDiv);
    render(lowPriorityList, lowPriorityRendDiv);
});
