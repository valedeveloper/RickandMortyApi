import { useEffect, useState } from "react";
import { Fade } from "react-bootstrap";
import { getData } from "../services/getData";

const SINGLE_ENDPOINT = `https://rickandmortyapi.com/api/character/`;

export function useSingleCharacter( id) {
  const [singleCharacter, setSingleCharacter] = useState([]);
  const [listGenerate, setListGenerate] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const getSingleCharacter = ({id}) => {
    setSpinner(true);
    console.log(id)
    getData(`${SINGLE_ENDPOINT}${id}`).then(character=>{
        setSingleCharacter(character)
        setListGenerate(prevListGenerate=>prevListGenerate.concat(singleCharacter))
      })
      .finally(() => setSpinner(false));
  };

  useEffect(() => {
    if (id===null) return;
    getSingleCharacter({id});
  }, [id]);

  return {
    singleCharacter,
    spinner,
    getSingleCharacter,
    listGenerate
  };
}
