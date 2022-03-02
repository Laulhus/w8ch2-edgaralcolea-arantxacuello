import { useState } from "react";
import createTuit from "./createTuit";

const TuitForm = () => {
  const [tuit, setTuit] = useState({ text: "", likes: 0 });

  const isFormInvalid = tuit.text === "";

  const changeTuit = (event) => {
    setTuit({ ...tuit, text: event.target.value });
  };

  const submitTuit = (event) => {
    event.preventDefault();
    createTuit(tuit);
  };

  return (
    <div className="form-container">
      <form noValidate autoComplete="off" onSubmit={submitTuit}>
        <label htmlFor="text">Escribe tu tuit: </label>
        <input
          type="text"
          id="text"
          value={tuit.text}
          onChange={changeTuit}
        ></input>
      </form>
    </div>
  );
};

export default TuitForm;
