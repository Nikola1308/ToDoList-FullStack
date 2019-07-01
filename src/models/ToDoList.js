const mongoose = require('mongoose')

const TodoList = mongoose.model('TodoList',{
    value:{
        type: String
    },
    taksToDo:{
        type:Boolean
    },
    taskDone:{
        type:Boolean
    },
    taskDeleted:{
        type:Boolean
    }

})


module.exports = TodoList