import React, { useState } from "react";
import CardGenerate from "../CardGenerate/CardGenerate";
import Modal from '../Modal/Modal';
import "./CharacterGenerate.css";
function CharacterGenerate({ name, image, status, location, specie, gender }) {
  const [stateDescription, setStateDescription] = useState(false);

  const handledOpen = () => {
    setStateDescription(true)
  }
  const handledClose = () => {
    setStateDescription(false)
  }


  return (
    <div className="containerCharacterGenerate">
      <div className="characterGenerate">
        <div className="imageContainer">
          <img className="imageCharacter" src={image} />
          <h3>{name}</h3>
        </div>
        <button onClick={handledOpen} className="btnDetails" type="button">
          Detalles
        </button>
      </div>
      {stateDescription && <Modal children={<CardGenerate title={name} image={image} status={status} location={location} specie={specie} gender={gender}/>} closeModal={handledClose} />}
    </div>
  );
}

export default CharacterGenerate;
