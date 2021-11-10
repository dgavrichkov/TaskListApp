import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { TaskItem } from "./TaskItem";
import "./styles.css";

export const TaskList = ({ tasks, onDoneTask, onDeleteTask }) => {
  let listItems = null;
  if (tasks.length > 0) {
    listItems = tasks.map((task) => (
      <li className="tasks-list__item" key={task.id}>
        <TaskItem
          name={task.name}
          tag={task.tag}
          done={task.done}
          id={task.id}
          onDoneTask={onDoneTask}
          onDeleteTask={onDeleteTask}
        />
      </li>
    ));
  } else {
    listItems = "Задач нет";
  }

  useEffect(() => {
    // console.log("tasklist rendered");
  });

  return <ul className="tasks-list">{listItems}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.array
};

TaskList.defaultProps = {
  tasks: []
};
