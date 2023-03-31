const Todo = {
    list:{
        "create a new practice task": "In Progress",
        "make a bed": "Done",
        "write a post": "To Do"
    },
    changeStatus(task,status){
        this.list[task]=status
        console.log(task + " --Task changed")
    },
    addTask(newTask){
        this.list[newTask]="To Do"
        console.log(newTask + "--task added--")
    },
    deleteTask(task) {
        delete this.list[task]
        console.log(task + " --Task deleted--")
    },
    showList(){
        console.log("---To Do List---")
        for (const name in Todo.list){
            if (this.list[name]=== "In Progress"){
                console.log(this.list[name] + ":")
                console.log(name)
            }
            if (this.list[name]=== "Done"){
                console.log(this.list[name] + ":")
                console.log(name)
            }
            if (this.list[name]=== "To Do"){
                console.log(this.list[name] + ":")
                console.log(name)
            }
        }
    }
}
Todo.addTask("shower")
Todo.changeStatus("make a bed","Done")
Todo.deleteTask("make a bed")
Todo.showList()