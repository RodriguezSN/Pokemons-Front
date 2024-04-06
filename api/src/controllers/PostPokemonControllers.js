const {Pokemon, Type} = require("../db")

const postPokemonControllers = async (data) => {

    const newPokemon = await Pokemon.create({
        name: data.name,
        image: data.image,
        hp: data.hp,
        attack: data.attack,
        defense: data.defense,
        speed: data.speed,
        height: data.height,
        weight: data.weight,
        createdInDB: true
    })

    return newPokemon
}
module.exports = postPokemonControllers