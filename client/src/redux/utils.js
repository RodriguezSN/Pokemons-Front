export const filterPokemons = (filterBy, array) => {
   
    switch(filterBy){
        case "api":
            
            return array.filter( pokemon => pokemon.origin === "api")
        case "db": 
        
            return array.filter( pokemon => pokemon.origin === "DB")    
        default:
            
            return array
    }
}

export const orderPokemons = (filterBy, array) => {
    
    switch(filterBy){
        case "a-z": 
       
            return array.sort((a,b) =>  a.name.localeCompare(b.name))
        case "z-a":
           
            return array.sort( (a,b) =>  b.name.localeCompare(a.name))
        default: 
        
        return array
    }
}