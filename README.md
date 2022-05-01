# Clase1: 

* first component
const Class1 = () => {
  return <h1>Esta es la primera clase</h1>;
};

export { Class1 };


## Clase2:

* Recibir datos con React
const Class2 = () => {
  const productList = ["item1", "item2", "item3", "item4", "item5"];

  const productListJSX = productList.map((product, i) => {
    const productMayus = product.toUpperCase();
    return <li key={i}>{productMayus}</li>;
  });

  return <ul>{productListJSX}</ul>;
};

export { Class2 };


### Clase3 y Clase4:

Se hablo del Virtual DOM
Se hablo de las "keys"
Se hablo del uso de los "Fragment"


### Clase5:

Se hablo sobre las "Props"

### Clase6:

Children
Mas acerca de props


### Clase7:

Se hablo de el state y el proyecto.

### Clase8:

* Mas acerca del useState y "Hooks"

const estado = useState(0) <!-- Registra un valor en el estado>
const number = estado[0] <!-- Valor alamcenado en el estado >
const setNumber = estado[1]  <!--Funcion que modifica el estado>




