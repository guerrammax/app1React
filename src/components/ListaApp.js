import React, { useState } from "react";

const ListaApp = () => {
  const [title, setTitle] = useState("Hola");
  const [tareas, setTareas] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTitle("MAx");
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    const newTarea ={
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }

    //fomra legible
    const temp = [...tareas];// una copia
    temp.unshift(newTarea);//agrega al inicio
    setTareas(temp);
    //Forma simplificada
    //setTareas([...tareas, newTarea])
  }

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
          {
            tareas.map(item => (
              <div key={item.id}>{item.title}</div>             
            ))
          }
        </div>
      </div>
    </>
  );
};

export default ListaApp;
