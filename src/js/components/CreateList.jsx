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
    <div style={{
      position: "relative",
      width: "700px",
      minHeight: "400px",
      backgroundImage: `url(${fondo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "3px solid #ccc",
      borderRadius: "20px",
      margin: "150px auto",
    }} >
      <input style={{
        textAlign: "center",
        position: "absolute",
        top: "-28%",
        padding: "13px",
        width: "100%",
        fontSize: "18px",
        borderRadius: "8px",
        border: "2px solid #888",
        backgroundColor: "rgba(0, 234, 255, 0.23)",

      }} type="text" value={escribir} onChange={(e) => setEscribir(e.target.value)} onKeyDown={(e) => {
        if (e.key === "Enter") {
          agregarTarea();
        }
      }}
        placeholder="Tareas por hacer"

      />
      <button
        style={{
          position: "absolute",
          top: "-14%",
          padding: "12px 20px",
          width: "100%",
          fontSize: "18px",
          borderRadius: "8px",
          border: "2px solid #888",
          backgroundColor: "rgba(242, 0, 255, 0.16)",

        }} onClick={agregarTarea}>Agregar tarea</button>
      <ul
        style={{
          paddingLeft: "60px",
          marginTop: "15px",
          listStyle: "none",
          left: "20px",
          top: "15px",
          width: "10%",
          fontSize: "18px",
          borderRadius: "10px",
          border: "2px",
          backgroundColor: "rgba(242, 0, 255, 0.01)",

        }}
      >

        {agregar.map((tarea, index) => (
          <li style={{
            borderBottom: "5px solid #fff",
            display: "inline-block"

          }}
            key={index}>
            {tarea}
            <button
              style={{
                position: "absolute",
                left: "450px",
                width: "30%",
                fontSize: "18px",
                borderRadius: "10px",
                border: "2px",
                backgroundColor: "rgba(242, 0, 255, 0.01)",
                borderBottom: "5px solid #fff"
              }}
              onClick={() => eliminarTarea(index)}> Bórrame </button>

          </li>


        ))}

      </ul>
    </div>
  );
};

export default ListaDeTareas;