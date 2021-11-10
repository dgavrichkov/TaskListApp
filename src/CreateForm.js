import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CreateForm = React.memo(({ pageClass, onAddTask }) => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    console.log("CreateForm rendered");
  });

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
    <form className={`todo-create ${pageClass}`}>
      <input
        type="text"
        className="todo-create__name"
        placeholder="add task"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        className="todo-create__tag"
        placeholder="tag"
        value={tag}
        onChange={handleTagChange}
      />
      <button type="button" className="todo-create__submit" onClick={handleAdd}>
        Add
      </button>
      <button
        type="button"
        className="todo-create__clear"
        onClick={handleClear}
      >
        Clear
      </button>
    </form>
  );
});

CreateForm.propTypes = {
  pageClass: PropTypes.string,
  onAddTask: PropTypes.func
};
