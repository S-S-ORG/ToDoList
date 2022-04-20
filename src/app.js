import React from "react";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./components/unauthenticated-app";
import ToDoListPage from "./components/ToDoListPage";

function App() {
  const user = useAuth().user;
  console.log(user);
  // we should use react-router-dom
  return true ? <ToDoListPage /> : <UnauthenticatedApp />;
}

export default App;
