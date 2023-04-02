export const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("No se pueden cargar los datos... ")
  }
};

// export const getData = async (url) => {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
