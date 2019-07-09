const express = require('express')
require('./mongodb/mongoose')
//const ToDoList = require('./models/ToDoList')
const toDoList = require('./routers/toDoListRouts')
const descriptionRouts = require('./routers/descriptionRouts')


const app = express()

const port = process.env.PORT || 3001
app.use((req,res,next)=>{
    next();
})
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,'Autorization");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods",'PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json()
    }
    next();
  });

app.use(descriptionRouts,toDoList)


app.listen(port,()=>{
    console.log('Serve is up on port: ' + port)
})
