import React from "react";
import "./Card.css";
function Card({
  name,
  image,
  gender,
  status,
  species,
  location,
  episode,
  airDate,
  created,
}) {
  return (
    <div className="containerCard">
      <div className="topContainer">
        <h1>{name}</h1>
        {image ? (
          <div className="containerImageCard">
            <img src={image} />
          </div>
        ) : null}
      </div>
     <div className="bottomContainer">
     <span className="generCard">{gender ? gender : episode}</span>
      <div className="listProperties">
        {status ? (
          <p>
            Status: <span className="valueProperty">{status}</span>
          </p>
        ) : (
          <span className="valueProperty">{created}</span>
        )}
        <p>
          {species ? "Specie:" : "Al Aire:"}
          <span className="valueProperty">{species ? species : airDate}</span>
        </p>
        {location ? (
          <p>
            Location:<span className="valueProperty">{location.name}</span>
          </p>
        ) : null}
      </div>
     </div>
    </div>
  );
}

export default Card;
