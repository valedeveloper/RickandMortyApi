import React, { useEffect, useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useListObject } from "../../hooks/useListObject";
import ListCards from "../../components/ListCards/ListCards";
import Pagination from "../../components/Pagination/Pagination";

const initialUrl = "https://rickandmortyapi.com/api/episode";
function Episodies() {
  const {
    spinner,
    listResults,
    pagination,
    getAllData,
    handledPrev,
    handledNext,
  } = useListObject();

  useEffect(() => {
    getAllData(initialUrl);
  }, []);

  return (
    <>
      <ListCards listObject={listResults} isEpisodie={true}/>
      <Pagination
        prev={pagination.prev}
        next={pagination.next}
        handledPrev={handledPrev}
        handledNext={handledNext}
      />
    </>
  );
}

export default Episodies;
