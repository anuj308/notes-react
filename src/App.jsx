import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import {
  TodoForm,
  TodoItem,
  LogForm,
  LogItem,
  Header,
} from "./components/index.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);
  const [logs, setLogs] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addLog = (log) => {
    setLogs((prev) => [{ id: Date.now(), ...log }, ...prev]);
  };

  const deleteLog = (id) => {
    setLogs((prev) => prev.filter((log) => log.id != id));
  };

  const updateLog = (id, log) => {
    setLogs((prev) =>
      prev.map((prevLog) => (prevLog.id === id ? log : prevLog))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const logs = JSON.parse(localStorage.getItem("logs"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
    if (logs && logs.length > 0) {
      setLogs(logs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("logs", JSON.stringify(logs));
  }, [todos, logs]);

  return (
    <TodoProvider
      value={{
        todos,
        updateTodo,
        addTodo,
        deleteTodo,
        toggleComplete,
        addLog,
        updateLog,
        deleteLog,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8 w-full">
        <div className="w-full shadow-md rounded-lg px-4 py-3 text-white">
          {/* <Header/> */}
          {/* <div
        // to="/"
        className="inline-block px-4 text-2xl font-bold text-center mb-8 mt-2 "
      >
        Todo
      </div>
      <div
        // to="/logs"
        className="inline-block text-2xl font-bold text-center mb-8 mt-2"
      >
        Log
      </div> */}
          <BrowserRouter>
            {/* <div > */}
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <>
                      <Link
                        to="/"
                        className="inline-block px-4 text-2xl font-bold text-center mb-8 mt-2 "
                      >
                        Todo
                      </Link>
                      <Link
                        to="/logs"
                        className="inline-block text-2xl font-bold text-center mb-8 mt-2"
                      >
                        Log
                      </Link>
                      <h1 className="text-2xl font-bold text-center mb-8 mt-2 ">
                        Manage Your Todos
                      </h1>
                      <div className="mb-4 mx-40">
                        <TodoForm />
                      </div>
                      <div className="flex flex-wrap gap-y-3 mx-40">
                        {todos.map((todo) => (
                          <div key={todo.id} className="w-full ">
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                      </div>
                    </>
                  }
                />
                <Route
                  exact
                  path="/logs"
                  element={
                    <>
                      <Link
                        to="/"
                        className="inline-block px-4 text-2xl font-bold text-center mb-8 mt-2 "
                      >
                        Todo
                      </Link>
                      <Link
                        to="/logs"
                        className="inline-block text-2xl font-bold text-center mb-8 mt-2"
                      >
                        Log
                      </Link>
                      <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Logs
                      </h1>
                      <div className="mb-4 mx-40">
                        <LogForm />
                      </div>
                      <div className="flex flex-wrap gap-y-3 mx-40">
                        {logs.map((log) => (
                          <div key={log.id} className="w-full">
                            <LogItem log={log} />
                          </div>
                        ))}
                      </div>
                    </>
                  }
                />
              </Routes>
            {/* </div> */}
          </BrowserRouter>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
