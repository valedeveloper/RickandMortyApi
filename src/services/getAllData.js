const getAllData = (url) => {
   
        fetch(url)
          .then((response) =>  console.log(response.json()))
          .catch((e) => console.log(e));
 
    // return (
    //     fetch(url)
    //     .then(response =>  response.json())
    //     .then(data=>{ 
    //         return data
    //     })
    //     .catch((e) => console.log(e))
    // )
}