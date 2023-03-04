import React, { useState } from "react";
import CardGenerate from "../CardGenerate/CardGenerate";
import "./CharacterGenerate.css";
function CharacterGenerate({ name, image, status, location, specie, gender }) {
  const [stateDescription, setStateDescription] = useState(true);
  return (
    <div className="containerCharacterGenerate">
      <div className="characterGenerate">
        <div className="imageContainer">
          <img className="imageCharacter" src={image} />
          <h3>{name}</h3>
        </div>
        <button className="btnDetails" type="button">
          Detalles
        </button>
      </div>
      {/* {stateDescription && (
        <CardGenerate isDetails={true}
        />
      )}  */}
    </div>
  );
}

export default CharacterGenerate;
