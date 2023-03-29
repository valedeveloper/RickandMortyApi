import React, { useState, useEffect, useContext } from "react";
import { useListObject } from "../../hooks/useListObject";
import Spinner from "../../components/Spinner/Spinner";
import ListCards from "../../components/ListCards/ListCards";
import Pagination from "../../components/Pagination/Pagination";
const INITIAL_CHARACTER = "https://rickandmortyapi.com/api/character";
function Characters() {
  const {
    listResults,
    pagination,
    handledPrevPage,
    handledNextPage,
    spinner,
  } = useListObject({url:INITIAL_CHARACTER});


  return (
    <>
      { spinner? <Spinner />: 
      <>
        <ListCards listObject={listResults} />
        <Pagination
          prev={pagination.prev}
          next={pagination.next}
          handledPrev={handledPrevPage}
          handledNext={handledNextPage}/>
      </>
    }
    </>
  );
}

export default Characters;
