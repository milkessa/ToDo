import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    text:{
        type: String,
        require: true
    }
})

const Task=mongoose.model('Task', todoSchema)

export default Task;