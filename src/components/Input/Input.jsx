import React from "react";

import "./Input.css";

const Input = ({ message, handleChangeMessage, handleKeyPress, sendMessage }) => {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="메세지를 입력하세요."
        value={message}
        onChange={handleChangeMessage}
        onKeyPress={handleKeyPress}
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </form>
  );
};

export default Input;
