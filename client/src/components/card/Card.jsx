import React from "react"
import { Link } from "react-router-dom"

const Card = ({id, name, image, type}) => {
  
    return (
        <div key={id}>
            <h3>{name}</h3>
            <h3>Type: {type}</h3>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} />
            </Link>
        </div>
    )
}

export default Card