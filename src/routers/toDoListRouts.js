const express = require('express')
const toDoAllModles = require('../models/ToDoList')
const router = new express.Router()


//Endpoint post for posting Tasks
router.post('/todos', async (req,res)=>{
    const todo = new toDoAllModles.ToDoList({ 
        value : req.body.value
      
    })
    try{
        await todo.save()
        res.status(201).send(todo)
    }catch(e){
        res.status(400).send(e)
    }
}) 

//Endpoint for reading all Tasks
router.get('/todos',async(req,res)=>{
    try{
        const tasks = await toDoAllModles.ToDoList.find({})
       // res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(tasks)
    }catch(e){
        res.status(500).send(e)
    }
})

//Endpoint for reading Tasks of TaskToDo by type
router.get('/todos/tasktodo',async(req,res)=>{
    try{
        const task = await toDoAllModles.ToDoList.find({typeOfCard:'TaskToDo'})
        if(!task){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
}) 
//Endpoint for reading Tasks of TaskDone by type
router.get('/todos/taskdone',async(req,res)=>{
    try{
        const task = await toDoAllModles.ToDoList.find({typeOfCard:'TaskDone'})
        if(!task){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
//Endpoint for reading Task of TaskDeleted by type
router.get('/todos/taskdeleted', async(req,res)=>{    
    try{
        const task = await toDoAllModles.ToDoList.find({typeOfCard:'TaskDeleted'})
        if(!task){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
//Endpoint for reading any Task by id 
router.get('/todos/tasks/:id',async(req,res)=>{
    const _id =  req.params.id
    
    try{
        const task = await toDoAllModles.ToDoList.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})
//Endpoint for updating TypeOfCard to TaskDone
router.patch('/todos/tocdone/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await toDoAllModles.ToDoList.findByIdAndUpdate(_id,{typeOfCard:'TaskDone'},{new:true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})
//Endpoint for updating TypeOfCard to TaskDeleted
router.patch('/todos/tocdel/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await toDoAllModles.ToDoList.findByIdAndUpdate(_id,{typeOfCard:'TaskDeleted'},{new:true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(task)
    }catch(e){
        res.status(400).send()
    }
})
//Endpoint for updating TypeOfCard to ToDoTask
router.patch('/todos/toctodo/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await toDoAllModles.ToDoList.findByIdAndUpdate(_id,{typeOfCard:'TaskToDo'},{new:true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(task)
    }catch(e){
        res.status(400).send()
    }
})

//Endpoint for deleting from Tasks by Id
router.delete('/todos/:id',async(req,res)=>{
     const _id = req.params.id
     try{
        const task = await toDoAllModles.ToDoList.findByIdAndDelete(_id)
        if(!task){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(task)
     }catch(e){
         res.status(400).send()
     }
})



//TESTING ENDPOINT 
//ENDPOINT FOR PATCH ONE DESCRIPTION
router.patch('/todos/tocdone/descirption/:id',async(req,res)=>{
    const _id = req.params.id
   
    const newDescription = new toDoAllModles.AddDescriptionsForTasks({
        descriptionValue: req.body.descriptionValue
    })   
    try{
        newDescription.save()

    const description = await toDoAllModles.ToDoList.findByIdAndUpdate(_id,
        {$addToSet:{descriptionsOfCards:newDescription}}
     ,{new:true,runValidators:true})

        if(!description){
            return res.status(404).send()            
        }   
        res.send(description)
    }catch(e){
        res.status(400).send(e) 
    }
    
})
//ENDPOINT FOR DELETING ONE DESCRIPTION
 
router.patch('/todos/desctiptiondelete/:id',async(req,res)=>{
    const _id = req.params.id
    const id = req.body.newDescription
       try{
        const delteId = await toDoAllModles.AddDescriptionsForTasks.findByIdAndDelete(id)
        const description = await toDoAllModles.ToDoList.findByIdAndUpdate(_id,
            {$pull:{descriptionsOfCards:id}},{new:true,runValidators:true})
        if(!description){
            return res.status(404).send()
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(description)
    }
    catch(e){
       res.status(400).send()
    }
}) 



module.exports = router