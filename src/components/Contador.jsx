import React, { useState } from "react";

const Contador = () => {
  const [number, setNumber] = useState(0);

  const incrementar = () => {
    setNumber(number + 1);
  };
  const decrementar = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div>
        <h2>State</h2>
        <p>{number}</p>
        <button onClick={incrementar}>+ </button>
        <button onClick={decrementar}>- </button>
      </div>
    </>
  );
};

export { Contador };
