const axios = require("axios")
const {Type} = require("../db")
const URL_TYPES = `https://pokeapi.co/api/v2/type`
const getTypesControllers = async () => {

    const {data} = await axios.get(URL_TYPES)
    const {results} = data

    //? me traigo todos los types desde la tabla type
    const allTypes = await Type.findAll()
    //? si ya estan cargados los types los retorno y corto la ejecucion 
    if(allTypes && allTypes.length > 0) {
        console.log("1 return")
        return allTypes
    }else{
        
        //? si no hay types cargados los creo
        results.map( async type => {
            await Type.create({
                name: type.name
            })
        })
        getTypesControllers()
    }
}

module.exports = getTypesControllers