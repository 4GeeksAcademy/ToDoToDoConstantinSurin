import React, { useState } from "react";
import fondo from "../../img/blank-notebook-template-free-vector.jpg";

const ListaDeTareas = () => {
  const [escribir, setEscribir] = useState("");
  const [agregar, setAgregar] = useState([]);
  const agregarTarea = () => {
    if (escribir.trim() === "") return;
    setAgregar([...agregar, escribir])
    setEscribir("");
  }
  const eliminarTarea = (indice) => {
    const nuevaLista = agregar.filter((_, i) => i !== indice);
    setAgregar(nuevaLista);
  }

  return (
    
    <div className="container">
      <div className="d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
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
            key={index}>
            {tarea}
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