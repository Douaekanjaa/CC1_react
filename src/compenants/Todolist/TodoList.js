import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import './TodoList.css';
import trash from '../Todolist/images/trash.png';
import edit from '../Todolist/images/edit.png';
import check from '../Todolist/images/check.png';
import { useTheme } from '../dark_light/ThemeContext';

function TodoList() {
  const { darkMode } = useTheme();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: uuidv4(), text: newTask.trim(), completed: false }
      ]);
      setNewTask('');
    }
  };

  const startEditing = (id, text) => {
    setEditTask(id);
    setEditedTaskText(text);
    setIsEditing(true);
  };

  const saveEditedTask = (id, text) => {
    if (text.trim() === '') {
      alert("You can't add an empty task");
    } else {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, text: text.trim() } : task
      );
      setTasks(updatedTasks);
      setEditTask(null);
      setIsEditing(false);
    }
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <Container  className={`cool-todo-container${darkMode ? ' dark-mode' : ''}`}>
      <div className='TodoList2'>
        <h1>To-Do List</h1>
      </div>
      <Container className={`cool-todo-list${darkMode ? ' dark-mode' : ''}`} >
        <Row className="task-input">
          <Col xs={8} md={9}>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={handleTaskChange}
              />
            </InputGroup>
          </Col>
          <Col xs={4} md={3}>
            <Button onClick={addTask} className="cool-add-btn ">
              <span className='' >Add</span>
            </Button>
          </Col>
        </Row>
        <ul className="cool-task-list">
          {tasks.map((task) => (
            <li key={task.id} className={`cool-task-item ${task.completed ? 'completed' : ''}`}>
              {editTask === task.id ? (
                <div className="cool-edit-task">
                  <InputGroup>
                    <FormControl
                      type="text"
                      value={editedTaskText}
                      onChange={(e) => setEditedTaskText(e.target.value)}
                      style={{ outline: "none" }}
                    />
                  </InputGroup>
                  <img
                    src={check}
                    className="cool-task-icon"
                    onClick={() => saveEditedTask(task.id, editedTaskText)}
                    alt="save"
                  />
                </div>
              ) : (
                <span className="cool-task-text">{task.text}</span>
              )}
              {isEditing && editTask === task.id ? null : (
                <img
                  src={edit}
                  className="cool-task-icon cool-edit-icon"
                  onClick={() => startEditing(task.id, task.text)}
                  alt="edit"
                />
              )}
              {isEditing && editTask === task.id ? null : (
                <img
                  src={trash}
                  className="cool-task-icon cool-remove-icon"
                  alt="remove"
                  onClick={() => removeTask(task.id)}
                />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  );
}

export default TodoList;
