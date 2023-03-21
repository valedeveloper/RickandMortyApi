import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import './Pagination.css'
function Pagination({ prev, next, handledPrev, handledNext }) {
   const handledPrevPage = () => {
      handledPrev();
   }
   const handledNextPage = () => {
      handledNext();
   }
   return (
      <div className="pagination">
         {prev ? <FaArrowCircleLeft onClick={handledPrevPage} color='#233160' fontSize='30px' /> : null}
         <span>{}</span>
         {next ? <FaArrowAltCircleRight onClick={handledNextPage} color='#233160' fontSize='30px' /> : null}
      </div>
   )
}

export default Pagination