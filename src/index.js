const express = require('express')
require('./mongodb/mongoose')
//const ToDoList = require('./models/ToDoList')
const toDoList = require('./routers/toDoListRouts')
// const cors = require('cors')

const app = express()

const port = process.env.PORT || 3001

app.use(express.json())
app.use(toDoList)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// app.use(cors())






app.listen(port,()=>{
    console.log('Serve is up on port: ' + port)
})
