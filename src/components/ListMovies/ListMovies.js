import React from "react";
import Card from "../Card/Card.js";

function ListMovies({ movie }) {
  if (movie) {
    let movieList = movie.map((i) => {
      return (
        <div>
          <Card title={i.Title} year={i.Year} poster={i.Poster} />
        </div>
      );
    });
    // return <div>{movieList}</div>
  } else {
    return " ";
  }
}

export default ListMovies;
