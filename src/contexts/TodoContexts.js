import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false,
    },
  ],
  logs:[
    {
      id:1,
      logTitle:"log title or date",
      logDetail:"detail of log",
    }
  ],
  addLog:()=>{},
  deleteLog:(id)=>{},
  updateLog: (id,log)=>{},
  addTodo: () => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
