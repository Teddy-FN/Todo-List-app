import React, { useState } from "react";
import { Icons } from "../../../assets";
import Buttons from "../../../pages/Button";
import "./style.scss";

const Form = ({ addToDoDatas, edit }) => {
  console.log('INI EDIT', edit);

  const [name, setName] = useState("");
  const [toDo, setToDo] = useState("");
  const [dates, setDates] = useState("");
  const [error, setError] = useState(false);

  const handlerName = (e) => {
    setName(e.target.value);
  };

  const handlerToDo = (e) => {
    setToDo(e.target.value);
  };

  const handlerDates = (e) => {
    setDates(e.target.value);
  };
  console.log('INI NAME', name);

  const handlerSubmitToDo = (e) => {
    e.preventDefault();
    if (name !== "" && toDo !== "" && dates !== "") {
      const datas = {
        id: Math.random().toString(),
        names: name,
        toDos: toDo,
        date: dates,
      };
      addToDoDatas(datas);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handlerCloseErrNotif = () => {
    setError(false);
  };
  return (
    <>
      <form onSubmit={handlerSubmitToDo} className="form_container">
        <div className="form_container__input_style">
          <input
            type="text"
            placeholder="Input Your name"
            onChange={handlerName}
            value={name}
            className="input_text"
          />
        </div>
        <div className="form_container__input_style">
          <input
            type="text"
            placeholder="Input Your todo"
            onChange={handlerToDo}
            value={toDo}
            className="input_text"
          />
        </div>
        <div className="form_container__input_style">
          <input
            type="date"
            onChange={handlerDates}
            value={dates}
            className="input_text"
          />
        </div>
        <div className="form_container__input_style">
          <Buttons title="Submit" className="btn_submit" icons={Icons.faPlus} />
        </div>
      </form>

      {error && (
        <div className="notification_error">
          <p>You must fill all todos</p>
          <Buttons title="X" onClick={handlerCloseErrNotif} className="btn_close" />
        </div>
      )}
    </>
  );
};

export default Form;
