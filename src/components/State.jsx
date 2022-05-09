import React, { useState } from "react";

const State = () => {
  // Destructuring
  const [content, setContent] = useState("");

  const [messages, setMessages] = useState([]);

  const changeInput = (event) => {
    setContent(event.target.value);
  };

  const sendMessage = () => {
    messages.push(content);
    setMessages([...messages]);
    setContent("");
  };

  return (
    <>
      <div>
        {messages.map((message) => (
          <p className="message">{message}</p>
        ))}
      </div>
      <p className="writing">{content}</p>
      <input type="text" value={content} onChange={changeInput} />
      <button onClick={sendMessage}>Enviar</button>
      <hr />
    </>
  );
};

export { State };
