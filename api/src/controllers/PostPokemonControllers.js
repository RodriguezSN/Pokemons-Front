const { where } = require("sequelize")
const {Pokemon, Type} = require("../db")
const axios = require("axios")
const postPokemonControllers = async ({name, image, hp, attack, defense, speed, height, weight, typeId}) => {

    //compruebo si faltan datos
    if( !name || !image || !hp || !attack ||
        !defense || !speed || !height || !weight){
            return "Faltan datos.."
        } 

    //compruebo si ya existe en la api o en la db
    const {data} = await axios.get(`http://localhost:3001/pokemon`)
    const existeAPI = data.find( pokemon => pokemon.name === name)
    const existeDB = await Pokemon.findOne({where:{name}})
    if(existeAPI || existeDB){
        return "Ya existe este pokemons"
    }

    //lo creo 
    const newPokemon = await Pokemon.create({
        name: name,
        image: image,
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
        createdInDB: true
    })
    //pasamos el id del type de string a Number
    const idTypesNumber = typeId.map( id => Number(id))
    
    const dbTypes = await Type.findAll({ where: { id: idTypesNumber } })
    
    for(let i = 0; i < dbTypes.length; i++){
        await newPokemon.addType(dbTypes[i])
    }

    return newPokemon
}
module.exports = postPokemonControllers