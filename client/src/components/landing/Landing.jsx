import { Link } from "react-router-dom";
import React from "react";
import style from "./landing.module.css";

const Landing = () => {
	return (
		<div className={style.divLanding}>
			<h3 className={style.hLanding}>Welcome to the Pokedex</h3>
			<Link to="/home">
				<button>Start</button>
			</Link>
		</div>
	);
};

export default Landing;
