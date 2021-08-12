import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, year, poster, alt, height, width, classname }) => {
  
  return (
    <div className={classname}>
      <div className="movieContent">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
      <div className="imageContainer">
        <img src={poster} alt={alt} width={width} height={height} />
      </div>
    </div>
  );
};

Card.defaultProps = {
  width: 200,
  height: 250,
};

Card.PropType = {
  title: PropTypes.string,
  year: PropTypes.number,
  poster: PropTypes.string,
};

export default Card;
