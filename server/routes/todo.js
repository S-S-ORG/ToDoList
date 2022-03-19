import { Router } from "express";
const router = Router();

// these are the controllers
// we will create all of them in the future
import { createTodo, getTodoById, getTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/Todo.js";

//params
// it will fetch the value from the url
router.param("todoId", getTodoById);

// to get all the todos
router.get("/todos/", getAllTodos);

// to get a single todo
router.get("/todo/:todoId/", getTodo);

// to create a todo
router.post("/todo/create/", createTodo);

// to update the todo
router.put("/todo/:todoId/update", updateTodo);

// to delete the todo
router.delete("/todo/:todoId/delete", deleteTodo);

// we will export the router to import it in the index.js
export default router;
