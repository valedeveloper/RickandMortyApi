import React, { useState, useEffect } from "react";
import CardGenerate from "../../components/CardGenerate/CardGenerate";
import CharacterGenerate from "../../components/CharacterGenerate/CharacterGenerate";
import Spinner from "../../components/Spinner/Spinner";
import { useListObject } from "../../hooks/useListObject";
import "./Generate.css";
function Generate() {
  const [idCharacter, setIdCharacter] = useState(null);
  const [listGenerate, setListGenerate] = useState([]);
  const { getSingleCharacter, singleCharacter, spinner } = useListObject();
  let numberRandom = 0;
  const arrayNumbers = [];

  useEffect(() => {
    if (idCharacter != null) {
      getSingleCharacter(idCharacter);
      setListGenerate((prevListGenerate) =>
        prevListGenerate.concat(singleCharacter)
      );
    }
  }, [idCharacter]);

  const validateNumber = () => {
    // while (validateNumberArray) {
    //   console.log(validateNumberArray);
    //   numberRandom = Math.floor(Math.random() * 826);
    //   console.log(numberRandom);
    //   validateNumberArray = arrayNumbers.some((item) => item === numberRandom);
    //   if(!validateNumberArray){
    //     arrayNumbers.push(numberRandom);
    //   }else{ return validateNumberArray}
    // }
    // if(validateNumberArray){
    //   arrayNumbers.push(numberRandom)
    //   console.log(arrayNumbers)
    // }
    // while (validateNumber) {
    //   console.log(validateNumber);
    //   if (!validateNumber) {
    //     setIdCharacter(numberRandom)
    //     console.log(numberRandom)
    //   } else {
    //     return validateNumber
    //   }
    // }
    // console.log(arrayNumbers)
  };
  function generarNumerosSinRepetir() {
    var numeros = [];
    var numero;

    numero = Math.floor(Math.random() * 826);
    if (numeros.indexOf(numero) === -1) {
      numeros.push(numero);
      console.log(numeros);
      setIdCharacter(numero);
    } else {
      generarNumerosSinRepetir();
    }

    // let validateNumberArray= numeros.some((item) => item != numero);

    // // Generar una cantidad de números aleatorios no repetidos
    // while (validateNumberArray) {

    //   if (numeros.indexOf(numero) === -1) {
    //     validateNumberArray=false
    //     numeros.push(numero);
    //     console.log(numeros)
    //   }else{
    //     return validateNumberArray
    //   }
  }

  return (
    <div className="containerGenerate">
      {idCharacter === null ? (
        <p className="textGenerate">
          No se ha cargado ningún personaje. ¡Genéralo!
        </p>
      ) : spinner ? (
        <Spinner />
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
      <button className="btnGenerate" onClick={generarNumerosSinRepetir}>
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
