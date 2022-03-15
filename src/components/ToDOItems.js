import React from "react";

export const ToDoItems = ({ toDoListItems }) => {
  return (
    <section className="toDoItems">
      {toDoListItems.map((item, index) => {
        return (
          <div key={index} className="toDoItem">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">&#8226; {item.description}</p>
            <button>edit</button>
            <button>delete</button>
          </div>
        );
      })}
    </section>
  );
};
