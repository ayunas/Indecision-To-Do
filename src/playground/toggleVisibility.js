import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

const rootElement = document.getElementById("root");

const template = (
  <div>
    <h1>Visibility Template</h1>
    <p>This is a visibility template</p>
  </div>
);

ReactDOM.render(template, rootElement);
