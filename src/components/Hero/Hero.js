import React from "react";

function Hero({ searchString, setSearchString }) {
  return (
    <>
      <h1 className="pageH1">Movies</h1>
      <form className="SearchBar">
        <input
          onChange={(e) => {
            setSearchString(e.target.value.toLowerCase());
            onkeyup = "processChange()";
          }}
          htmlFor="searchSpace"
          placeholder="Movie Title"
          value={searchString}
        />
      </form>
    </>
  );
}

export default Hero;
