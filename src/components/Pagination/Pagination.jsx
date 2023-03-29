import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import './Pagination.css'
function Pagination({ prev, next, handledPrev, handledNext}) {
   const [pagination,setPagination]=useState(1)
   const prevPage = () => {
      handledPrev()
      setPagination(prevPage=>prevPage-1)

   }
   const nextPage = () => {
      handledNext()
      setPagination(prevPage=>prevPage+1)

   }
   return (
      <div className="pagination">
         {prev ? <FaArrowCircleLeft onClick={prevPage} color='#233160' fontSize='30px' /> : null}
         <span>{pagination}</span>
         {next ? <FaArrowAltCircleRight onClick={nextPage} color='#233160' fontSize='30px' /> : null}
      </div>
   )
}

export default Pagination