export const originPokemons = (filterBy, array, order, type) => {
    

    switch(filterBy){
        case "api":
        {
            let newArray = []
            if(order === "a-z"){
                newArray = orderPokemons("a-z", array, "ambos")
                    // if(type !== "sin filtro"){
                    // newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                    // return newArray.filter( pokemon => pokemon.origin === "api") 
                    // }
                return newArray.filter( pokemon => pokemon.origin === "api")
            }
            if(order === "z-a"){
                newArray = orderPokemons("z-a", array, "ambos")
                    // if(type !== "sin filtro"){
                    //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                    //     return newArray.filter( pokemon => pokemon.origin === "api")
                    // }
                return newArray.filter( pokemon => pokemon.origin === "api")
            }
                // if(type !== "sin filtro"){
                //     array = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                //     return array
                // }
            return array.filter( pokemon => pokemon.origin === "api")
        }
        case "db": 
        {
            let newArray = []
            if(order === "a-z"){
                newArray = orderPokemons("a-z", array, "ambos")
                    // if(type !== "sin filtro"){
                    //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                    //     return newArray.filter( pokemon => pokemon.origin === "DB")
                    // }
                return newArray.filter( pokemon => pokemon.origin === "DB")
            }
            if(order === "z-a"){
                newArray = orderPokemons("z-a", array, "ambos")
                    // if(type !== "sin filtro"){
                    //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                    //     return newArray.filter( pokemon => pokemon.origin === "DB")
                    // }
                return newArray.filter( pokemon => pokemon.origin === "DB")
            }
                // if(type !== "sin filtro"){
                //     array = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                //     return array.filter( pokemon => pokemon.origin === "DB")
                // }
            return array.filter( pokemon => pokemon.origin === "DB")  
        }     
        default:
            {
                let newArray = []
                if(order === "a-z"){
                    newArray = orderPokemons("a-z", array, "ambos")
                        // if(type !== "sin filtro"){
                        //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                        //     return newArray 
                        // }
                    return newArray 
                }
                if(order === "z-a"){
                    newArray = orderPokemons("z-a", array, "ambos")
                        // if(type !== "sin filtro"){
                        //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                        //     return newArray 
                        // }
                    return newArray 
                }
                    // if(type !== "sin filtro"){
                    //    array = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                    //     return array 
                    // }
                return array 
            }
            
    }
}


export const orderPokemons = (filterBy, array, origin, type) => {
 
    switch(filterBy){
        case "a-z": 
            {
                let newArray = []
                if(origin === "api"){
                    newArray = originPokemons(origin, array, "sin filtro" )
                        // if(type !== "sin filtro"){
                        //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                        //     return newArray.sort((a,b) =>  a.name.localeCompare(b.name))
                        // }
                    return newArray.sort((a,b) =>  a.name.localeCompare(b.name))
                }
                if(origin === "db"){
                    newArray = originPokemons(origin, array, "sin filtro" )
                        // if(type !== "sin filtro"){
                        //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                        //     return newArray.sort((a,b) =>  a.name.localeCompare(b.name))
                        // }
                    return newArray.sort((a,b) =>  a.name.localeCompare(b.name))
                } 
                    // if(type !== "sin filtro"){
                    //     array = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                    //     return array.sort((a,b) =>  a.name.localeCompare(b.name))
                    // }
                
                return array.sort((a,b) =>  a.name.localeCompare(b.name))
            }
        case "z-a":
            {
                let newArray = []
                if(origin === "api"){
                    newArray = originPokemons(origin, array, "sin filtro" )
                        // if(type !== "sin filtro"){
                        //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                        //     return newArray.sort( (a,b) =>  b.name.localeCompare(a.name))
                        // }
                    return newArray.sort( (a,b) =>  b.name.localeCompare(a.name))
                }
                if(origin === "db"){
                    newArray = originPokemons(origin, array, "sin filtro" )
                        // if(type !== "sin filtro"){
                        //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                        //     return newArray.sort( (a,b) =>  b.name.localeCompare(a.name))
                        // }
                    return newArray.sort( (a,b) =>  b.name.localeCompare(a.name))
                } 
                    // if(type !== "sin filtro"){
                    //    array = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                    //     return array.sort( (a,b) =>  b.name.localeCompare(a.name))
                    // }
                
                return array.sort( (a,b) =>  b.name.localeCompare(a.name))
                    
            }
        default:
            {
                let newArray = []
                if(origin === "api"){
                    newArray = originPokemons(origin, array, "sin filtro" )
                        // if(type !== "sin filtro"){
                        //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                        //     return newArray 
                        // }
                    return newArray 
                }
                if(origin === "db"){
                    newArray = originPokemons(origin, array, "sin filtro" )
                        // if(type !== "sin filtro"){
                        //     newArray = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                        //     return newArray 
                        // }
                    return newArray 
                }
                //    if(type !== "sin filtro"){
                //         array = orderPokemonsByType(type, newArray, "sin filtro", "ambos")
                //         return array 
                //     } 
                    
                return array 
            }
        }
}

export const orderPokemonsByType = (filterBy, array, order, origin) => {
    switch(filterBy){
        case "sin filtro":{
            return array
        }
        case filterBy:{
            const newArray = [] 
            array.forEach( pokemon => {
                if(pokemon.type?.some(type => type === filterBy)) 
                newArray.push(pokemon)
            })
                if(origin === "api"){
                    let newArraytwo = []
                    newArraytwo = originPokemons(origin, newArray, order )
                    return newArraytwo
                }
                if(origin === "db"){
                    let newArraytwo = []
                    newArraytwo = originPokemons(origin, newArray, order )
                    return newArraytwo
                }
                if(order === "a-z"){
                    let newArraytwo = []
                    newArraytwo = orderPokemons(order, newArray, order)
                    return newArraytwo
                }
                if(order === "z-a"){
                    let newArraytwo = []
                    newArraytwo = orderPokemons(order, newArray, order)
                    return newArraytwo
                }
            return newArray
        }
        default:
            return array
    }
}
