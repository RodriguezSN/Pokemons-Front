const axios = require("axios")
const {Pokemon, Type} = require("../db")

const getNamePokemonControllers = async (name) => {
    
    const {data} = axios.get(`http://localhost:3001/pokemon`)
    const existeAPI = data.pokemonsApi.find( pokemon => {
        pokemon.name.toLoweCase() === name.toLoweCase()
    })
    const existeDB = data.pokemonsDb.find(pokemon => {
        pokemon.name.toLoweCase() === name.toLoweCase()
    })
    if(existeAPI.name){
        return existeAPI
    }else if(existeDB.name){
        return existeDB
    }else{
        return "Algo paso"
    }
   
}

module.exports = getNamePokemonControllers