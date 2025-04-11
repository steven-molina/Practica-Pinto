const array = [1, 2, 3, 4, 5];
const element = 3;

//! ESTO NO LO HAGAS
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === element) {
//     console.log(array[i]);
//     break;
//   }
// }

//* Métodos en los arreglos

//? find (buscar un elemento en el arreglo bajo cierta condición)
const foundElement = array.find((number) => number > element);
// console.log(foundElement);

//? filter (buscar varios elementos bajo cierta condición)
const foundElements = array.filter((number) => number > element);
// console.log(foundElements);

//? findIndex, indexOf (devolver el índice de un elemento)
const indexNumber1 = array.findIndex((number) => number === element);
const indexNumber2 = array.indexOf(element);
// console.log(indexNumber1, indexNumber2);

//? at (retornar un elemento que esta en cierto indice)
const foundElement2 = array.at(0);
// console.log(foundElement2);

//? splice (sirve para eliminar elementos dentro de un array o actualizar)
// console.log(array);
// array.splice(2, 3, 10);
// console.log(array);

//? slice (para hacer una copia del arreglo)
const arrayCopy = array.slice(1, 3);
// console.log(array, arrayCopy);

//? map transformar los elementos de un arreglo generando uno nuevo
const newArray = array.map((number) => `persona ${number}`);
// console.log(array, newArray);

// ------------------------------*------------------------------

//* Ejercicios prácticos

//? Encuentra a la persona
const personas = ['Luis', 'Nayid', 'Steven', 'Juliana', 'Junior'];
const juliana = personas.find((persona) => persona === 'Juliana');
// console.log(juliana);

//? Devuelve un arreglo con solo los números pares
const allArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = allArray.filter((number) => number % 2 === 0);
// console.log(filteredArray);

//? Filtrar los que no son números
const arrayEverything = [1, 'Luis', 'Steven', 2, 3, 4, 'Nayid', 'Junior'];
const arrayNumber = arrayEverything.filter(
  (number) => typeof number === 'number'
);
// console.log(arrayNumber);
