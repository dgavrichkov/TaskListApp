import React from "react";
import PropTypes from "prop-types";
import { TaskItem } from "./TaskItem";
import styled from "styled-components";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TaskList = ({ pageClass, tasks, onDoneTask, onDeleteTask }) => {
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

  return <StyledList className={pageClass}>{listItems}</StyledList>;
};

TaskList.propTypes = {
  tasks: PropTypes.array
};

TaskList.defaultProps = {
  tasks: []
};
