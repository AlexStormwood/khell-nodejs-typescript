

export async function getRandomPokemon(){
	let randomNumber = Math.floor(Math.random() * 1025) + 1;

	let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
	let data = await response.json();

	return data.name;
}