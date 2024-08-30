import React from "react";
import axios from "../../axios";
import { ListContainer, Row, Text, DeleteIcon } from "./styles";

export default function TodoList({ todos, fetchData }) {

  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <ListContainer>
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <Text onClick={() => updateTodo(todo._id)} isCompleted={todo.completed}>{todo.text}</Text>
            <DeleteIcon data-testid="close" onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
          </Row>
        ))}
      </ListContainer>
    </div>
  )
}