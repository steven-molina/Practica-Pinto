//! Este código tiene ciertos problemas
//! si estamos imitando la POO

const persona = {
  nombre: 'Luis',
  edad: 21,

  direccion: {
    ciudad: 'Valledupar',
    departamento: 'Cesar',
  },

  saludar: () => {
    return 'Holaaaa';
  },
};

const persona2 = {
  ...persona,
};

persona;
persona2.direccion.ciudad = 'Riohacha';
persona;
