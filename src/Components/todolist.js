import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

export function ToDoList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleTask(event) {
    console.log("Event", event);
    setTask(event);
  }

  function addTask() {
    setTaskList([...taskList, task]);
    setTask("");
  }

  function removeTask(index) {
    setTaskList(
      taskList.filter((i) => {
        return i !== index.task;
      })
    );
  }

  const listStyle = {
    "marginTop": "5%",
    "maxWidth": "100%",
  };

	const onFormSubmit = e => {
		e.preventDefault()
		e.stopPropagation()
	}
  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formTaskList">
          <Form.Label>Task List</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => handleTask(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" onClick={addTask}>
          Submit
        </Button>
      </Form>
      {taskList.map((task, index) => (
        <ListGroup as="ul" style={listStyle}>
          <div className="mb-2" style={{"display":"flex"}}>
            <ListGroup.Item as="li" key={task}  style={{"display":"flex", "width":"100%"}}>
              {task}
            </ListGroup.Item>
            <Button variant="success" size="sm" onClick={ () => removeTask({task})}>
              Done
            </Button>{" "}
          </div>
        </ListGroup>
      ))}
    </div>
  );
}
