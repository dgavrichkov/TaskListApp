import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, BoldButton } from "./components/Button";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 30px;
  input {
    grid-column: span 4;
    display: block;
    border: none;
    border-radius: 20px;
    padding: 10px 25px;
    font-size: 18px;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadows.input};
    color: inherit;
  }
  button {
    grid-column: span 2;
  }
`;

export const CreateForm = React.memo(({ pageClass, onAddTask }) => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const handleClear = () => {
    setName("");
    setTag("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleAdd = () => {
    if (!name || !tag) {
      return;
    }
    onAddTask({
      name: name,
      tag: tag
    });
    handleClear();
  };

  return (
    <StyledForm className={`todo-create ${pageClass}`}>
      <input
        type="text"
        placeholder="add task"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="tag"
        value={tag}
        onChange={handleTagChange}
      />
      <BoldButton type="button" onClick={handleAdd}>
        Add
      </BoldButton>
      <Button type="button" onClick={handleClear}>
        Clear
      </Button>
    </StyledForm>
  );
});

CreateForm.propTypes = {
  pageClass: PropTypes.string,
  onAddTask: PropTypes.func
};
