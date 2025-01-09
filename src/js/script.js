const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonType = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialA = document.getElementById("special-attack");
const pokemonSpecialD = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");
const pokemonSprite = document.getElementById("sprite-container");

const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
searchBtn.addEventListener("click", getData);
async function getData(event) {

    const searchValue = searchInput.value;
    event.preventDefault();
    try {
        const res = await fetch(`${url + searchValue.toLowerCase()}`);
        const data = await res.json();
        displayData(data);
    } catch (err) {
        alert("Pokémon not found");
        return
    }
}
const displayData = (data) => {
    pokemonType.innerText = "";
    pokemonName.innerText = data.name.toUpperCase();
    pokemonId.innerText = "#" + data.id;
    pokemonWeight.innerText = "Weight: " + data.weight;
    pokemonHeight.innerText = "Height: " + data.height;
    pokemonHp.innerText = data.stats[0].base_stat;
    pokemonAttack.innerText = data.stats[1].base_stat;
    pokemonDefense.innerText = data.stats[2].base_stat;
    pokemonSpecialA.innerText = data.stats[3].base_stat;
    pokemonSpecialD.innerText = data.stats[4].base_stat;
    pokemonSpeed.innerText = data.stats[5].base_stat;

    for (let i = 0; i < data.types.length; i++) {
        const typeName = data.types[i].type.name; 
        const typeDiv = document.createElement("div"); 
        typeDiv.innerText = typeName; 
        typeDiv.classList.add("type", typeName); 
        pokemonType.appendChild(typeDiv); 
    }

    pokemonSprite.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" />`;
};
