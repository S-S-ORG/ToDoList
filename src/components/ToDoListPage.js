import React, { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Modal } from "./Modal";
import { ToDoItems } from "./ToDOItems";
// import { useAuth } from "./context/auth-context";

const ToDoListPage = () => {
  // const user = useAuth().user;
  // const logout = useAuth().logout;
  const [toDoListItems, setToDoListItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const addHandler = (e) => {
    e.preventDefault();
    if (title === "") {
      return;
    }
    let newId =
      toDoListItems.length === 0
        ? 1
        : toDoListItems[toDoListItems.length - 1].id + 1;
    toDoListItems.push({ id: newId, title: title, description: description });
    setToDoListItems([...toDoListItems]);
    document.getElementById("input-title").value = "";
    document.getElementById("input-description").value = "";
    setTitle("");
    setDescription("");
  };

  let setUser = useAuth().setUser;
  const logoutHandler = () => {
    setUser(false);
  };

  const deleteHandler = (id) => {
    let newList = toDoListItems.filter((item) => {
      return item.id !== id;
    });
    setToDoListItems(newList);
    setIsOpen(false);
  };
  const editHandler = (id) => {
    let item = toDoListItems.filter((item) => {
      return item.id === id;
    })[0];
    setIsOpen(true);
    setModalItem(item);
  };
  const ApplyHandler = (id, title, description) => {
    let newToDoListItems = toDoListItems.map((item) => {
      if (item.id === id) {
        item.title = title === undefined ? item.title : title;
        item.description =
          description === undefined ? item.description : description;
      }
      return item;
    });
    setToDoListItems(newToDoListItems);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={logoutHandler} id="logout">
        logout
      </button>
      <div id="to-do-list-page-title">Your to do list</div>
      <form className="add-item">
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          id="input-title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          id="input-description"
        />
        <button onClick={addHandler} type="submit">
          add
        </button>
      </form>
      {toDoListItems.length === 0 ? null : (
        <ToDoItems
          toDoListItems={toDoListItems}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      )}
      <Modal
        isOpen={isOpen}
        item={modalItem}
        deleteHandler={deleteHandler}
        setIsOpen={setIsOpen}
        ApplyHandler={ApplyHandler}
      />
    </>
  );
};

export default ToDoListPage;
