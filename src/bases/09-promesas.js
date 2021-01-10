import { getHeroeById } from "./bases/08-import-export";

// Promesas

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const p1 = getHeroeById(2);
//     console.log(p1);

//     resolve(p1);
//     // reject("No se puedo encontrar el heroe");
//   }, 2000);
// });

// promesa
//   .then(() => {
//     console.log(`then de la promesa`);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);

      p1 ? resolve(p1) : reject("Heroe no encontrado");
    }, 2000);
  });
};

getHeroeByIdAsync(3).then(console.log).catch(console.warn);
