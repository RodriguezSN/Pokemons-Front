import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonId } from "../../redux/actions"
import {Link, useParams} from "react-router-dom"


const Detail = () => {

    const {id} = useParams()
    
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemonById)
    
    useEffect( ()=> {
        const axiosData = async () => {
            try {
                dispatch(getPokemonId(id))
            } catch (error) {
                console.log(error)
            }
        }
        axiosData()
    }, [dispatch])


    return (
        <div>
            <div>
                <Link to="/home">
                    <button>Back</button>
                </Link>
            </div>
            <div className="PokemonDetail">
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt={pokemon.name} />
                <h2>ID: {pokemon.id}</h2>
                <h2>HP: {pokemon.hp}</h2>
                <h2>Defense: {pokemon.defense}</h2>
                <h2>Speed: {pokemon.speed}</h2>
                <h2>Height: {pokemon.height}</h2>
                <h2>Weight: {pokemon.weight}</h2>
                <h2>Style:</h2>
                {pokemon.type?.map(type => (<div key={type}><label>{type}</label><br/></div>))}
                <h2>Origin: {pokemon.origin}</h2>
            </div>
        </div>
    )
}

export default Detail