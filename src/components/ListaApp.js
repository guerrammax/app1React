import React, { useState } from "react";
import Tarea from "./Tarea";

const ListaApp = () => {
  const [title, setTitle] = useState("Hola");
  const [tareas, setTareas] = useState([]);

  // function handleClick(e) {
  //   e.preventDefault();
  //   setTitle("MAx");
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTarea = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    //fomra legible
    const temp = [...tareas]; // una copia
    temp.unshift(newTarea); //agrega al inicio
    setTareas(temp);
    setTitle("");
    //Forma simplificada
    //setTareas([...tareas, newTarea])
  };

  const handleUpdate = (id, value) => {
    const temp = [...tareas];
    const item = temp.find((item) => (item.id === id));
    item.title = value;
    setTareas(temp);
  };

  const handleDelete = (id) => {
    const temp = tareas.filter(item => item.id !== id)
    setTareas(temp);
  };

  return (
    <>
      <div>ListaApp</div>
      <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="todoInput"
            value={title}
          />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Create todo"
            className="buttonCreate"
          />
          {title}
        </form>

        <div className="tareasContainer">
          {tareas.map((item) => (
            <Tarea key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}></Tarea>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListaApp;
