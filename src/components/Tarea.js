import React, { useState } from "react";

const Tarea = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  //Creamos componentes dentro de Tarea
  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setNewValue(value);
    };

    const handleCLickUpdateTodo = ()=>{
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        ></input>
        <button className="button" onClick={handleCLickUpdateTodo}>Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};

export default Tarea;
