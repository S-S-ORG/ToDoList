import React, { useState } from "react";
import { useAuth } from "../context/auth-context";
import { Modal } from "./Modal";
import { ToDoItems } from "./ToDOItems";
// import { useAuth } from "./context/auth-context";

const ToDoListPage = () => {
  // const user = useAuth().user;
  // const logout = useAuth().logout;
  let initialState = [{ title: "title1", description: "description1" }];
  const [toDoListItems, setToDoListItems] = useState(initialState);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addHandler = (e) => {
    e.preventDefault();
    if (title === "") {
      return;
    }
    console.log(toDoListItems);
    toDoListItems.push({ title: title, description: description });
    setToDoListItems([...toDoListItems]);
  };

  let setUser = useAuth().setUser;
  const logoutHandler = () => {
    setUser(false);
  };

  return (
    <>
      <button onClick={logoutHandler} id="logout">
        logout
      </button>
      <div id="title">Your to do list</div>
      <form className="add-item">
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <button onClick={addHandler} type="submit">
          add
        </button>
      </form>
      <ToDoItems toDoListItems={toDoListItems} />
      <Modal />
    </>
  );
};

export default ToDoListPage;
