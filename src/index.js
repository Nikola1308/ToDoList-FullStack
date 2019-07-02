const express = require('express')
require('./mongodb/mongoose')
const ToDoList = require('./models/ToDoList')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

//Endpoint post for posting Tasks
app.post('/todos',(req,res)=>{
    const todo = new ToDoList(req.body)

    todo.save().then(()=>{
        res.status(201).send(todo)
    }).catch((e)=>{
        res.status(400).res.send()
    })
})

//Endpoint for reading Tasks
app.get('/todos',(req,res)=>{
    ToDoList.find({typeOfCard:'TaskToDo'}).then((tasks)=>{
        res.send(tasks)
    }).catch((e)=>{
        res.status(500).res.send()
    })
})
//Endpoint for reading Tasks 
app.get('/todos/:id',(req,res)=>{
    const _id =  req.params.id
    ToDoList.findById(_id).then((task)=>{
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()

    })
})

app.listen(port,()=>{
    console.log('Serve is up on port: ' + port)
})
