//? callback es una función que se pasa como parametro

// Esta función solo te saluda si tienes 18 años o más
const saludo = (nombre, callback) => {
  if (typeof callback !== 'function') {
    throw new Error('callback no es una función');
  }

  const esEdadValida = callback(18);

  if (esEdadValida) {
    console.log(`Hola ${nombre}`);
    return;
  }

  console.log('No te quiero saludar');
};

// saludo('Steven', (edad) => edad >= 18);

const heroes = ['IronMan', 'Superman', 'Batman', 'Spiderman'];

const ironMan = heroes.find((heroe) => heroe === 'IronMan');
// console.log(ironMan);

const find = (callback) => {
  if (typeof callback !== 'function') {
    throw Error(`${callback} is not a function`);
  }

  const heroes = ['Superman', 'Batman', 'Spiderman'];

  for (let index = 0; index < heroes.length; index++) {
    const encontrado = callback(heroes[index], index, heroes);

    if (encontrado) {
      console.log('Objeto encontrado');
      return heroes[index];
    } else {
      console.log('Objeto  no encontrado');
      return;
    }
  }
};

// const superman = find((heroe) => {
//   return heroe === 'Superman';
// });
// console.log(superman);

const calculadora = (num1, num2, operacion) => {
  console.log('El resultado de la operación es: ' + operacion(num1, num2));
};

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;

// calculadora(5, 2, suma);
// calculadora(5, 2, resta);
