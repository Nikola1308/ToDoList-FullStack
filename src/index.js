const express = require('express')
require('./mongodb/mongoose')
//const ToDoList = require('./models/ToDoList')
const toDoList = require('./routers/toDoListRouts')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(toDoList)






app.listen(port,()=>{
    console.log('Serve is up on port: ' + port)
})
