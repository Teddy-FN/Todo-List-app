import React from "react";
import { Images } from "../../../assets";
import "./style.scss";
import Buttons from "../../../pages/Button";
import { Icons } from "../../../assets";
const List = ({
  datas,
  handlerDeletes,
  handlerEditTodo,
  handlerCompleteTask,
}) => {
  const handlerDeleteItems = (id) => {
    handlerDeletes(id);
  };

  const handlerEditItems = (id) => {
    handlerEditTodo(id);
    // setHides(true);
  };
  const handlerCompleteItems = (id) => {
    handlerCompleteTask(id);
  };

  return datas.length > 0 ? (
    datas.map((items) => {
      return (
        <div key={items.id} className="list_item">
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
    })
  ) : (
    <div className="container_upcomming_events">
      <img src={Images.No_Events} alt="heros" />
      <h1>No upcoming Events let's Change</h1>
    </div>
  );
};

export default List;
