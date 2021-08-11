import React from "react";
import "./App.css";
// import DataFile from "./DataFile.jsx";
import Nav from "./Nav.jsx";
import Movies from "./Movies.js";

// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LinearProgress from "@material-ui/core/LinearProgress";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          {/* <Route path="/imagecount" component={ImageCount} />
          <Route path="/newentry" component={NewEntry} /> */}

        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Welcome to the HomePage!</h1>;
  </div>
);

export default App;
