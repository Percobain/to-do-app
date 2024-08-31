const mongoose = require('mongoose');
const Todos = require('../models/Todos');

const getTodos = async (req, res) => {
    try {
        const allTodos = await Todos.find({}).sort({ createdAt: -1 });
        res.status(200).send(allTodos);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createTodo = async (req, res) => {
    const dbTodo = req.body;
    try {
        const newTodo = await Todos.create(dbTodo);
        res.status(201).send(newTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No todo with that id ${id}`);
        }
        const todoId = { _id: id };
        const update = { completed: true };
            const updateTodos = await Todos.findOneAndUpdate(todoId, update);
            if (!updateTodos) {
                return res.status(404).send(`No todo with that id ${id}`);
            }
        res.status(200).send(updateTodos);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const editTodo = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No todo with that id ${id}`);
        }
        const todoId = { _id: id };
        const update = { text: text };
        const updateTodos = await Todos.findOneAndUpdate(todoId, update, { new: true });
        if (!updateTodos) {
            return res.status(404).send(`No todo with that id ${id}`);
        }
        res.status(200).send(updateTodos);
    } catch (error) {
        res.status(500).send(error.message);
    }    
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No todo with that id ${id}`);
        }
        const deleteTodos = await Todos.findOneAndDelete({ _id: id });
        res.status(200).send(deleteTodos);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getTodos,
    createTodo,
    editTodo,
    updateTodo,
    deleteTodo
}