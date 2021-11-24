import React, { useState } from "react";
import { TaskList } from "./TaskList";
import { CreateForm } from "./CreateForm";
import { TagFilter } from "./TagFilter";
import { TaskStat } from "./TaskStat";
import { ThemeSwitcher } from "./ThemeSwitcher";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { IThemes } from "./types/types";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Rubik", sans-serif;
    background: ${(props: any) => props.theme.colors.primary};
  }
  a, button, input, textarea {
    &:focus:not(:focus-visible) {
      outline: 0;
    }
    &:focus-visible,
    &:-moz-focusring {
      outline: 1px solid ${(props: any) => props.theme.colors.accent}
    }
  }
`;

const THEMES: IThemes = {
  light: {
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

const StyledPageWrap = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  color: ${(props: any) => props.theme.colors.text || `#000`};
  .header {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  .list {
    grid-column: 1;
    grid-row: 3 / 6;
    align-content: start;
  }
  .filter {
    grid-column: 2;
    grid-row: 4;
  }
  .stat {
    grid-column: 2 / -1;
    grid-row: 3;
  }
`;

export const App = function () {
  const { tasks } = useTypedSelector((state) => state.tasks);
  const { toggleTaskAction, delTaskAction, addTaskAction } = useActions();
  const [filter, setFilter] = useState<string>("all");
  const [theme, setTheme] = useState<string>("dark");

  const filterTasklist = (tag: string) => {
    setFilter(tag);
  };

  const filteredTasks = (tag: string) => {
    if (tag !== "all") {
      return [...tasks].filter((task) => task.tag === tag);
    } else {
      return tasks;
    }
  };

  const countAllTasks = () => {
    return tasks.length;
  };

  const countDoneTasks = () => {
    return tasks.filter((task) => task.done).length;
  };

  const handleSwitchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <StyledPageWrap className="page">
        <header className="header">
          <h1>ToDo</h1>
          <ThemeSwitcher onThemeClick={handleSwitchTheme} />
        </header>
        <CreateForm onAddTask={addTaskAction} pageClass="form" />
        <TaskStat
          pageClass="stat"
          countAllTasks={countAllTasks()}
          countDoneTasks={countDoneTasks()}
        />
        <TaskList
          pageClass="list"
          tasks={filteredTasks(filter)}
          onDoneTask={toggleTaskAction}
          onDeleteTask={delTaskAction}
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
