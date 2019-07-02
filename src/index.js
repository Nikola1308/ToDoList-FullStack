const express = require('express')
require('./mongodb/mongoose')
const ToDoList = require('./models/ToDoList')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

//Endpoint post for posting Tasks
app.post('/todos', async (req,res)=>{
    const todo = new ToDoList(req.body)
    try{
        await todo.save()
        res.status(201).send(todo)
    }catch(e){
        res.status(400).send(e)
    }
})

//Endpoint for reading all Tasks
app.get('/todos',async(req,res)=>{
    try{
        const tasks = await ToDoList.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
})

//Endpoint for reading Tasks of TaskToDo by type
app.get('/todos/tasktodo',async(req,res)=>{
    try{
        const task = await ToDoList.find({typeOfCard:'TaskToDo'})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
}) 
//Endpoint for reading Tasks of TaskDone by type
app.get('/todos/taskdone',async(req,res)=>{
    try{
        const task = await ToDoList.find({typeOfCard:'TaskDone'})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
//Endpoint for reading Task of TaskDeleted by type
app.get('/todos/taskdeleted', async(req,res)=>{    
    try{
        const task = await ToDoList.find({typeOfCard:'TaskDeleted'})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
//Endpoint for reading any Task by id 
app.get('/todos/tasks/:id',async(req,res)=>{
    const _id =  req.params.id
    try{
        const task = await ToDoList.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})
//Endpoint for updating TypeOfCard-from ToDoTask to DoneTask
app.patch('/todos/taskstodotasktodonetask/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await ToDoList.findByIdAndUpdate(_id,{typeOfCard:'TaskDone'},{new:true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})
//Endpoint for updating TypeOfCard-from DoneTask to TaskDeleted
app.patch('/todos/tasksdonetotaskdelete/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await ToDoList.findByIdAndUpdate(_id,{typeOfCard:'TaskDeleted'},{new:true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(400).send()
    }
})
//Endpoint for updating TypeOfCard-from DoneTask to ToDoTask
app.patch('/todos/taskdonetotask/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await ToDoList.findByIdAndUpdate(_id,{typeOfCard:'TaskToDo'},{new:true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(400).send()
    }
})
//Endpoint for updating TypeOfCard-from TaskDeleted to DoneTask
app.patch('/todos/taskdeletedtotaskdone/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await ToDoList.findByIdAndUpdate(_id,{typeOfCard:'TaskDone'},{new:true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(400).send()
    }
})
//Endpoint for deleting from ToDoTask
app.delete('/todos/deletetodotask/:id',async(req,res)=>{
     const _id = req.params.id
     try{
        const task = await ToDoList.findByIdAndDelete(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
     }catch(e){
         res.status(400).send()
     }
})
//Endpoint for deleting from TaskDeleted
app.delete('/todos/deletetaskdeleted/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await ToDoList.findByIdAndDelete(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(400).send()
    }
})



app.listen(port,()=>{
    console.log('Serve is up on port: ' + port)
})
