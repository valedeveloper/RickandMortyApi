import React from "react";
import "./CardGenerate.css";
function CardGenerate({
  isDetails,
  image,
  title,
  status,
  location,
  specie,
  gender,
}) {
  return (
    <div className={"cardGenerate " + (isDetails && "isDetails")}>
      {isDetails && <span className="closeDetails">X</span>}
      <div className="containerImageGenerate">
        <img src={image} />
      </div>
      <div className="containerCardDescription">
        <h1>{title}</h1>
        <div className="listDescription">
          <p>
            Status:<span className="valueProperty">{status}</span>
          </p>
          <p>
            Specie:<span className="valueProperty">{specie}</span>
          </p>
          <p>
            Location:<span className="valueProperty">{location}</span>
          </p>
        </div>
        <span className="genderGenerate">{gender}</span>
      </div>
    </div>
  );
}

export default CardGenerate;
