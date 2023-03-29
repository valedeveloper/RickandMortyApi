import React, { useState, useEffect } from "react";
import CardGenerate from "../../components/CardGenerate/CardGenerate";
import CharacterGenerate from "../../components/CharacterGenerate/CharacterGenerate";
import Spinner from "../../components/Spinner/Spinner";
import { useSingleCharacter } from "../../hooks/useSingleCharacter";
import {getNumberValidated} from "./getNumberRandom"
import "./Generate.css";
function Generate() {
  const [idCharacter, setIdCharacter] = useState(null);
  const { singleCharacter, spinner, listGenerate} = useSingleCharacter(idCharacter);

  const setNumberRandom=()=>{ 
    setIdCharacter(getNumberValidated)
  }
  return (
    <div className="containerGenerate">
      {idCharacter === null ? (
        <p className="textGenerate">
          No se ha cargado ningún personaje. ¡Genéralo!
        </p>
      ) : spinner ? (
        <Spinner/>
      ) : (
        <CardGenerate
          image={singleCharacter?.image}
          title={singleCharacter?.name}
          status={singleCharacter?.status}
           location={singleCharacter.location?.name}
          specie={singleCharacter?.species}
          gender={singleCharacter?.gender}
        />
      )}
      <button className="btnGenerate" onClick={setNumberRandom}>
        Generar
      </button>
      {listGenerate.length != [] ? (
        <h2 className="titleList"> Personajes Generados</h2>
      ) : null}
      <ul className="listCharactersGenerate">
        {listGenerate.map((item) => (
          <CharacterGenerate
            key={item?.id}
            name={item?.name}
            image={item?.image}
            status={item?.status}
            location={item.location?.name}
            specie={item?.species}
            gender={item?.gender}
          />
        ))}
      </ul>
    </div>
  );
}

export default Generate;
