import React, { useState } from "react";
import Buttons from "../../../pages/Button";

const CompleteToDo = ({ datas }) => {
  const [resetNumbers, setNumberTask] = useState(false);
  const handlerResetTask = () => {
    setNumberTask(true);
  };

  return (
    <div className="complete_task">
      <h2>Complete Your Todo</h2>
      <div className="complete_task__count">
        <h3>My Complete Task</h3>
        <p>{resetNumbers ? 0 : datas}</p>
      </div>
      {datas > 0 && (
        <Buttons
          title="Reset Complete Task"
          className="btn_reset"
          onClick={() => handlerResetTask()}
        />
      )}
      <div className="complete_task__list_task">
        {/* {datas.map((items) => {
          return (
            <div key={items.id} className="list_items">
              <div className="list_items__headers">
                <p>Name : {items.names}</p>
                <p>Date : {items.date}</p>
              </div>
              <div className="list_items__items">
                <h2>{items.toDos}</h2>
                <div className="list_items__items__button_wrapper">
                <Buttons
                  onClick={() => handlerCompleteItems(items.id)}
                  title="Complete"
                  className="btn_complete"
                  icons={Icons.faCheck}
                />
                <Buttons
                  onClick={() => handlerEditItems(items.id)}
                  title="Edit"
                  className="btn_edit"
                  icons={Icons.faEdit}
                />
                <Buttons
                  onClick={() => handlerDeleteItems(items.id)}
                  title="Delete"
                  className="btn_delete"
                  icons={Icons.faTrash}
                />
              </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default CompleteToDo;
