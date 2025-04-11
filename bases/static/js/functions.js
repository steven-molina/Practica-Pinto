//? función tradicional o función nombrada
function saludar(nombre) {
  console.log(`Hola ${nombre}, ¿cómo estás?`);
}

//? función anonima guardada en una variable
const hola = function (nombre) {
  console.log('hola ' + nombre);
};

//? función autoejecutable
(function () {
  console.log('Soy una función anonima autoejecutable');
});

//? función flecha
const saludo = (nombre) => {
  return 'Hola ' + nombre;
};
const luis = saludo('Luis');

const saludo2 = (nombre) => 'Hola ' + nombre;
// console.log(saludo2('Steven'));

const hacerAlgo = algo => console.log(`estoy ${algo}`)

//? Diferenia del this en funciones flechas y funciones tradicionales

//* las funciones tradicionales, haciendo referencia a las
//* declaradas con la palabra reservada function usan el this
//* del contexto donde fueron declaradas, mientras que las
//* flecha hacen uso del contexto donde son llamadas o ejecutadas

window.value = 0; //? representa la ventana que contiene el DOM

const counter = {
  value: 0, //? este value pertenece al objeto counter

  increment: () => {
    this.value++;
  },
};

// console.log(counter.value);
counter.increment();
// console.log(counter.value);

const persona = {
  nombre: 'Steven',
  hacerAlgo: function () {
    setTimeout(() => {
      console.log(`Soy ${this.nombre} hago algo`);
    }, 1000);
  },
};

console.log(persona.nombre);
persona.hacerAlgo();
