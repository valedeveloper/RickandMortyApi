import { useState } from "react";
const SINGLE_ENDPOINT = `https://rickandmortyapi.com/api/character/`

export function useSingleCharacter(){
    const [singleCharacter, setSingleCharacter] = useState([]);
    const [spinner, setSpinner] = useState(true);


    const getSingleCharacter = (id) => {
        setSpinner(true)
        fetch(`${SINGLE_ENDPOINT}${id}`)
          .then(response => response.json())
          .then(data => setSingleCharacter(data))
          .finally(()=>setSpinner(false))
      };
      
      return { 
        singleCharacter,
        spinner,
        getSingleCharacter
      }
}