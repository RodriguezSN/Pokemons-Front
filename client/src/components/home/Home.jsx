import React from "react"
import Cards from "../cards/Cards"
import NavBar from "../navBar/NavBar"

const Home = ({page,setPage}) => {
    
    return (
        <div>
            <NavBar />
            <h1>Home</h1>
            <Cards page={page} setPage={setPage}/>
        </div>
    )
}

export default Home