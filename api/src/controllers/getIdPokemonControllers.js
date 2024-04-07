const axios = require("axios")

const getIdPokemonController = async (id) => {
    const idNumber = Number(id)
       
    if(isNaN(idNumber)){
        return "Ingrese un numero"
    }else if(idNumber < 1 || idNumber > 20){
        return "Ingrese un numero entre 1 y 20"    
    }else{
        const {data} = await axios.get(`http://localhost:3001/pokemon`)
        const pokemonForId = data.pokemonsApi.find(pokemon => {
            return pokemon.id === idNumber
        })
        return pokemonForId
    }
    
}

module.exports = getIdPokemonController