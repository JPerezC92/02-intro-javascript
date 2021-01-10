// import heroes, { owners } from "./data/heroes";
// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

// console.log(heroes);

export const getHeroeById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
// console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

// console.log(getHeroeByOwner("DC"));
// console.log(owners);
