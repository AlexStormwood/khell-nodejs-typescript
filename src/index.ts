import { getRandomPokemon } from "./getRandomPokemon.ts";


console.log("Hello, Khell!");

let bigfootFavouritePokemon = await getRandomPokemon();

console.log("Bigfoot's favourite Pokemon is " + bigfootFavouritePokemon);