import React, { useState, useEffect } from "react";
import fondo from "../../img/blank-notebook-template-free-vector.jpg";




const ListaDeTareas = () => {
  const [escribir, setEscribir] = useState("");
  const [agregar, setAgregar] = useState([]);
  const agregarTarea = () => {
    if (escribir.trim() === "") return;
    crearTarea();
    setAgregar([...agregar, escribir])
    setEscribir("");
  }
  const eliminarTarea = (indice) => {
    const nuevaLista = agregar.filter((_, i) => i !== indice);
    setAgregar(nuevaLista);
  }

  const crearUsuario = async () => {
    const response = await fetch("https://playground.4geeks.com/todo/users/trivm", {
      method: "POST"
    });
    const data = await response.json();
    obtenerTareas();
  };
  useEffect(() => {
    crearUsuario()
  }, [])


  const crearTarea = async () => {
    await fetch("https://playground.4geeks.com/todo/todos/trivm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        label: escribir,
        done: false
      })
    });
    setEscribir("");
    obtenerTareas();
  };

  const borrarTarea = async (id) => {
    await fetch(`https://playground.4geeks.com/todo/todos/trivm${id}`,
      {
        method: "DELETE"
      }
    );

    borrarTarea();
  }


  const obtenerTareas = async () => {
    const response = await fetch("https://playground.4geeks.com/todo/users/trivm");
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    setAgregar(data.todos.map(t => t.label));
  };



  return (

    <div className="container">
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="imagen d-flex flex-column p-4">
          <div className="d-flex align-items-center justify-content-between p-4">
            <input

              type="text" value={escribir} onChange={(e) => setEscribir(e.target.value)} onKeyDown={(e) => {
                if (e.key === "Enter") {
                  agregarTarea();
                }
              }}
              placeholder="Tareas por hacer"

            />
            <button
              onClick={agregarTarea}>Agregar tarea</button>
          </div>

          <ul className="container">

            {agregar.map((tarea, index) => (
              <li className="d-flex align-items-center justify-content-between"
                key={tarea.id}>
                {tarea.label}
                <button

                  onClick={() => eliminarTarea(index)}> Bórrame </button>

              </li>


            ))}

          </ul>


        </div>
      </div>
    </div>

  );
};

export default ListaDeTareas;