import { GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME } from "./actions-types"

const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    pokemonById: [],
    allTypes:[],
    allTypesCopy:[],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                allPokemonsCopy: action.payload
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                allTypes: action.payload,
                allTypesCopy: action.payload
            }
        case GET_POKEMON_BY_NAME: 
        return {
            ...state,
            allPokemons: action.payload 
        }
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonById: action.payload
            }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer
