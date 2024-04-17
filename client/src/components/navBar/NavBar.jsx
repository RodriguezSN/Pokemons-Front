import style from "./navBar.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import React,  { useEffect, useState } from "react"
import { getAllPokemons, getAllTypes, getPokemonsName, pokemonByApiOrDb, pokemonsByOrder, pokemonsByType } from "../../redux/actions"

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

    const handleFiltrosOrigin = ({target}) => {
        dispatch(pokemonByApiOrDb(target.value))
    }

    const handleFiltrosOrden = ({target}) => {
        dispatch(pokemonsByOrder(target.value))
    }
    
    const handleFiltroType = ({target}) => {
        dispatch(pokemonsByType(target.value))
    }
    return (
        <div className={style.divConteinerNav}>
            <div className={style.divForms}>
                <p>Create your favorite pokemon here!!</p>
                <Link to="/form">
                    <button>Create</button>
                </Link>
            </div>
            <div className={style.searchName}>
                <input  type="text" onChange={handleInput} name="searchBar" id="searchBar" value={name} />
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleAllPokemons}>All Pokemons</button>
            </div>
            <div className={style.filtros}>    
                <div className={style.filtroTypes}>
                    <label >Por types: </label>
                    <select name="filtro" id="filtro" defaultValue="sin filtro" onChange={handleFiltroType} >
                        <option value="sin filtro" key="sin filtro">Sin filtro</option>
                        {
                            allTypes.map( type => (
                                <option value={type.name} key={type.name}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={style.filtroAZ}>
                    <label>Orden: </label>
                    <select name="filtro" id="filtro" defaultValue="sin filtro" onChange={handleFiltrosOrden}>
                        <option value="sin filtro" key="sin filtro">Sin filtro</option>
                        <option value="a-z" key="a-z" >Ascendente</option>
                        <option value="z-a" key="z-a">Descendente</option>
                    </select>
                </div>
                <div className={style.filtroDBoAPI}>
                    <label>api/db: </label>
                    <select name="filtro" id="filtro" defaultValue="ambos" onChange={handleFiltrosOrigin}>
                        <option value="ambos" key="ambos">Ambos</option>
                        <option value="api" key="api" >API</option>
                        <option value="db" key="db">DB</option>
                    </select>
                </div>
            </div>
            <div className={style.divLogOut}>
                <Link to="/">
                    <button>Log out</button>
                </Link>
            </div>
            {/* <hr /> */}
        </div>
    )
}

export default NavBar