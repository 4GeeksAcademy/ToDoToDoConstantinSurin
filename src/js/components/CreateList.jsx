import React, { useState, useEffect } from "react";

const ListaDeTareas = () => {
  const [escribir, setEscribir] = useState("");
  const [agregar, setAgregar] = useState([]);



  const eliminarTarea = async (id) => {
    const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE"
    })
    obtenerTarea();
  };

  const crearUsuario = async () => {

    const response = await fetch("https://playground.4geeks.com/todo/users/trivm1", {
      method: "POST"
    });
    const data = response.json()
    console.log("He creado el usuario");

  };



  const crearTarea = async () => {
    if (escribir.trim() === "") return;

    const response = await fetch("https://playground.4geeks.com/todo/todos/trivm1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        label: escribir,
        is_done: false
      })
    });
    setEscribir("");
    obtenerTarea();
    console.log("Tarea agregada");
  };

  const obtenerTarea = async () => {
    const response = await fetch("https://playground.4geeks.com/todo/users/trivm1")

    if (!response.ok) {
      crearUsuario();
      return
    }
    const data = await response.json()
    setAgregar(data.todos)
  }

  useEffect(() => {
    obtenerTarea();
  }, []);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="imagen d-flex flex-column p-4">
          <div className="d-flex align-items-center justify-content-between p-4">
            <input
              type="text"
              value={escribir}
              onChange={(e) => setEscribir(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  crearTarea();
                }
              }}
              placeholder="Tareas por hacer"
            />
            <button onClick={crearTarea}>Agregar tarea</button>
          </div>

          <ul className="container">
            {Array.isArray(agregar) && agregar.map((tarea, index) => (
              <li className="d-flex align-items-center justify-content-between" key={tarea.id || index}>
                {tarea.label}
                <button onClick={() => eliminarTarea(tarea.id)}>Bórrame</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListaDeTareas;