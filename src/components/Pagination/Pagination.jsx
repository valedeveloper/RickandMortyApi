import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import "./Pagination.css";
function Pagination({ prev, next, handledPrev, handledNext }) {
  const [page, setPage] = useState(1);
  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
    handledPrev();
  };
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    handledNext();
  };
  return (
    <div className="pagination">
      {prev && (
        <FaArrowCircleLeft onClick={prevPage} color="#233160" fontSize="30px" />
      )}
      <span>{page}</span>
      {next && (
        <FaArrowAltCircleRight
          onClick={nextPage}
          color="#233160"
          fontSize="30px"
        />
      )}
    </div>
  );
}

export default Pagination;
