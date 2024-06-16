import style from "./navBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { getAllPokemons, getPokemonsName } from "../../redux/actions";

const NavBar = () => {
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const handleInput = (event) => {
		const { value } = event.target;
		setName(value);
	};
	const handleSearch = () => {
		dispatch(getPokemonsName(name));
		setName("");
	};
	const handleAllPokemons = () => {
		dispatch(getAllPokemons());
	};

	return (
		<div className={style.divConteinerNav}>
			<div className={style.divPokedex}>
				<h2>Pokedex</h2>
				{/* <img
					src="https://img.icons8.com/bubbles/50/pikachu-pokemon.png"
					alt="pikachu-pokemon"
				/> */}
				<img src="data:image/png;base64,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"></img>
			</div>
			<div className={style.divForms}>
				<Link to="/form">
					<button>Create your favorite pokemon!!</button>
				</Link>
			</div>
			<div className={style.searchName}>
				<input
					type="text"
					onChange={handleInput}
					name="searchBar"
					id="searchBar"
					value={name}
					placeholder="search pokemons"
				/>
				<button className={style.buttonSearch} onClick={handleSearch}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="size-6"
						width="100%"
						height="100%"
					>
						<path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
					</svg>
				</button>
				<button className={style.buttonAll} onClick={handleAllPokemons}>
					All Pokemons
				</button>
			</div>
			<div className={style.divLogOut}>
				<Link to="/">
					<button>Log out</button>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
