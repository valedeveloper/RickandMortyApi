import React, { useEffect, useContext } from "react";
import Spinner from "../../components/Spinner/Spinner";
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
    nextPage,
    prevPage
  } = useListObject();

  useEffect(() => {
    getAllData(initialUrl);
  }, []);

  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <>
          <ListCards listObject={listResults} isEpisodie={true} />
          <Pagination
            prev={pagination.prev}
            next={pagination.next}
            handledPrev={handledPrev}
            handledNext={handledNext}
            functionNumberPrev={prevPage}
            functionNumberNext={nextPage}

          />
        </>
      )}
    </>
  );
}

export default Episodies;
