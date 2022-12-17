import React, { useState } from "react";
import "./App.css";
import AddNewTask from "./components/AddNewTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 1 },
  ]);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");
  const handleShowIncomplete = (e) => setShowIncomplete(e.target.checked);
  const handleNewTask = (e) => setNewTask(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = { id: Date.now(), title: newTask, status: 0 };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };
  const setStatus = (taskId, checked) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: checked ? 1 : 0 };
        }
        return task;
      })
    );
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <div className="container">
      <Header
        title="Todo List"
        subTitle="Get things done, one item at a time."
      />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setStatus={setStatus}
        removeTask={removeTask}
        handleShowIncomplete={handleShowIncomplete}
      />
      <AddNewTask
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleNewTask={handleNewTask}
      />
    </div>
  );
}

export default App;
