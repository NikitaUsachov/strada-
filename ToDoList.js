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
        let i = 0;
        console.log("---To Do List---")
        console.log("In Progress:")
        for (const name in Todo.list) {
            if (this.list[name] === "In Progress") {
                console.log(`\t` + name)
                i++
            }
            if ( i===0 ){
                console.log(`\t` + "-")
                break
            }
        }    
        console.log("Done:")
        for (const name in Todo.list){
            if (this.list[name]=== "Done"){
                console.log(`\t` + name)
                i++
            }
            if ( i===0 ){
                console.log(`\t` + "-")
                break
            }
        }
        console.log("To Do:")
        for (const name in Todo.list){
            if (this.list[name] === "To Do"){
                console.log(`\t` + name)
                i++
            }
            if ( i===0 ){
                console.log(`\t` + "-")
                break
            }
        }
    }
}
Todo.addTask("shower")
Todo.changeStatus("make a bed","Done")
Todo.deleteTask("make a bed")
Todo.showList()