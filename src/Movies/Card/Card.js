import React from "react";

const Card = ({ title, year, poster }) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{year}</p>
      <img src={poster} alt="girl" width="200" height="200" />
    </div>
  );
};

export default Card;
