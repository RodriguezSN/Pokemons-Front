import React, { useState } from "react"
import axios from "axios"
import { Link , useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import validate from "./validate"

const Forms = () => {

    const navigate = useNavigate()
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

    const [errors, setErrors] = useState({
        name:"Nombra a tu Pokemon!!",
        image:"Foto de tu Pokemon!!",
        hp:"Cuanta vida tiene?",
        attack:"Cuanto daño hace?",
        defense:"Cuanta defensa tiene?",
        speed:"Cual es su velocidad?",
        height:"Cual es su altura?",
        weight:"Cuanto pesa tu pokemon?"
    })

    const handleChange = (event) => {
        const {name, value} = event.target

            setPost({
                ...post,
                [name]: value
            })
        
            setErrors(validate({
                ...post,
                [name]: value
            }))
    }

    const handleSummit = async (event) => {
        event.preventDefault()
        try {
             await axios.post(`http://localhost:3001/pokemon`, post)
            alert("se cargo con exito")
            navigate("/home")
        } catch (error) {
            console.log(error.message)
        }
    }
    
    const handleSelector = (event) => {
        const {value} = event.target
        if(!post.typeId.includes(value)){
            if(value === "" || value === "--"){
                setPost({...post})
            }
            setPost({
                ...post,
                typeId:[ ...post.typeId, value]
            })
        }
       
    }
    const handleDeleteType = (event, typeDelete) => {
        event.stopPropagation();
        const newTypes = post.typeId.filter(type => type !== typeDelete)
        setPost({
            ...post,
            typeId: newTypes
        })
    }

    return (
        <div>
            <h1>Formulario</h1>
            <Link to="/home"><button>Back</button></Link>
            <form onSubmit={handleSummit} >
                <div className="formsInput">
                    <label htmlFor="name">Name: </label>
                    <input type="text" placeholder="name" name="name" id="name" onChange={handleChange} />
                    <p style={{color: "coral"}}>{errors.name ? errors.name : null}</p>
                </div>
                <div className="formsInput">
                    <label htmlFor="image">Image: </label>
                    <input type="text" placeholder="image" name="image" id="image" onChange={handleChange}/>
                    <p style={{color: "coral"}}>{errors.image ? errors.image : null}</p>
                </div>
                <div className="formsInput">
                    <label htmlFor="hp">HP: </label>
                    <input type="number" placeholder="hp" name="hp" id="hp" onChange={handleChange}/>
                    <p style={{color: "coral"}}>{errors.hp ? errors.hp : null}</p>
                </div>
                <div className="formsInput">
                    <label htmlFor="attack">Attack: </label>
                    <input type="number" placeholder="attack" name="attack" id="attack" onChange={handleChange}/>
                    <p style={{color: "coral"}}>{errors.attack ? errors.attack : null}</p>
                </div>
                <div className="formsInput">
                    <label htmlFor="defense">Defense: </label>
                    <input type="number" placeholder="defense" name="defense" id="defense" onChange={handleChange}/>
                    <p style={{color: "coral"}}>{errors.defense ? errors.defense : null}</p>
                </div>
                <div className="formsInput">
                    <label htmlFor="speed">Speed: </label>
                    <input type="number" placeholder="speed" name="speed" id="speed" onChange={handleChange} />
                    <p style={{color: "coral"}}>{errors.speed ? errors.speed : null}</p>
                </div>
                <div className="formsInput">
                    <label htmlFor="height">Height: </label>
                    <input type="number" placeholder="height" name="height" id="height" onChange={handleChange}/>
                    <p style={{color: "coral"}}>{errors.height ? errors.height : null}</p>
                </div>
                <div className="formsInput">
                    <label htmlFor="weight">Weight: </label>
                    <input type="number" placeholder="weight" name="weight" id="weight" onChange={handleChange}/>
                    <p style={{color: "coral"}}>{errors.weight ? errors.weight : null}</p>
                </div>
                <div className="formsSelect">
                    <select name="type" id="type" value="" onChange={handleSelector}>
                        <option value=""    disabled hidden >--</option>

                        {
                            allTypes.map( type => (
                                <option key={type.id} value={type.id}>{type.name}</option>
                            ))
                        }
                    </select>
                    <p style={{color: "coral"}}>{post.typeId.length === 0 ? errors.typeId : null}</p>
                </div>
                <div className="typesSelect">
                        {
                            post.typeId.map((type) => (
                                <div className="typesButton" key={type}> 
                                    <button onClick={() => handleDeleteType(event, type)}>{allTypes[type-1].name}</button>                                  
                                </div>
                            ))
                        }
                </div>
                <hr />
                <div className="buttonSubmit">
                    <button 
                        type="submit" 
                        disabled={
                            errors.name ||
                            errors.image ||
                            errors.hp ||
                            errors.attack ||
                            errors.defense ||
                            errors.speed ||
                            errors.height ||
                            errors.weight ||
                            errors.typeId
                            }>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Forms