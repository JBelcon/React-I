import React, { useContext } from "react";
import { cardContext } from "./Context";

const Producto = ({ producto }) => {
  // El context al ser un objeto podemos desestructurarlo
  const { setCarrito, carrito } = useContext(cardContext);

  //Function para agregar cosas al carrito
  const agregarAlCarrito = () => {
    setCarrito([...carrito, producto]);
  };
  return (
    <>
      <p>{producto.name}</p>
      <p>{producto.price}</p>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </>
  );
};

export { Producto };
