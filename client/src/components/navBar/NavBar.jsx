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
        </div>
    )
}

export default NavBar