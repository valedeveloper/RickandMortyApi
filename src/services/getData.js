export const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    return console.log("Eror");
  }
};

// export const getData = async (url) => {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
