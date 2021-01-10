// Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: "Peter",
  edad: 28,
  clave: "Spiderman",
  // rango: "soldado",
};

// const { nombre, clave, edad } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, edad, rango = "capitan" }) => {
  // console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.5412,
      lng: -3245465,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
