import Task from "../models/todo.models.js";

export const addTask = async (req, res) => {
    try {
        const newTask = new Task(req.body)
        await newTask.save()
        res.status(201).send(newTask)
    } catch(err) {
        res.status(400).send(err)
    }
}

export const getTask = async (req, res) => {
    res.send("Hello")
}