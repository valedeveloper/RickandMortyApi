import {  useState } from "react";
export function useListObject() {
  const [listResults, setListResults] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const getAllData = (url) => {
    setSpinner(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setListResults(data.results);
        setPagination(data.info);
      })
    .finally(()=>setSpinner(false))
    .catch((e) => console.log(e));
  };


  

  const handledPrev = () => {
    getAllData(pagination.prev);
  };
  const handledNext = () => {
    getAllData(pagination.next);
  };

  

 

  return {
    listResults,
    pagination,
    getAllData,
    handledPrev,
    handledNext,
    spinner,
  };
}
