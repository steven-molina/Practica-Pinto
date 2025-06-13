function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = () => {
    return 'Holaaaa';
  };
}

Persona.prototype.adios = () => {
  return 'Adios';
};

const persona1 = new Persona('Luis', 21);
const persona2 = new Persona('Steven', 23);

console.log(persona1.nombre, persona1.edad);
console.log(persona2.nombre, persona2.edad);

console.log(persona1.saludar());
console.log(persona1.adios());
