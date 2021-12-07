import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import CompleteToDo from "./CompleteToDo";
import "./style.scss";

const DATAS = [
  {
    id: 1,
    names: "JONI",
    toDos: "EAT",
    date: "2021-12-07",
  },
  {
    id: 2,
    names: "DINA",
    toDos: "SHOWER",
    date: "2021-12-07",
  },
  {
    id: 3,
    names: "JK",
    toDos: "FUTSAL",
    date: "2021-12-07",
  },
  {
    id: 4,
    names: "YUYU",
    toDos: "GAMES",
    date: "2021-12-07",
  },
];

const Home = () => {
  const [datas, setDatas] = useState(DATAS);
  const [completeTask, setCompleteTask] = useState(0);
  // Edit
  const [namesUser, setNamesUser] = useState("");
  const [todosUser, setTodosUser] = useState("");
  const [dateUser, setDateUser] = useState("");

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
    // setEdits(() => {
    //   const selectedItems = datas.find((items) => items.id === id);
    //   return {
    //     id: selectedItems.id,
    //     names: selectedItems.names,
    //     toDos: selectedItems.toDos,
    //     date: selectedItems.date,
    //   };
    // });

    const selectedData = datas.find((items) => {
      return items.id === id;
    });
    console.log(selectedData);
    setNamesUser(selectedData.names);
    setTodosUser(selectedData.toDos);
    setDateUser(selectedData.date);
  };

  // HANDLER COMPLETE TASK
  const handlerCompleteTask = (id) => {
    setDatas((items) => {
      const toDoDatas = items.filter((items) => items.id !== id);
      return toDoDatas;
    });
    setCompleteTask(completeTask + 1);
  };

  return (
    <div className="containers">
      <div className="containers__grid-col two">
        <div className="containers__forms">
          <h2>Add Your Todo</h2>
          <Form
            addToDoDatas={addToDoDatas}
            namesUser={namesUser}
            todosUser={todosUser}
            dateUser={dateUser}
          />
          <CompleteToDo datas={completeTask} />
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
