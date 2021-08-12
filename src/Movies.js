import React, { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero.js";
import axios from "axios";
import ListMovies from "./components/ListMovies/ListMovies.js";
import Nomination from "./components/Nomination/Nomination.js";

const Movies = (props) => {
  const [searchString, setSearchString] = useState("");
  const [movie, setMovie] = useState([]);
  const [nominationList, setNominationList] = useState([]);
  // const [nominationCount, setNominationCount] = useState([]);

  //${searchString}
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=fd2a1fe0&s="${searchString}"`)
      .then((resp) => {
        setMovie(resp.data.Search);
      })

      .catch((e) => console.log(e));
  }, [searchString]);

  //   const omdbMovieList = omdbList.map((x) => {
  //       return (
  //         <div className="omdbcontain" key={x.id}>
  //           <DataFile Title={x.Title} />
  //         </div>
  //       );

  return (
    <div className="splitBody">
      <Hero
        searchString={searchString}
        setSearchString={setSearchString}
        placeHolder="enter your search here"
      />
      <br />
      <br />
      <div className="searchSection">
        <ListMovies
          movie={movie}
          nominationList={nominationList}
          setNominationList={setNominationList}
        />
      </div>
      <div className="nominationSection">
        <Nomination
          nominationList={nominationList}
          setNominationList={setNominationList}
        />
      </div>
    </div>
  );
};

export default Movies;
