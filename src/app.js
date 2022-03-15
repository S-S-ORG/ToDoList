import React from "react";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./components/unauthenticated-app";
import ToDoListPage from "./components/ToDoListPage";

function App() {
  const user = useAuth().user;
  // we should use react-router-dom
  return user ? <ToDoListPage /> : <UnauthenticatedApp />;
}

export default App;
