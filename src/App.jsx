import React from "react";
import "./App.css";
import Nav from "./Nav.jsx";
import Movies from "./Movies.js";

// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LinearProgress from "@material-ui/core/LinearProgress";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
    <h1> Welcome.</h1>
    <h2>Millions of movies,TV shows and people to discover.Explore now.</h2>
    ;
    <img
      class="img-fit"
      src="https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg"
      alt="movie banner"
    />
  </div>
);

export default App;
