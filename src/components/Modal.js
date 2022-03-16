import React, { useState } from "react";

export const Modal = ({
  isOpen,
  item,
  deleteHandler,
  setIsOpen,
  ApplyHandler,
}) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const cancelHandler = () => {
    setIsOpen(false);
    document.getElementById("modal-title").value = item.title;
    document.getElementById("modal-description").value = item.description;
  };
  document.body.onclick = (e) => {
    if (!e.target.closest(".modal")) {
      setIsOpen(false);
    }
  };
  return (
    <div
      className="modal-wrapper"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="modal">
        <input
          placeholder="title"
          id="modal-title"
          defaultValue={item.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="modal-description"
          placeholder="description"
          defaultValue={item.description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="modal-delete-button"
          onClick={() => deleteHandler(item.id)}
        >
          Delete
        </button>
        <button
          className="modal-apply-button"
          onClick={() => ApplyHandler(item.id, title, description)}
        >
          Apply
        </button>
        <button className="modal-close-button" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};
