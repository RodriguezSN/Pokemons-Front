const axios = require("axios")
const {Pokemons, Types} = require("../db")

const getAllPokemonsControllers = async () => {

    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
    const {results} = data
    console.log(data)
    return results
}

module.exports = getAllPokemonsControllers