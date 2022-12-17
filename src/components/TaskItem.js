import React from "react";

function TaskItem({ task, setStatus, removeTask }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <span className="label">{task.title}</span>
      <div className="actions">
        <input
          type="checkbox"
          className="btn-action btn-action-done"
          checked={task.status ? true : false}
          onChange={(e) => setStatus(task.id, e.target.checked)}
        />
        <button
          onClick={() => removeTask(task.id)}
          className="btn-action btn-action-delete"
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
