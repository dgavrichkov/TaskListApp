import React from "react";
import PropTypes from "prop-types";
import { Button } from "./components/Button";
import styled from "styled-components";

const StylesWrap = styled.div`
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.button};
  padding: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7px;
  column-gap: 14px;
  border: 1px solid transparent;

  & > .name {
    display: block;
    grid-column: 1 / -1;
  }

  .tag {
    display: block;
    grid-column: 1;
    grid-row: 2;
  }

  .done {
    grid-row: 3;
    grid-column: 1;
  }

  .delete {
    grid-column: 2;
    grid-row: 3;
  }

  ${(props) =>
    props.done &&
    `
      opacity: 0.5;
      .name {
        text-decoration: line-through;
        opacity: 0.6;
      }
  `}
`;

export const TaskItem = ({ name, tag, id, done, onDoneTask, onDeleteTask }) => {
  return (
    <StylesWrap className={`task-item`} done={done}>
      <b className="name">{name}</b>
      <i className="tag">{tag}</i>
      <Button
        type="button"
        className="done"
        onClick={() => {
          onDoneTask(id);
        }}
      >
        {!done ? "Done" : "Not Done"}
      </Button>
      <Button
        type="button"
        className="delete"
        onClick={() => {
          onDeleteTask(id);
        }}
      >
        Delete
      </Button>
    </StylesWrap>
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
