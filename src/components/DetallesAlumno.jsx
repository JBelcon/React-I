import React, { useState } from "react";

const DetallesAlumno = ({ student }) => {
  const [calificacion, setCalificacion] = useState(null);

  const calcularPromedio = () => {
    alert("Calculando..");
    setCalificacion(
      student.notes.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
    );
  };
  return (
    <>
      <tr key={student.id}>
        <td>{student.name}</td>
        {student.notes.map((note, id) => (
          <td key={id}>{note}</td>
        ))}
        <td>{calificacion}</td>
        <td>
          <button onClick={calcularPromedio}>Calcular</button>
        </td>
      </tr>
    </>
  );
};

export { DetallesAlumno };
