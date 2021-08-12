import React from "react";
import Card from "./Card.js";
import "./list-movies.css";

const ListMovies = ({ movie, nominationList, setNominationList }) => {
  function nominateClickHandler(i) {
    let nomineeList = [...nominationList];
    console.log(nomineeList, "Nominee LIST");
    setNominationList([...nomineeList, i]);
    console.log(nominationList, "NOMINation LIST");
  }

  function MovieSearchDisplay({ movie }) {
    if (movie) {
      let movieList = movie.map((i) => {
        return (
          <div key={i.imdbID}>
            <Card
              title={i.Title}
              year={parseInt(i.Year)}
              poster={i.Poster}
              classname="card-cover"
            />

            <button onClick={() => nominateClickHandler(i)}>Nominate</button>
          </div>
        );
      });
      return <div className="moviecontainer">{movieList}</div>;
    } else {
      return " ";
    }
  }
  return (
    <div className="result">
      <MovieSearchDisplay movie={movie} />
    </div>
  );
};

export default ListMovies;
