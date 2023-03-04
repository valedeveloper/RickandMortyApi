import React, { useState, useEffect, useContext } from "react";
import Card from "../../components/Card/Card";
import { useListObject } from "../../hooks/useListObject";
import ListCards from "../../components/ListCards/ListCards";
import Pagination from "../../components/Pagination/Pagination";
function Characters() {
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const { listResults, pagination, getAllData, handledPrev, handledNext } =useListObject();

  useEffect(() => {
    getAllData(initialUrl);
  }, []);

  return (
    <>
      <ListCards listObject={listResults} />
      <Pagination
        prev={pagination.prev}
        next={pagination.next}
        handledPrev={handledPrev}
        handledNext={handledNext}
      />
    </>
  );
}

export default Characters;
