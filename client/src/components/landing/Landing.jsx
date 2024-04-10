import { Link } from "react-router-dom"
import React from "react"

const Landing = () => {

    return (
        <div>
            <h3>Bienvenido a la pokeApi</h3>
            <Link to="/home">
            <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default Landing