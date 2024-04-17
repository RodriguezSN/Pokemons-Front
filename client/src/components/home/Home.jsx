import style from "./Home.module.css"
import React, { useState } from "react"
import Cards from "../cards/Cards"
import NavBar from "../navBar/NavBar"

const Home = ({page,setPage}) => {
    return (
        <div className={style.divConteinerHome}>
            <NavBar />
            <Cards page={page} setPage={setPage} />
        </div>
    )
}

export default Home