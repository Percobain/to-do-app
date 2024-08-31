import React, { useState } from "react";
import axios from "../../axios";
import { ListContainer, Row, TextContainer, Text, IconContainer, DeleteIcon, EditIcon, EditText } from "./styles";
import editSvg from "../../assets/edit.svg";
import deleteSvg from "../../assets/delete.svg";

export default function TodoList({ todos, fetchData }) {

  const [editing, setEditing] = useState(null);
  const [newText, setNewText] = useState("");

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

  const editTodo = async (id, text) => {
    try {
      const response = await axios.patch(`/todos/${id}`, {
        id,
        text,
      });
      fetchData();
      setEditing(null);
      return response.data.json;
    } catch (error) {
      console.log(error.message);
    }
  }

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

  const handleEdit = (id, text) => {
    setEditing(id);
    setNewText(text);
  }

  const handleEditText = (e) => {
    setNewText(e.target.value);
  }

  return (
    <div>
      <ListContainer>
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <TextContainer>
              {editing === todo._id ? (
                <EditText 
                  type="text" 
                  value={newText} 
                  onChange={handleEditText} 
                  onBlur={() => editTodo(todo._id, newText)}
                />
              ) : (
                <Text onClick={() => updateTodo(todo._id)} isCompleted={todo.completed}>{todo.text}</Text>
              )}
            </TextContainer>
            <IconContainer>
              <EditIcon src={editSvg} data-testid="edit" onClick={() => handleEdit(todo._id, todo.text)} />
              <DeleteIcon src={deleteSvg} data-testid="close" onClick={() => deleteTodo(todo._id)} />
            </IconContainer>
          </Row>
        ))}
      </ListContainer>
    </div>
  )
}