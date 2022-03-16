import React from "react";

export const ToDoItems = ({ toDoListItems, deleteHandler, editHandler }) => {
  return (
    <section className="toDoItems">
      {toDoListItems.map((item, index) => {
        return (
          <div key={index} className="toDoItem">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">&#8226; {item.description}</p>
            <button onClick={() => editHandler(item.id)}>Edit</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </div>
        );
      })}
    </section>
  );
};
