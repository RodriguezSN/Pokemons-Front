
import axios from "axios"
import { GET_ALL_POKEMONS, GET_ALL_POKEMONS_BY_ORDER, GET_ALL_POKEMONS_BY_ORIGIN, GET_ALL_TYPES, GET_POKEMONS_BY_TYPE, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME } from "./actions-types"

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/pokemon`)
            const {pokemonsApi, pokemonsDb} = data
            const dataConcat = pokemonsApi.concat(pokemonsDb)
            return dispatch({
                type: GET_ALL_POKEMONS, payload: dataConcat
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getAllTypes = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/types`)
            return dispatch({
                type: GET_ALL_TYPES , payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getPokemonsName = (name) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/pokemon/name/${name}`)
            return dispatch({
                type: GET_POKEMON_BY_NAME, payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getPokemonId = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/pokemon/${id}`)
            return dispatch({
                type: GET_POKEMON_BY_ID, payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const pokemonByApiOrDb = (value) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type:GET_ALL_POKEMONS_BY_ORIGIN, payload:value
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const pokemonsByOrder = (value) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: GET_ALL_POKEMONS_BY_ORDER, payload: value
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const pokemonsByType = (value) => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: GET_POKEMONS_BY_TYPE, payload: value
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

  