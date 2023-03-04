import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import './Pagination.css'
function Pagination({ prev, next, handledPrev, handledNext }) {
   console.log("renderizando")
   const [page, setPage] = useState(1)
   const handledPrevPage = () => {
      handledPrev()
      setPage(prevPage => prevPage - 1)
   }
   const handledNextPage = () => {
      handledNext()
      setPage(prevPage => prevPage + 1)
   }
   return (
      <div className="pagination">
         {prev ? <FaArrowCircleLeft onClick={handledPrevPage} color='#233160' fontSize='30px' /> : null}
         <span>{page}</span>
         {next ? <FaArrowAltCircleRight onClick={handledNextPage} color='#233160' fontSize='30px' /> : null}
      </div>
   )
}

export default Pagination