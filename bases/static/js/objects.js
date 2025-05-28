//? Object
const persona = {
  nombre: 'Luis',
  direccion: {
    ciudad: 'Valledupar',
    pais: 'Colombia',
  },
  edad: 21,

  //* Puedes poner como valor lo que necesites
  tomarAgua: () => {
    console.log('Debes tomar agua');
    return 'Ya tomó agua';
  },
};

//? Formas de modificar valores dentro de un objeto
persona.nombre = 'Steven';
persona.direccion.ciudad = 'Doña Clara';
// persona.tomarAgua();
// console.log(persona);

//? Puedes usar object freeze para proteger de forma
//? superficial los valores de un objeto
const persona2 = Object.freeze({
  nombre: 'Steven',
  apellido: 'Molina',
});

persona2.nombre = 'Luis';
// console.log(persona2.nombre);
