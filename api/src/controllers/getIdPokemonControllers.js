const axios = require("axios")
const {Pokemon, Type} = require("../db")
const URL = `https://pokeapi.co/api/v2/pokemon`

const getIdPokemonController = async (id) => {

    const {data} = await axios.get(`${URL}/${id}`)
 

    const pokemonApi = {
        id: data.id,
        name: data.name,
        image: data.sprites?.front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        origin: "api"
    }

    return pokemonApi
    
}

module.exports = getIdPokemonController