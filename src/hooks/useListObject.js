import React, { useState } from "react";

export function useListObject() {
  const [listResults, setListResults] = useState([]);
  const [singleCharacter, setSingleCharacter] = useState([]);
  const [pagination, setPagination] = useState([]);


  const getAllData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setListResults(data.results);
        setPagination(data.info);
      })
      .catch((e) => console.log(e));
  };

  const handledPrev = () => {
    getAllData(pagination.prev);
  };
  const handledNext = () => {
    getAllData(pagination.next);
  };

  const getSingleCharacter = async (id) => {
    try{ 
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setSingleCharacter(data);
    }
    catch(error){ 
      console.log(error)
    }
   
  };

  return {
    listResults,
    pagination,
    getAllData,
    handledPrev,
    handledNext,
    getSingleCharacter,
    singleCharacter,
  };
}
