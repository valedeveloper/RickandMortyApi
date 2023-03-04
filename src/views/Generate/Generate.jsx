import React, { useState, useEffect } from "react";
import "./Generate.css";
import CardGenerate from "../../components/CardGenerate/CardGenerate";
import CharacterGenerate from "../../components/CharacterGenerate/CharacterGenerate";
import { useListObject } from "../../hooks/useListObject";
function Generate() {
  const [idCharacter, setIdCharacter] = useState(null);
  const [listGenerate, setListGenerate] = useState([]);
  const { getSingleCharacter, singleCharacter } = useListObject();
  let numberRandom = 0;
  const arrayNumbers = [];

  useEffect(() => {
    getSingleCharacter(idCharacter);
    console.log(singleCharacter)
    setListGenerate((prevListGenerate) =>
      prevListGenerate.concat(singleCharacter)
    );
  }, [idCharacter]);

  const validateNumber = () => {
    let validateNumber = true;
    while (validateNumber) {
      numberRandom = Math.floor(Math.random() * 826);
      validateNumber = arrayNumbers.some((item) => item === numberRandom);
      console.log(validateNumber);
      if (!validateNumber) {
        setIdCharacter(numberRandom);
        console.log(arrayNumbers);
        arrayNumbers.push(numberRandom);
      } else {
        return validateNumber;
      }
    }
  };

  return (
    <div className="containerGenerate">
      {idCharacter === null ? (
        <p className="textGenerate">No se ha cargado ningún personaje. ¡Genéralo!</p>
      ) : (
        <CardGenerate
          image={singleCharacter.image}
          title={singleCharacter.name}
          status={singleCharacter.status}
          location={singleCharacter.location.name}
          specie={singleCharacter.species}
          gender={singleCharacter.gender}
        />
      )}

      <button className="btnGenerate" onClick={validateNumber}>
        Generar
      </button>
      {idCharacter !== null?<h2 className="titleList">Lista de Personajes</h2>:null}
      <ul className="listCharactersGenerate">
        {listGenerate.map((item) => (
          <CharacterGenerate
            key={item.id}
            name={item.name}
            image={item.image}
            status={item.status}
            location={item.location.name}
            specie={item.species}
            gender={item.gender}
          />
        ))}
      </ul>
    </div>
  );
}

export default Generate;
