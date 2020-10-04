import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList/todoList";
import EditTodo from "./components/EditTodo/editTodo";
import CreateTodo from "./components/CreateTodo/createTodo";
import logo from "../src/resume-icon.png";

function App() {
  return (
    <Router>
      <div className="Container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar brand" target="_blank">
            <img src={logo} width="30" height="30" />
          </a>
        </nav>
        <Route exact path="/" exact component={TodoList}></Route>
        <Route path="/edit/:id" component={EditTodo}></Route>
        <Route path="/create"  component={CreateTodo}></Route>
      </div>  
    </Router>
  );
}

export default App;
