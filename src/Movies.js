import React, { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero.js";
import axios from "axios";
import ListMovies from "./components/ListMovies/ListMovies.js";

const Movies = (props) => {
  const [searchString, setSearchString] = useState("");
  const [movie, setMovie] = useState([]);

  console.log(searchString);
  //${searchString}
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=fd2a1fe0&s="${searchString}"`)
      .then((resp) => {
        console.log(resp.data.Search, "SearchString: ", searchString);
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
    <div>
      <Hero
        searchString={searchString}
        setSearchString={setSearchString}
        placeHolder="enter your search here"
      />
      <div>
        {/* <ListMovies movie={movie} /> */}
        {/* {<Nomination/>} */}
      </div>
    </div>
  );
};

export default Movies;
