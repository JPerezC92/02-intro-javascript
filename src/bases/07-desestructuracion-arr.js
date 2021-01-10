// Desestructuracion
// Asignacion desestructurante

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

console.log(p3);

const retornoArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornoArreglo();

console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamra nombre
// 2. se llamara setNombre

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();
