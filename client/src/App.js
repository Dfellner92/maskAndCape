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
          <a className="navbar brand" href="https://www.codingthesmartway.com" target="_blank" rel="noopener noreferrer">
            <img src={logo} width="30" height="30" alt="codingthesmartway.com"/>
          </a>
          <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={TodoList}></Route>
        <Route path="/edit/:id" component={EditTodo}></Route>
        <Route path="/create"  component={CreateTodo}></Route>
      </div>  
    </Router>
  );
}

export default App;
