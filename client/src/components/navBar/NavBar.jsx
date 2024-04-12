import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import React,  { useEffect, useState } from "react"
import { getAllPokemons, getAllTypes, getPokemonsName } from "../../redux/actions"

const NavBar = () => {
    const dispatch = useDispatch()
    const allTypes = useSelector( state => state.allTypes)

    useEffect(() => {
        const axiosData = async () => {
            dispatch(getAllTypes())
        }
        axiosData()
    }, [dispatch] )

    const [name, setName] = useState("")
    const handleInput = (event) => {
        const {value} = event.target
        setName(value)
    }
    const handleSearch = () => {
        dispatch(getPokemonsName(name))
        setName("")
    }
    const handleAllPokemons = () => {
        dispatch(getAllPokemons())
    }

    const handleFiltros = ({target}) => {
        const {value} = target
        console.log(value)
    }

    return (
        <div>
            <div className="divForms">
                <p>Create your favorite pokemon here!!</p>
                <Link to="/form">
                    <button>Create</button>
                </Link>
            </div>
            <div className="searchName">
                <input  type="text" onChange={handleInput} name="searchBar" id="searchBar" value={name} />
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleAllPokemons}>All Pokemons</button>
            </div>
            <div className="divLogOut">
                <Link to="/">
                    <button>Log out</button>
                </Link>
            </div>
            <div className="filtroTypes">
                <label >Por types: </label>
                <select name="filtro" id="filtro" defaultValue="sin filtro" onChange={handleFiltros}>
                    <option value="sin filtro" disabled hidden>Sin filtro</option>
                    {
                        allTypes.map( type => (
                            <option value={type.name} key={type.name}>{type.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="filtroAZ">
                <label>Orden: </label>
                <select name="filtro" id="filtro" defaultValue="sin filtro" onChange={handleFiltros}>
                    <option value="sin filtro" disabled hidden>Sin filtro</option>
                    <option value="a-z" key="a-z" >Ascendente</option>
                    <option value="z-a" key="z-a">Descendente</option>
                </select>
            </div>
            <div className="filtroDBoAPI">
                <label>api/db: </label>
                <select name="filtro" id="filtro" defaultValue="sin filtro" onChange={handleFiltros}>
                    <option value="sin filtro" disabled hidden>Sin filtro</option>
                    <option value="api" key="api" >API</option>
                    <option value="db" key="db">DB</option>
                </select>
            </div>
            <hr />
        </div>
    )
}

export default NavBar