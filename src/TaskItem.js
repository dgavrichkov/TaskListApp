import React from "react";
import PropTypes from "prop-types";

export const TaskItem = ({ name, tag, id, done, onDoneTask, onDeleteTask }) => {
  return (
    <div className={`task-item ${done ? "task-item--done" : ""}`}>
      <b>{name}</b>
      <i>{tag}</i>
      <button
        type="button"
        className="task-item__done"
        onClick={() => {
          onDoneTask(id);
        }}
      >
        {!done ? "Done" : "Not Done"}
      </button>
      <button
        type="button"
        className="task-item__delete"
        onClick={() => {
          onDeleteTask(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

TaskItem.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  id: PropTypes.string,
  done: PropTypes.bool,
  onDoneTask: PropTypes.func,
  onDeleteTask: PropTypes.func
};
