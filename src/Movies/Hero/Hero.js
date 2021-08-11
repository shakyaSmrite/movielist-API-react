import React from "react";

const Hero = ({ searchString, setSearchString, placeHolder }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        value={searchString}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Hero;
