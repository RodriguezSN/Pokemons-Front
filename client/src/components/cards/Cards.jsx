import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPokemons } from "../../redux/actions"
import Card from "../card/Card"
const Cards = () => {

    const allPokemons = useSelector(state => state.allPokemons)
    const dispatch = useDispatch() 
    useEffect(()=>{
        const axiosData = async () => {
            try {
                dispatch(getAllPokemons())
                
            } catch (error) {
                console.log("Error en los datos", error)
            }
        }
        axiosData()
    },[dispatch])

     return (
        <div>
            <h1>Cards</h1>
            {
                allPokemons.length > 0 ? (
                    allPokemons.map( (pokemon, index) => (
                        <Card {...pokemon} key={index} ></Card>
                    ))
                )
                : (
                    <h1>No hay coincidencias</h1>
                )
            }
        </div>
     )
}

export default Cards