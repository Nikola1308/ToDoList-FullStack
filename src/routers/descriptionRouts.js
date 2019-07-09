const express = require('express')
const toDoAllModles = require('../models/ToDoList')
const router = new express.Router()

//Endpoint for POST request for AddDescriptionForTask
router.post('/todos/desctiption',async(req,res)=>{
    const desctiption = new toDoAllModles.AddDescriptionsForTasks({
        descriptionValue:req.body.descriptionValue
    })
    try{
        await desctiption.save()
        res.status(201).send(desctiption)
    }
    catch(e){
        res.status(400).send(e)
    }
})

//Endpoint for Reading all Descriptions
router.get('/todos/description',async(req,res)=>{
    try{

    const description = await toDoAllModles.AddDescriptionsForTasks.find({})
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(description)
    }
    catch(e){
    res.status(500).send(e)
    }
})

//Endpoint for DELETING request for Description
router.delete('/todos/desctiption/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const description = await toDoAllModles.AddDescriptionsForTasks.findByIdAndDelete(_id)
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
