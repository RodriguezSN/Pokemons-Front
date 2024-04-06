const {Router} = require("express")
const getAllPokemons = require("../handlers/GetAllPokemons")
const getIdPokemons = require("../handlers/GetIdPokemon")
const getNamePokemon = require("../handlers/GetNamePokemon")
const postPokemon = require("../handlers/PostPokemon")

const pokemonRouter = Router()

pokemonRouter.get("/", getAllPokemons )

pokemonRouter.get("/:id", getIdPokemons)

pokemonRouter.get("/name", getNamePokemon)

pokemonRouter.post("/", postPokemon)
module.exports = pokemonRouter