import style from  "./Card.module.css"
import React from "react"
import { Link } from "react-router-dom"

const Card = ({id, name, image, type}) => {
  
    return (
        <div className={style.divConteinerCard} key={id}>
            <h1>{name}</h1>
            <h3>Type:</h3>
            <div className={style.divTypePadre}>
                {type?.map(type => (<div className={style.divTypeHijos} key={type}><label>{type}</label><br/></div>))}
            </div>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} />
            </Link>
        </div>
    )
}

export default Card