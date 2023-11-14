import Task from '../models/taskModel.js';

export const getTask = async (req, res) => {
    const task=await Task.find()
    res.json(task)
};

export const saveTask = async (req, res) => {
    const { text } = req.body;

    Task
        .create({text})
        .then((data)=>{
            console.log("Added Seccessfully");
            console.log(data);
            res.send(data)
        })
};