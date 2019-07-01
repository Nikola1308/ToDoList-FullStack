const express = require('express')
require('./mongodb/mongoose')
const ToDoList = require('./models/ToDoList')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.post('/todos',(req,res)=>{
    const todo = new ToDoList(req.body)

    todo.save().then(()=>{
        res.send(todo)
    }).catch(()=>{
        
    })
})

app.listen(port,()=>{
    console.log('Serve is up on port: ' + port)
})
