import { useState } from "react";

function ArrayState() {
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addtodoHandler = () => {
    setTodos([
      ...todos,
      {
        id: 3,
        title: "Walk",
        done: false,
      },
    ]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: id,
            title: "buy cheese",
            done: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}

      <button onClick={addtodoHandler}>Add Todo</button>
      <button onClick={() => deleteTodoHandler(2)}>Delete Todo</button>
      <button onClick={() => changeTodoHandler(0)}>Change Todo</button>
    </div>
  );
}

export default ArrayState;
