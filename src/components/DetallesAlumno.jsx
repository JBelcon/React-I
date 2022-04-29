import React from "react";

const DetallesAlumno = ({ student }) => {
  let calificacionFinal = 0;

  const calcularPromedio = () => {
    alert("Calculando..");
    calificacionFinal = 10;
  };
  return (
    <>
      <tr key={student.id}>
        <td>{student.name}</td>
        {student.notes.map((note, id) => (
          <td key={id}>{note}</td>
        ))}
        <td>{calificacionFinal}</td>
        <td>
          <button onClick={calcularPromedio}>Calcular</button>
        </td>
      </tr>
    </>
  );
};

export { DetallesAlumno };
