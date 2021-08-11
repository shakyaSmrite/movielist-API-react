import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

function DataFile() {
  const [omdbList, setOmdbList] = useState([]);
  const [isOmdbLoading, setIsOmdbLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(" ");

  //console.log(omdbList, "list");
  //console.log(searchInput, "to be searched");

  useEffect(() => {
    axios
      .get("http://localhost:4000/getOMDB")
      .then((resp) => {
        setOmdbList(resp.data);
        setIsOmdbLoading(false);
        console.log(resp, "resp");
      })
      .catch((e) => {
        setIsOmdbLoading(false);
      });
  }, []);

  // const omdbMovieList = omdbList.map((x) => {
  //   // return (
  //   //   <div className="omdbcontain" key={x.id}>
  //   //     <DataFile Title={x.Title} />
  //   //   </div>
  //   // );
  // });

  if (isOmdbLoading) {
    return (
      <>
        <LinearProgress color="secondary" />
      </>
    );
  }

  console.log(omdbList.Title);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="movie name..."
        onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
      ></input>
      <p>{omdbList.Title}</p>
    </div>
  );
}
export default DataFile;
