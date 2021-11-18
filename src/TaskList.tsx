import React, { FC } from "react";
import { TaskItem } from "./TaskItem";
import styled from "styled-components";
import { ITask } from "./types/types";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface ListProps {
  pageClass: string;
  tasks: ITask[];
  onDoneTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: FC<ListProps> = ({
  pageClass,
  tasks,
  onDoneTask,
  onDeleteTask
}) => {
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
