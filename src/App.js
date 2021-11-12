import React, { useState, useCallback, useRef, useEffect } from "react";
import { TaskList } from "./TaskList";
import { CreateForm } from "./CreateForm";
import { TagFilter } from "./TagFilter";
import { TaskStat } from "./TaskStat";
import { nanoid } from "nanoid";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Button } from "./components/Button";

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

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Rubik", sans-serif;
    background: ${(props) => props.theme.colors.primary};
  }
  a, button, input, textarea {
    &:focus:not(:focus-visible) {
      outline: 0;
    }
    &:focus-visible,
    &:-moz-focusring {
      outline: 1px solid ${(props) => props.theme.colors.accent}
    }
  }
`;

const themes = {
  default: {
    colors: {
      primary: "#EEEEEE",
      accent: "#25CEDE",
      text: "#687891"
    },
    shadows: {
      button:
        "-5.0934px -5.0934px 15.2802px rgba(255, 255, 255, 0.5), 5.0934px 5.0934px 15.2802px rgba(136, 160, 183, 0.25);",
      input:
        "inset -5.9893px -5.9893px 17.9679px rgba(255, 255, 255, 0.5), inset 5.9893px 5.9893px 17.9679px rgba(136, 160, 183, 0.25);",
      buttonInset:
        "inset -5.0934px -5.0934px 15.2802px rgba(255, 255, 255, 0.5),inset 5.0934px 5.0934px 15.2802px rgba(136, 160, 183, 0.25);"
    }
  },
  dark: {
    colors: {
      primary: "#2C2F33",
      accent: "#25CEDE",
      text: "#eeeeee"
    },
    shadows: {
      button:
        "-6.22302px -6.22302px 18.6691px #3B4451, 6.22302px 6.22302px 18.6691px #000000;",
      input:
        "inset -6.22302px -6.22302px 18.6691px #3B4451, inset 6.22302px 6.22302px 18.6691px #000000;",
      buttonInset:
        "inset -6.22302px -6.22302px 18.6691px #3B4451, inset 6.22302px 6.22302px 18.6691px #000000;"
    }
  }
};

const ThemeSwitcher = (props) => {
  return (
    <Button
      onClick={() => {
        props.onThemeClick();
      }}
    >
      Switch Theme
    </Button>
  );
};

const StyledPageWrap = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  color: ${(props) => props.theme.colors.text || `#000`};
  .header {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form {
    grid-column: 1 / -1;
  }
  .list {
    grid-column: 1;
  }
  .filter {
    grid-column: 2;
  }
  .stat {
    grid-column: 1 / -1;
  }
`;

export const App = function () {
  const [tasks, setTasks] = useState(LOADED_TASKS);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("default");

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

  const handleSwitchTheme = () => {
    if (theme === "default") {
      setTheme("dark");
    } else {
      setTheme("default");
    }
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <StyledPageWrap className="page">
        <header className="header">
          <h1>ToDo</h1>
          <ThemeSwitcher onThemeClick={handleSwitchTheme} />
        </header>
        <CreateForm onAddTask={addTask} pageClass="form" />
        <TaskStat
          pageClass="stat"
          countAllTasks={countAllTasks()}
          countDoneTasks={countDoneTasks()}
        />
        <TaskList
          pageClass="list"
          tasks={filteredTasks(filter)}
          onDoneTask={doneTask}
          onDeleteTask={deleteTask}
        />
        <TagFilter
          pageClass="filter"
          tasks={tasks}
          currentFilter={filter}
          onPickTag={filterTasklist}
        />
      </StyledPageWrap>
    </ThemeProvider>
  );
};
