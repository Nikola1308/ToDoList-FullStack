console.log('Started')

const url = new URL('http://localhost:3001/todos')

// GET Request for all Tasks
const getTodos =()=>{
    fetch(url,{method:"get"}).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
    })
}
getTodos()

// POST Request for Tasks
document.getElementById('inputText').addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        let input = document.getElementById('inputText')
        let inputValue = input.value
        
        fetch('http://localhost:3001/todos',{
            method:'POST',
            body:JSON.stringify({value:inputValue}),
            headers: {
                "Content-type": 'application/json',
                'Accept': "application/json"
            }
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
       } 
})  

//GET Request for ToDoTasks
const getToDoTasks = () =>{
    fetch('http://localhost:3001/todos/tasktodo',{
        method:'GET'
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log('TODOTASKS',data)
    })
}
getToDoTasks()

//GET Request for DoneTasks
const getDoneTasks = () =>{
    fetch('http://localhost:3001/todos/taskdone',{
        method:'GET'
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log('DONE TASKS',data)
    })
}
getDoneTasks()

//GET Request for DeletedTasks
const getTaskDeleted = ()=>{
    fetch('http://localhost:3001/todos/taskdeleted',{
        method:'GET'
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log('DELETED TASKS',data)
    })
}
getTaskDeleted()

//PATCH Request for Updating To DoneCard
document.getElementById('test1').addEventListener('click',()=>{
    const getUpdateToDoneCard = () =>{
        fetch('http://localhost:3001/todos/tocdone/5d1dae5810c132322060871e',{
            method: 'PATCH',
            headers: {
                "Content-type": 'application/json',
                'Accept': "application/json"
            },
            body:JSON.stringify()
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
    }
    getUpdateToDoneCard()
})
//PATCH Request for Updating To DeleteCard
document.getElementById('test2').addEventListener('click',()=>{
    const getUpdateToDeleteCard = ()=>{
        fetch('http://localhost:3001/todos/tocdel/5d1dae5810c132322060871e',{
            method: 'PATCH',
            headers: {
                "Content-type": 'application/json',
                'Accept': "application/json"
            },
            body:JSON.stringify()
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
    }
    getUpdateToDeleteCard()
})
//PATCH Request for udpdating to ToDoTask
document.getElementById('test3').addEventListener('click',()=>{
    const getUpdateToDoTask = ()=>{
        fetch('http://localhost:3001/todos/toctodo/5d1dae5810c132322060871e',{
            method: 'PATCH',
            headers: {
                "Content-type": 'application/json',
                'Accept': "application/json"
            },
            body:JSON.stringify()
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
    }
    getUpdateToDoTask()
})
//DELET Request for Any of Tasks
document.getElementById('delete').addEventListener('click',()=>{
    const deleteTask = ()=>{
        fetch('http://localhost:3001/todos/5d1dae5810c132322060871e',{
            method:'DELETE',
            headers: {
                "Content-type": 'application/json',
                'Accept': "application/json"
            },
            body:JSON.stringify()
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log('DELETET TASK',data)
        })
    }
    deleteTask()
})


//==========DESCRIPTION POSTS========//

//Post request for Description 
document.getElementById('description').addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        let input = document.getElementById('description')
        let inputValue = input.value
        
        fetch('http://localhost:3001/todos/desctiption',{
            method:'POST',
            body:JSON.stringify({descriptionValue:inputValue}),
            headers: {
                "Content-type": 'application/json',
                'Accept': "application/json"
            }
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
        })
       } 
})  

//Post Request for Reading All Descriptions
document.getElementById('description-read').addEventListener('click',()=>{
    const getDescriptions =()=>{
        fetch('http://localhost:3001/todos/description',{method:"get"}).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log('DESCRIPTIONS',data)
        })
    }
    getDescriptions()

})
//Delete Request for Delete By ID
document.getElementById('description-delete').addEventListener('click',()=>{
    const deleteTask = ()=>{
        fetch('http://localhost:3001/todos/desctiption/5d1f3bc82b26d410c4d36935',{
            method:'DELETE',
            headers: {
                "Content-type": 'application/json',
                'Accept': "application/json"
            },
            body:JSON.stringify()
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log('DELETED DESCRIPTION',data)
        })
    }
    deleteTask()    
})







