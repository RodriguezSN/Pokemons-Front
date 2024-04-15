import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPokemons } from "../../redux/actions"
import Card from "../card/Card"
const Cards = ({page, setPage}) => {

    const allPokemons = useSelector(state => state.allPokemons)
    
    const dispatch = useDispatch() 
    const [loanding, setLoanding] = useState(true)
    useEffect(()=>{
        const axiosData = async () => {
            try {
                dispatch(getAllPokemons())
                setLoanding(false)
            } catch (error) {
                console.log("Error en los datos", error)
            }
        }
        axiosData()
    },[dispatch])
//PAGINADO

    const pokemonsForPage = 12

    const startIndex = (page - 1) * pokemonsForPage
    const endIndex = startIndex + pokemonsForPage

    const nextPage = () => {
        setPage(page + 1)
    }
    const prevPage = () => {
        setPage(page - 1)
    }
    const goToFirsPage = () => {
        setPage(1)
    }
    const goToLastPage = () => {
        const totalPages = Math.ceil(allPokemons.length / pokemonsForPage)
        setPage(totalPages)
    }
     return (
        <div>
            <div className="paginado">
                <button onClick={goToFirsPage} disabled={page === 1}>◄◄</button>
                <button onClick={prevPage} disabled={page === 1}>◄</button>
                <span>{page}</span>
                <button onClick={nextPage} disabled={endIndex >= allPokemons.length}>►</button>
                <button onClick={goToLastPage} disabled={endIndex >= allPokemons.length}>►►</button>
            </div>
            <h1>Cards</h1>
            {
                loanding ? (
                    <div> 
                        <img src="https://media.tenor.com/fSsxftCb8w0AAAAi/pikachu-running.gif" alt="" />
                    </div>
                ) : (
                    <div>
                    {
                        allPokemons.length >= 0 ? (
                            allPokemons.slice(startIndex,endIndex).map( (pokemon, index) => (
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
            <div className="paginado">
                <button onClick={goToFirsPage} disabled={page === 1}>◄◄</button>
                <button onClick={prevPage} disabled={page === 1}>◄</button>
                <span>{page}</span>
                <button onClick={nextPage} disabled={endIndex >= allPokemons.length}>►</button>
                <button onClick={goToLastPage} disabled={endIndex >= allPokemons.length}>►►</button>
            </div>
        </div>
     )
}

export default Cards


