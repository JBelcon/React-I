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
      <div key={student.id}>
        <p>
          Nombre: {student.name} <br /> Edad: {student.age} años
        </p>
      </div>
    );
  });

  return (
    <>
      <h4> Lista de Estudiantes:</h4>
      {listStudets}
    </>
  );
};

export { Reto1 };
