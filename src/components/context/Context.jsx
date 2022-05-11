import React, { createContext, useState } from "react";
import { Navbar } from "./Navbar";
import { Productos } from "./Productos";

export const cardContext = createContext();

const Context = () => {
  const [carrito, setCarrito] = useState([]);
  return (
    <cardContext.Provider value={{ carrito, setCarrito }}>
      <Navbar carrito={carrito} />
      <Productos />
      {/* 
      <button
        onClick={() => {
          setCarrito([...carrito, { name: "Producto prueba" }]);
        }}
      >
        Agregar carrito
      </button> */}
    </cardContext.Provider>
  );
};

export { Context };
