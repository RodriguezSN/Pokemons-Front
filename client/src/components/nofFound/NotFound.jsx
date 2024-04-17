import React from "react";
import style from "./NotFound.module.css"
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className={style.divConteinerNotFound}>
            <div className={style.divH1}>
                <h1>Page Not Found</h1>
            </div>
            <div className={style.divImg}>

            </div>
                <h4>RUNS.. !!!!</h4>
            <div className={style.divButton}>
                <Link to="/">
                    <button>Be safe again!</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound