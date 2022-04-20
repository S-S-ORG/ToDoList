import React from "react";

export const ToDoItems = ({
  toDoListItems,
  deleteHandler,
  editHandler,
  doneHandler,
}) => {
  return (
    <section className="toDoItems">
      {toDoListItems.map((item, index) => {
        if (item.completed) {
          return null;
        }
        return (
          <div key={index} className="toDoItem">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">&#8226; {item.description}</p>
            <button onClick={() => editHandler(item.id)}>Edit</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
            <button onClick={() => doneHandler(item.id)}>Done</button>
          </div>
        );
      })}
    </section>
  );
};
