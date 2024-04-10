import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"

const Forms = () => {

    const allTypes = useSelector(state => state.allTypes)
   
    const [post, setPost] = useState({
        name:"",
        image:"",
        hp:0,
        attack:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        typeId:[],
        origin:"DB"
    })

    const handleChange = (event) => {
        const {name, value} = event.target

            setPost({
                ...post,
                [name]: value
            })
    }

    const handleSummit = async (event) => {
        event.preventDefault()
        try {
             await axios.post(`http://localhost:3001/pokemon`, post)
            alert("se cargo con exito")
        } catch (error) {
            console.log(error.message)
        }
    }
    
    const handleSelector = (event) => {
        const {value} = event.target
        if(!post.typeId.includes(value)){

            setPost({
                ...post,
                typeId:[ ...post.typeId, value]
            })
        }
       
    }

    return (
        <div>
            <h1>Formulario</h1>
            <Link to="/home"><button>Back</button></Link>
            <form onSubmit={handleSummit} >
                <div className="formsInput">
                    <label htmlFor="name">Name: </label>
                    <input type="text" placeholder="name" name="name" id="name" onChange={handleChange} />
                </div>
                <div className="formsInput">
                    <label htmlFor="image">Image: </label>
                    <input type="text" placeholder="image" name="image" id="image" onChange={handleChange}/>
                </div>
                <div className="formsInput">
                    <label htmlFor="hp">HP: </label>
                    <input type="number" placeholder="hp" name="hp" id="hp" onChange={handleChange}/>
                </div>
                <div className="formsInput">
                    <label htmlFor="attack">Attack: </label>
                    <input type="number" placeholder="attack" name="attack" id="attack" onChange={handleChange}/>
                </div>
                <div className="formsInput">
                    <label htmlFor="defense">Defense: </label>
                    <input type="number" placeholder="defense" name="defense" id="defense" onChange={handleChange}/>
                </div>
                <div className="formsInput">
                    <label htmlFor="speed">Speed: </label>
                    <input type="number" placeholder="speed" name="speed" id="speed" onChange={handleChange} />
                </div>
                <div className="formsInput">
                    <label htmlFor="height">Height: </label>
                    <input type="number" placeholder="height" name="height" id="height" onChange={handleChange}/>
                </div>
                <div className="formsInput">
                    <label htmlFor="weight">Weight: </label>
                    <input type="number" placeholder="weight" name="weight" id="weight" onChange={handleChange}/>
                </div>
                <select name="type" id="type" onChange={handleSelector}>
                    {
                        allTypes.map( type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))
                    }
                </select>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Forms