import React from "react";

const DoneItems = ({ doneItems }) => {
  return (
    <section className="doneItems">
      <hr></hr>
      <h2>Done List</h2>
      {doneItems.map((item, index) => {
        if (!item.completed) {
          return null;
        }
        return (
          <div key={index} className="doneItem">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">&#8226; {item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default DoneItems;
