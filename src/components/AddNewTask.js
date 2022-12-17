import React from "react";

function AddNewTask({ handleSubmit, newTask, handleNewTask }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        type="text"
        id="newitem"
        value={newTask}
        onChange={handleNewTask}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddNewTask;
