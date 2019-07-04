const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TimeToDoTasks = new Schema({
    1:{        
        type:String,
        default:'Today'
    },
    2:{
        type:String,
        default:'Tomorrow'
    },
    3:{
        type:String,
        default:'In Seven Days'
    },
    4:{
        type:String,
        default:'In One Month'
    }
})
module.exports = mongoose.model('TimeToDoTasks',TimeToDoTasks)

const ToDoList = new Schema({
    value:{
        type:String
    },
    typeOfCard:{
        type:String,
        enum:['TaskToDo','TaskDone','TaskDeleted'],
        default:'TaskToDo'
    },
    timeToDoTasks:[
        //refernca  type na number
        {type:Schema.Types.ObjectId,ref:'TimeToDoTasks'}
    ]
})
module.exports = mongoose.model('ToDoList',ToDoList)



/*
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
const TimeToDoTasks = mongoose.model('TimeToDoTasks',{
    today:{
        type:String
    },
    tomorow:{
        type:String
    },
    sevendays:{
        type:String
    },
    onemonth:{
        type:String
    }
})


module.exports = ('ToDoList',TodoList) */