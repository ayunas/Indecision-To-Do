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

const makeDecision = () => {
  const randNum = Math.floor(Math.random() * app.todos.length);
  console.log(randNum);
  const option = app.todos[randNum];
  if (app.todos.length > 0) {
    alert(option);
  } else {
    alert("You have no todos. Add some now!");
  }
};

const complete = () => {
  console.log("the todo has been completed");
};

let visibility = true;
const visibilityToggle = () => {
  visibility = !visibility;
  console.log("visibility has been toggled!", visibility);
  renderTemplate();
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>Indecision - ToDo</h1>
      <p>{app.todos.length > 0 ? "Todos:" : "You have no todos!"}</p>
      <p>Todo Count: {app.todos.length}</p>
      <button onClick={makeDecision}>What Should I Do?</button>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button>Add</button>
      </form>
      <button onClick={visibilityToggle}>
        {visibility ? "hide todos" : "show todos"}
      </button>
      {visibility && <p>testing visibility</p>}
      <ol>
        {app.todos.map(todo => (
          <li onClick={complete}>{todo}</li>
        ))}
      </ol>
      <button onClick={removeAll}>Remove All</button>
    </div>
  );
  ReactDOM.render(template, rootElement);
};

renderTemplate();
