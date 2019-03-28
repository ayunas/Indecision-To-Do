import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const app = {
  name: "Indecision",
  subtitle: "Organize your Life",
  todos: []
};

const rootElement = document.getElementById("root");
const addTodo = e => {
  e.preventDefault();
  const todo = e.target.elements.todo.value;
  console.log(e.target.elements.todo.value);

  if (todo) {
    console.log(todo);
    app.todos.push(todo);
    renderTemplate();
    console.log(app.todos);
  }
};

const removeAll = () => {
  app.todos = [];
  renderTemplate();
  console.log(app.todos);
};

const numbers = [1, 2, 3, 4];
const renderTemplate = () => {
  const template = (
    <div>
      <h1>Indecision - ToDo</h1>
      <p>{app.todos.length > 0 ? "Todos:" : "You have no todos!"}</p>
      <p>Todo Count: {app.todos.length}</p>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button>Add</button>
      </form>
      {app.todos.map(todo => (
        <p>{todo}</p>
      ))}
      <button onClick={removeAll}>Remove All</button>
    </div>
  );
  ReactDOM.render(template, rootElement);
};

renderTemplate();
