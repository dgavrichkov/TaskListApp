import React, { useState, FC } from "react";
import { Button, BoldButton } from "./components/Button";
import styled from "styled-components";
// import { TasksAction, TNewTask } from "./types/types";
import { useActions } from "./hooks/useActions";

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

type FormProps = {
  pageClass: string;
};

export const CreateForm: FC<FormProps> = React.memo(({ pageClass }) => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  const { addTaskAction } = useActions();

  const handleClear = () => {
    setName("");
    setTag("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const handleAdd = () => {
    if (!name || !tag) {
      return;
    }
    addTaskAction({
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
      <BoldButton buttonType="button" onClick={handleAdd}>
        Add
      </BoldButton>
      <Button buttonType="button" onClick={handleClear}>
        Clear
      </Button>
    </StyledForm>
  );
});
