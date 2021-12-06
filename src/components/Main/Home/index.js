import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import CompleteToDo from "./CompleteToDo";
import "./style.scss";
import Modal from "./Modal";

const DATAS = [
  {
    id: 1,
    names: "TEST",
    toDos: "EAT",
    date: "20 / 11 / 2021",
  },
  {
    id: 2,
    names: "TEST",
    toDos: "EAT",
    date: "20 / 11 / 2021",
  },
  {
    id: 3,
    names: "TEST",
    toDos: "EAT",
    date: "20 / 11 / 2021",
  },
  {
    id: 4,
    names: "TEST",
    toDos: "EAT",
    date: "20 / 11 / 2021",
  },
];

const Home = () => {
  const [datas, setDatas] = useState(DATAS);
  const [count, setCount] = useState(0);
  const [edit, setEdits] = useState([]);

  // HANDLER ADD TODOS
  const addToDoDatas = (datas) => {
    setDatas((items) => {
      const datasAll = [...items];
      datasAll.unshift(datas);
      return datasAll;
    });
  };

  // HANDLER DELETES
  const handlerDeletes = (id) => {
    setDatas((items) => {
      const toDoDatas = items.filter((items) => items.id !== id);
      return toDoDatas;
    });
  };

  // HANDLER EDIT
  const handlerEditTodo = (id) => {
    setDatas((items) => {
      const toDoDatas = items.filter((items) => items.id !== id);
      return toDoDatas;
    });
    setEdits(() => {
      const selectedItems = datas.find((items) => items.id === id);
      return {
        id: selectedItems.id,
        names: selectedItems.names,
        toDos: selectedItems.toDos,
        date: selectedItems.date,
      };
    });
  };

  // HANDLER COMPLETE TASK
  const handlerCompleteTask = (id) => {
    setDatas((items) => {
      const toDoDatas = items.filter((items) => items.id !== id);
      return toDoDatas;
    });
    setCount(count + 1);
  };

  
  return (
    <div className="containers">
      <div className="containers__grid-col two">
        <div className="containers__forms">
          <h2>Add Your Todo</h2>
          <Form addToDoDatas={addToDoDatas} edit={edit} />
          <CompleteToDo count={count} />
        </div>
        <div className="containers__list">
          <h2>Your Todo List</h2>
          <List
            datas={datas}
            handlerDeletes={handlerDeletes}
            handlerEditTodo={handlerEditTodo}
            handlerCompleteTask={handlerCompleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
