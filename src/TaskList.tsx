import React, { FC, useEffect } from "react";
import { TaskItem } from "./TaskItem";
import styled from "styled-components";
import { ITask } from "./types/types";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

type ListProps = {
  pageClass: string;
  tasks: ITask[];
};

type ItemsList = React.ReactNode;

export const TaskList: FC<ListProps> = ({ pageClass }) => {
  const { tasks, isLoading } = useTypedSelector((state) => state.tasks);
  const { fetchTasks, toggleTaskAction, delTaskAction } = useActions();

  useEffect(() => {
    fetchTasks();
  }, []);

  let listItems: ItemsList = null;
  if (tasks.length > 0) {
    listItems = tasks.map((task) => (
      <li className="tasks-list__item" key={task.id}>
        <TaskItem
          name={task.name}
          tag={task.tag}
          done={task.done}
          id={task.id}
          onDoneTask={toggleTaskAction}
          onDeleteTask={delTaskAction}
        />
      </li>
    ));
  } else if (isLoading) {
    listItems = "Подождите, идет запрос";
  } else {
    listItems = "Задач нет";
  }

  return <StyledList className={pageClass}>{listItems}</StyledList>;
};
