import React, { useState, useCallback, useRef, useEffect } from "react";
import { TaskList } from "./TaskList";
import { CreateForm } from "./CreateForm";
import { TagFilter } from "./TagFilter";
import { nanoid } from "nanoid";

import "./styles.css";

const LOADED_TASKS = [
  {
    name: "1",
    tag: "regular",
    done: false,
    id: nanoid()
  },
  {
    name: "2",
    tag: "daily",
    done: true,
    id: nanoid()
  },
  {
    name: "3",
    tag: "daily",
    done: true,
    id: nanoid()
  }
];

export const App = function () {
  const [tasks, setTasks] = useState(LOADED_TASKS);
  const [filter, setFilter] = useState("all");

  const tasksRef = useRef();

  useEffect(() => {
    tasksRef.current = tasks;
  }, [tasks]);

  const addTask = useCallback((task) => {
    const newTask = Object.assign({}, task, { done: false, id: nanoid() });
    setTasks([...tasksRef.current, newTask]);
  }, []);

  const doneTask = useCallback(
    (id) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            task.done = !task.done;
          }
          return task;
        })
      );
    },
    [tasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks]
  );

  const filterTasklist = (tag) => {
    setFilter(tag);
  };

  const filteredTasks = (tag) => {
    if (tag !== "all") {
      return [...tasks].filter((task) => task.tag === tag);
    } else {
      return [...tasks];
    }
  };

  const countAllTasks = () => {
    return tasks.length;
  };

  const countDoneTasks = () => {
    return tasks.filter((task) => task.done === true).length;
  };

  return (
    <div className="page">
      <header className="page__header">
        <h1>ToDo</h1>
      </header>
      <CreateForm onAddTask={addTask} pageClass="page__form" />
      <div className="page__stat">
        Общее количество задач - {countAllTasks()}, Сделанных задач -{" "}
        {countDoneTasks()}
      </div>
      <TaskList
        pageClass="page__list"
        tasks={filteredTasks(filter)}
        onDoneTask={doneTask}
        onDeleteTask={deleteTask}
      />
      <TagFilter
        pageClass="page__filter"
        tasks={tasks}
        currentFilter={filter}
        onPickTag={filterTasklist}
      />
    </div>
  );
};
