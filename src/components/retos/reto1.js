import "./css/reto1.css";
const Reto1 = () => {
  //mostar datos de los alumnos
  const students = [
    {
      id: "1",
      name: "Andres",
      age: 21,
    },
    {
      id: "2",
      name: "Eduardo",
      age: 22,
    },
    {
      id: "3",
      name: "Tzuzul",
      age: 23,
    },
    {
      id: "4",
      name: "Juan",
      age: 24,
    },
    {
      id: "5",
      name: "Claudia",
      age: 25,
    },
  ];

  const listStudets = students.map((student) => {
    return (
      <div className="student" key={student.id}>
        <p>
          <strong>Nombre:</strong> {student.name} <br /> <strong>Edad:</strong>{" "}
          {student.age} años
        </p>
      </div>
    );
  });

  return (
    <>
      <section className="reto1">
        <h4> Lista de Estudiantes</h4>
        <article>{listStudets}</article>
      </section>
    </>
  );
};

export { Reto1 };
