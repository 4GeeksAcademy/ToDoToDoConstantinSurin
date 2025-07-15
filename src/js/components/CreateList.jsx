import React, { useState } from 'react';

const ListaDeTareas = () => {
  const [escribir, setEscribir] = useState("");
  const [agregar, setAgregar] = useState([]);
  const agregarTarea = () => {
    if (escribir.trim() === "") return;
    setAgregar([...agregar, escribir])
    setEscribir("");
  }
  const eliminarTarea  = (indice) => {
    const nuevaLista  = agregar.filter((_, i) => i !== indice);
    setAgregar(nuevaLista);
  }

  return (
    <div>
      <input type="text" value={escribir} onChange={(e) => setEscribir(e.target.value)} placeholder='escribe aqui joio' />
      <button onClick={agregarTarea}>Agregar tarea</button>
      <ul>
        {agregar.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={()=> eliminarTarea(index)}> X </button>
          </li>

        ))}

      </ul>
    </div>
  );
};

export default ListaDeTareas;