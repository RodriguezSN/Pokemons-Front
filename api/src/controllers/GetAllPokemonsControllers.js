const axios = require("axios")
const {Pokemon, Type} = require("../db")
const URL_LIMIT = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=120`
const URL = `https://pokeapi.co/api/v2/pokemon`



const getAllPokemonsControllers = async () => {

    const {data} = await axios.get(URL_LIMIT)
    const {results} = data

    const pokemonsPromises = results.map( async (pokemon) => {
        const {data} = await axios.get(pokemon.url)
        return data
    })

    const pokemons = await Promise.all(pokemonsPromises)


    const pokemonsApi = []

    pokemons.map( pokemon => {
        const newPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites?.other?.dream_world?.front_default,
            hp: pokemon.stats[0]?.base_stat,
            attack: pokemon.stats[1]?.base_stat,
            defense: pokemon.stats[2]?.base_stat,
            speed: pokemon.stats[5]?.base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            origin: "api"
        }
        pokemonsApi.push(newPokemon)
    })

    const pokemonsDb = []

    const dataDb = await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ["name"],
            through: {attributes:[]}
        }
    });
    // dataDb [pokemon{ dataValues:{} _proviusDataValues:{},..} pokemon {dataValues:{} _proviusDataValues:{},..}]
    dataDb.map(pokemons => {
        pokemonsDb.push(pokemons.dataValues)
    })

    return {pokemonsApi, pokemonsDb}
    
    
}

module.exports = getAllPokemonsControllers