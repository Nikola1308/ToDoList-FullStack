const mongoose = require('mongoose')

const TodoList = mongoose.model('TodoList',{
    value:{
        type:String
    },
    typeOfCard:{
        type:String,
        enum:['TaskToDo','TaskDone','TaskDeleted'],
        default:'TaskToDo'
    }
})


module.exports = TodoList