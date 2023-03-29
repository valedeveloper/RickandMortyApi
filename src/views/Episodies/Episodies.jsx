import React, { useEffect, useContext } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useListObject } from "../../hooks/useListObject";
import ListCards from "../../components/ListCards/ListCards";
import Pagination from "../../components/Pagination/Pagination";

const INITIAL_EPISODIES = "https://rickandmortyapi.com/api/episode";
function Episodies() {
  const {
    listResults,
    pagination,
    handledPrevPage,
    handledNextPage,
    spinner,
  } = useListObject({url:INITIAL_EPISODIES});

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
            handledPrev={handledPrevPage}
            handledNext={handledNextPage}

          />
        </>
      )}
    </>
  );
}

export default Episodies;
