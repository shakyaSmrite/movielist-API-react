import React, { useEffect, useState } from "react";
import Hero from "./Movies/Hero/Hero.js";
import axios from "axios";

const Movies = (props) => {
  const [searchString, setSearchString] = useState(" ");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=fd2a1fe0=${searchString}`)
      .then((resp) => setData(resp.data))
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
        {<ListMovies/>}
           {} <Nomination/>}
      </div>
    </div>
  )


export default Movies;