const persona = {
  nombre: "Peter",
  apellido: "Parker",
  edad: 28,
  direccion: {
    ciudad: "New York",
    zip: "654465654",
    lat: "32412",
    lng: "417845",
  },
};

// console.table(persona);

const persona2 = { ...persona };

persona2.nombre = "Bruce";

console.log(persona);
console.log(persona2);
