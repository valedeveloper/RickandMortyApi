import React, { useState, useEffect, useContext } from "react";
import { useListObject } from "../../hooks/useListObject";
import Spinner from "../../components/Spinner/Spinner";
import ListCards from "../../components/ListCards/ListCards";
import Pagination from "../../components/Pagination/Pagination";
const initialUrl = "https://rickandmortyapi.com/api/character";
function Characters() {
  const {
    listResults,
    pagination,
    getAllData,
    handledPrev,
    handledNext,
    spinner,
  } = useListObject();

  useEffect(() => {
    getAllData(initialUrl);
  }, []);

  return (
    <>
      { spinner? <Spinner />: 
      <>
        <ListCards listObject={listResults} />
        <Pagination
          prev={pagination.prev}
          next={pagination.next}
          handledPrev={handledPrev}
          handledNext={handledNext}/>
      </>
    }
    </>
  );
}

export default Characters;
