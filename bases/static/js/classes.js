//* Sugar syntaxis
class Persona {
  #n = '';
  edad = 0;

  constructor(nombre, edad) {
    this.#n = nombre;
    this.edad = edad;
  }

  get nombre() {
    return this.#n;
  }

  set nombre(nombre) {
    this.#n = nombre;
  }

  saludar() {
    return 'Holaaa';
  }

  static soyPersona() {
    return 'Soy persona';
  }
}

class Steven extends Persona {
  constructor(cocina = true) {
    super('Steven', 23);
    this.cocina = cocina;
  }
}

const persona1 = new Persona('Luis', 21);
persona1.nombre = 'Luis Daniel';
console.log(persona1.nombre);
console.log(persona1.saludar());
console.log(Persona.soyPersona());

const steven = new Steven();
console.log(steven.cocina);
