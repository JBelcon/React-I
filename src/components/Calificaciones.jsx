import React from "react";
import { DetallesAlumno } from "./DetallesAlumno";
import { Menu } from "./Menu";

const students = [
  {
    id: 1,
    name: "Juan",
    notes: [10, 9, 8, 7],
  },
  {
    id: 2,
    name: "Andres",
    notes: [7, 9, 5, 7],
  },
  {
    id: 3,
    name: "Tzuzul",
    notes: [5, 4, 8, 7],
  },
  {
    id: 4,
    name: "Paula",
    notes: [9, 9, 8, 6],
  },
];

const Calificaciones = () => {
  return (
    <>
      <Menu>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </Menu>

      <section className="container">
        <table className="table">
          <caption>Tabla de calificaciones</caption>

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Nota 4</th>
              <th>Promedio</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <DetallesAlumno student={student} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export { Calificaciones };
