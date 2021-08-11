import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav  className="topBar">
      <ul className="nav-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
