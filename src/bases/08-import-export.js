import heroes, { owners } from "./data/heroes";

// console.log(heroes);

const getHeroeById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

console.log(getHeroeByOwner("DC"));
console.log(owners);
