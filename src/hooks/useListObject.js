import { useEffect, useState } from "react";
import { getData } from "../services/getData";
export function useListObject({ url }) {
  const [listResults, setListResults] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const getAllData = (url) => {
      setSpinner(true);
      getData(url).then(info=> {
      setListResults(info.results)
      setPagination(info.info)
      })
      .finally(() => setSpinner(false)); //Cuando hayan finalizado todas las promesas, se ejecuta esta función. 
  };

  const handledPrevPage = () => {
    getAllData(pagination.prev);
  };
  const handledNextPage = () => {
    getAllData(pagination.next);
  };

  useEffect(()=>{getAllData(url)}, []);

  return {
    listResults,
    pagination,
    handledPrevPage,
    handledNextPage,
    spinner,
  };
}
