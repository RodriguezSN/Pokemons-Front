import { Link } from "react-router-dom";
import React from "react";
import style from "./landing.module.css";

const Landing = () => {
	return (
		<div className={style.divLanding}>
			<h3 className={style.hLanding}>Welcome to the Pokedex</h3>
			<div className={style.buttonEnter}>
				<Link to="/home">
					<button>Start</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
