import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElement = document.getElementById("root");
const addTodo = e => {
  e.preventDefault();
  console.log("added");
};

const template = (
  <div>
    <h1>Indecision - ToDo</h1>
    <form onSubmit={addTodo}>
      <input type="text" />
      <button>Add</button>
    </form>
  </div>
);

ReactDOM.render(template, rootElement);
