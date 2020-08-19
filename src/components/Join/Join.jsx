import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleChangeName = ({ target }) => setName(target.value);
  const handleChangeRoom = ({ target }) => setRoom(target.value);
  const handleSubmit = (event) => (!name || !room ? event.preventDefault() : null);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input type="text" placeholder="Name" className="joinInput" onChange={handleChangeName} value={name} />
        </div>
        <div>
          <input type="text" placeholder="Room" className="joinInput mt-20" onChange={handleChangeRoom} value={room} />
        </div>
        <Link onClick={handleSubmit} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
