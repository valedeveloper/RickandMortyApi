
// Variable para almacenar los números generados previamente
var numbersGenerate = [];

// Función para generar un número aleatorio sin repetir
function getNumberRandom(max) {
  var number = Math.floor(Math.random() * max);

  // Comprobar si el número generado ya ha sido generado antes
  if (numbersGenerate.some(item=>item===number)) {
    // Si ya ha sido generado, generar otro número aleatorio
    return getNumberRandom(max);
  } else {
    numbersGenerate.push(number);
    return number;
  }
}

// Función que se ejecuta al hacer clic en el botón
export function getNumberValidated() {
  var numberRandom = getNumberRandom(826);
  return numberRandom
}

