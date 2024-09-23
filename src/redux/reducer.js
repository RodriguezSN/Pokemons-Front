import {
	GET_ALL_POKEMONS,
	GET_ALL_POKEMONS_BY_ORDER,
	GET_ALL_POKEMONS_BY_ORIGIN,
	GET_ALL_TYPES,
	GET_POKEMONS_BY_TYPE,
	GET_POKEMON_BY_ID,
	GET_POKEMON_BY_NAME,
	GET_URL_IMG_FORMS
} from "./actions-types";
import { orderPokemons, orderPokemonsByType, originPokemons } from "./utils";

const initialState = {
	allPokemons: [],
	allPokemonsCopy: [],
	pokemonById: [],
	selecOrder: "sin filtro",
	selecOrigin: "ambos",
	selecType: "sin filtro",
	allTypes: [],
	allTypesCopy: [],
	imgForms:
		"https://res.cloudinary.com/dwvdvzg1k/image/upload/v1724722529/necxkzdyexaet9fh7cal.png"
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POKEMONS:
			return {
				...state,
				allPokemons: action.payload,
				allPokemonsCopy: [...action.payload]
			};
		case GET_ALL_TYPES:
			return {
				...state,
				allTypes: action.payload,
				allTypesCopy: action.payload
			};
		case GET_POKEMON_BY_NAME:
			return {
				...state,
				allPokemons: action.payload
			};
		case GET_POKEMON_BY_ID:
			return {
				...state,
				pokemonById: action.payload
			};
		case GET_ALL_POKEMONS_BY_ORIGIN:
			return {
				...state,
				allPokemons: originPokemons(
					action.payload,
					[...state.allPokemonsCopy],
					state.selecOrder,
					state.selecType
				),
				selecOrigin: action.payload
			};

		case GET_ALL_POKEMONS_BY_ORDER:
			return {
				...state,
				allPokemons: orderPokemons(
					action.payload,
					[...state.allPokemonsCopy],
					state.selecOrigin,
					state.selecType
				),
				selecOrder: action.payload
			};
		case GET_POKEMONS_BY_TYPE:
			return {
				...state,
				allPokemons: orderPokemonsByType(
					action.payload,
					[...state.allPokemonsCopy],
					state.selecOrder,
					state.selecOrigin
				),
				selecType: action.payload
			};
		case GET_URL_IMG_FORMS:
			return {
				...state,
				imgForms: action.payload
			};
		default: {
			return {
				...state
			};
		}
	}
};

export default reducer;

//* ORIGIN

/*
case GET_ALL_POKEMONS_BY_ORIGIN:
           { const value = action.payload 
            if(value === "ambos"){
                return {
                    ...state,
                    allPokemons: state.allPokemonsCopyTwo,
                    allPokemonsCopy: state.allPokemonsCopyTwo
                }
            } 
            if(value === "api"){
                const filtradoApi = []
                state.allPokemonsCopyTwo.filter(pokemon => {if(pokemon.origin === "api"){filtradoApi.push(pokemon)}})
                return {
                    ...state,
                    allPokemons: filtradoApi,
                    allPokemonsCopy: filtradoApi
                }
            }
            if(value === "db"){
                const filtradoDb = []
                state.allPokemonsCopyTwo.filter(pokemon => {if(pokemon.origin === "DB"){filtradoDb.push(pokemon)}}) 
                return {
                    ...state,
                    allPokemons: filtradoDb,
                    allPokemonsCopy: filtradoDb
                }
            }}


*/

//* ORDER
/*
  case GET_ALL_POKEMONS_BY_ORDER:
            {const value = action.payload
                if(value === "sin filtro"){
                    return{
                        ...state,
                        allPokemons: state.allPokemonsCopy
                    }
                }
                if(value === "a-z"){
                  
                    const filtroAscendente = [...state.allPokemonsCopy].sort( (a,b) => a.name.localeCompare(b.name))
                    const filtroAscendenteInvisible = [...state.allPokemonsCopyTwo].sort( (a,b) => a.name.localeCompare(b.name))
                    return {
                        ...state,
                        allPokemons: filtroAscendente,
                        allPokemonsCopyTwo: filtroAscendenteInvisible
                    }
                }
                if(value === "z-a"){
                    const filtroDescendente = [...state.allPokemonsCopy].sort( (a,b) => b.name.localeCompare(a.name))
                    const filtroAscendenteInvisible = [...state.allPokemonsCopyTwo].sort( (a,b) => a.name.localeCompare(b.name))
                    return {
                        ...state,
                        allPokemons: filtroDescendente,
                        allPokemonsCopyTwo: filtroAscendenteInvisible
                    }
                }
            }
*/
