const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { db } = require('./db/db');

dotenv.config();

const { getTodos, createTodo, updateTodo, editTodo, deleteTodo } = require('./controllers/TodoController');

const app = express();


app.use(express.json());
app.use(cors());


PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    db();
    console.log(`Server is running on port ${PORT}`);
}) 


// API Endpoints
app.get('/todos', getTodos);
app.post('/todos', createTodo);
app.put('/todos/:id', updateTodo);
app.patch('/todos/:id', editTodo);
app.delete('/todos/:id', deleteTodo);