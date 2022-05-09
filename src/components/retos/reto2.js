import "./css/reto2.css";
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

const Reto2 = () => {
  return (
    <>
      <section className="reto2">
        <table className="table">
          <caption>Tabla de calificaciones</caption>

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Nota 4</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                {student.notes.map((note, id) => (
                  <td key={id}>{note}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export { Reto2 };
