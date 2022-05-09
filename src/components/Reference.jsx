import React, { useRef } from "react";

const Reference = () => {
  const input = useRef();

  const sendMessage = () => {
    console.log(input.current.value);
  };
  return (
    <>
      <input type="text" ref={input} />
      <button onClick={sendMessage}>Enviar</button>
    </>
  );
};

export { Reference };
