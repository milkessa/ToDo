import Task from '../models/taskModel.js';

export const getTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const saveTask = async (req, res) => {
    const { text } = req.body;

    try {
        const newTask = await Task.create({ text });
        console.log('Added Successfully...');
        console.log(newTask);
        res.send(newTask);
    } catch (err) {
        res.status(400).send(err);
    }
};