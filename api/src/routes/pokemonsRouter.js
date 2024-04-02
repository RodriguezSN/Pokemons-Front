const {Router} = require("express")
const getAllPokemons = require("../handlers/GetAllPokemons")

const pokemonRouter = Router()

pokemonRouter.get("/", getAllPokemons )


module.exports = pokemonRouter