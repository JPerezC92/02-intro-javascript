// Funciones en JS
// const saludar = function (nombre) {
//   return `Hola, ${nombre}`;
// };

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar2("Vegeta"));
console.log(saludar3("Goku"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC4634543",
  username: "dev_test",
});

const user = getUser();

console.log(user);

// Tarea

const getUsuarioActivo = (nombre) => ({
  uid: "ACDE213",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Philip");

console.log(usuarioActivo);
