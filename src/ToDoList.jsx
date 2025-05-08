import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  // let markAsDone = (id) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           isDone: true,
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };
  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <h1>TODO List</h1>
      <input
        placeholder="Add Task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNewTask}>Add</button>
      <br></br>
      <br></br>
      <h3>Tasks</h3>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
            &nbsp;&nbsp;&nbsp;
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul> */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={`icon done`}
              onClick={() => markAsDone(todo.id)}
              title={todo.isDone ? "Mark as Undone" : "Mark as Done"}
            >
              {todo.isDone ? "✅" : "☑️"}
            </span>
            <span className={todo.isDone ? "task-text task-done" : "task-text"}>
              {todo.task}
            </span>
            <span
              className="icon delete"
              onClick={() => deleteTodo(todo.id)}
              title="Delete Task"
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>

      <br></br>
      <br></br>
      {/* <button onClick={markAsDoneAll}>Mark as Done All</button> */}
      <button className="action" onClick={markAsDoneAll}>
        Mark All as Done
      </button>
    </div>
  );
}
