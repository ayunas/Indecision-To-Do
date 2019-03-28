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
    console.log(todo.value);
    app.todos.push(todo.value);
    renderTemplate();
  }
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>Indecision - ToDo</h1>
      <p>{app.todos.length}</p>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button>Add</button>
      </form>
    </div>
  );
  ReactDOM.render(template, rootElement);
};

renderTemplate();
