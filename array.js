const task = ['go to gym', 'crete new program','sleep']
task.push('huy')
task.pop()
task.shift()
task.unshift('go_home')
task.splice(0,1,"see a movie")
for (i of task){
    console.log(i)
}