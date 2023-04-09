const list = [
        {name: 'create a post', status: 'In progress', priority: 'low'},
        {name: 'test', status: 'Done', priority: 'high'},
    {name:'programs',status:'To Do',priority:'high'}
];
function changeStatus(task,status,priority){
    const findTask = list.findIndex(list=>list.name === task)
    list[findTask].status = status;
    list[findTask].priority = priority
}
function addTask(task,status,priority) {
    const addTask = {name:task,status:status,priority:priority}
    list.push(addTask)
    
}
function deleteTask(task){
    const findTask = list.findIndex(list=>list.name === task)
    list.splice(findTask,1)
}
function showList(){

    // In progress
    
    const findInProgress = list.filter(list => list.status === 'In progress')
    console.log('In progress:\t')
    if (findInProgress.length === 0){
        console.log(" - ")
    } else {
        findInProgress.forEach(findInProgress=> {
            console.log(findInProgress.name + ' - ' + findInProgress.priority)}
        )
    }
   
   // Done
    
    const findInDone = list.filter(list => list.status === 'Done')
    console.log('Done:\t')
    if (findInDone.length === 0) {
        console.log(' - ')
    } else {
        findInDone.forEach(findInDone=> {
            console.log(findInDone.name + ' - ' + findInDone.priority)}
        )
    }
    
    // TODO
    
    const findToDo = list.filter(list => list.status === 'To Do')
    console.log('To Do:\t')
    if (findToDo.length === 0) {
        console.log(" - ")
    }else {
    findToDo.forEach(findToDo=> {
        console.log(findToDo.name + ' - ' + findToDo.priority)}
    )}
}
    
    

deleteTask('programms:')
addTask('Wash','Done','low')
changeStatus('Wash','', 'high')
showList()