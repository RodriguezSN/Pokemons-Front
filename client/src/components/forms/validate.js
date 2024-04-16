export default function validate (input) {
    const regexNumeros = /\d+/
    const regexSimbolos = /[^a-zA-Z0-9]+/;
    const regexSoloLetras = /^[a-zA-Z]+$/;
    const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
    const errors = {}

    //? NAME
    if(input.name === "") errors.name = "Ponle nombre a tu Pokemons"
        else{
            if(input.name.length <= 1) errors.name = "Minimo 2 caracteres"
            if(input.name.length > 30) errors.name = "Maximo 30 caracteres"
            if(regexNumeros.test(input.name)) errors.name = "No puede contener Numeros"
            if(regexSimbolos.test(input.name)) errors.name = "No puede contener Simbolos"
        }
    //? IMAGE
   
            if(!regexURL.test(input.image)) errors.image =  "URL no es valida"
        
    //? HP
    if(input.hp === 0 || input.hp === "") errors.hp = "Ponle un valor a tu HP"
        else{
            if(input.hp >= 1000) errors.hp = "HP max 999"
            if(regexSoloLetras.test(input.hp)) errors.hp = "No puede contener Letras"
            if(regexSimbolos.test(input.hp)) errors.hp = "No puede contener Simbolos"
        }
    //? ATTACK
    if(input.attack === 0 || input.attack === "") errors.attack = "Ponle un valor a tu attack"
        else{
            if(input.attack >= 1000) errors.attack = "Attack max 999"
            if(regexSoloLetras.test(input.attack)) errors.attack = "No puede contener Letras"
            if(regexSimbolos.test(input.attack)) errors.attack = "No puede contener Simbolos"
        }
    //? DEFENSE
    if(input.defense === 0 || input.defense === "") errors.defense = "Ponle un valor a tu defense"
        else{
            if(input.defense >= 1000) errors.defense = "Defense max 999"
            if(regexSoloLetras.test(input.defense)) errors.defense = "No puede contener Letras"
            if(regexSimbolos.test(input.defense)) errors.defense = "No puede contener Simbolos"
        }
    //? SPEED
    if(input.speed === 0 || input.speed === "") errors.speed = "Ponle un valor a tu speed"
        else{
            if(input.speed >= 1000) errors.speed = "Speed max 999"
            if(regexSoloLetras.test(input.speed)) errors.speed = "No puede contener Letras"
            if(regexSimbolos.test(input.speed)) errors.speed = "No puede contener Simbolos"
        }
    //? HEIGHT
    if(input.height === 0 || input.height === "") errors.height = "Ponle un valor a tu height"
        else{
            if(input.height >= 1000) errors.height = "Height max 999"
            if(regexSoloLetras.test(input.height)) errors.height = "No puede contener Letras"
            if(regexSimbolos.test(input.height)) errors.height = "No puede contener Simbolos"
        }
    //? WEIGHT
    if(input.weight === 0 || input.weight === "") errors.weight = "Ponle un valor a tu weight"
        else{
            if(input.weight >= 1000) errors.weight = "HP max 999"
            if(regexSoloLetras.test(input.weight)) errors.weight = "No puede contener Letras"
            if(regexSimbolos.test(input.weight)) errors.weight = "No puede contener Simbolos"
        }
    //? TYPE
    // if(input.typeId.length === 0 && input.typeId.includes("")) errors.typeId = "Tu pokemon debe pertener a algun type vale?"
    return errors
}


