import React, { useState } from "react";

export const Estado = () => {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState([]);

  const changeInput = (e) => {
    setContent(e.target.value);
  };
  const sendMessage = () => {
    setMessage([...message]);
    setContent("");
  };

  return (
    <>
      <label>{content}</label>
      <br />
      <input type="text" value={content} onChange={changeInput} />
      <button onClick={sendMessage}>Send</button>
    </>
  );
};
