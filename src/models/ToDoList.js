const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AddDescriptionsForTasks = new Schema({
    descriptionValue:{
        type:String
    }
})
module.exports.AddDescriptionsForTasks = mongoose.model('AddDescriptionsForTasks',AddDescriptionsForTasks)

const ToDoList = new Schema({
    value:{
        type:String
    },
    typeOfCard:{
        type:String,
        enum:['TaskToDo','TaskDone','TaskDeleted'],
        default:'TaskToDo'
    },
    descriptionsOfCards:[
        //refernca  type na number
        //{type:Number,ref:'TimeToDoTasks'},
        {type: Schema.Types.ObjectId, ref:'AddDescriptionsForTasks'}
    ] 
})
module.exports.ToDoList = mongoose.model('ToDoList',ToDoList)



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