const axios = require("axios")
const {Pokemon, Type} = require("../db")

const getNamePokemonControllers = async (name) => {
    const nameTolowerkeado = name.toLowerCase()
    console.log(name)
    const {data} = await axios.get(`http://localhost:3001/pokemon`)
    const existeAPI = data.pokemonsApi.find( pokemon => {
       return pokemon.name.toLowerCase().includes(name.toLowerCase())
    })
    const existeDB = data.pokemonsDb.find(pokemon => {
       return pokemon.name.toLowerCase().includes(name.toLowerCase())
    })

    if(existeAPI && existeDB){
        return {existeAPI, existeDB}
    }else if(existeDB){
        return existeDB
    }else if(existeAPI){
        return existeAPI
    }else{
        return "No se encontraron coincidencias"
    }
   
}

module.exports = getNamePokemonControllers