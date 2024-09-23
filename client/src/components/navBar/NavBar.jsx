import style from "./navBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAllPokemons, getPokemonsName } from "../../redux/actions";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
	const dispatch = useDispatch();
	const [navBar, setNavBar] = useState(false);
	const handleNavBar = () => {
		navBar === true ? setNavBar(false) : setNavBar(true);
	};
	//* mide el tamaño de la pantalla ***
	const [width, setWidth] = useState(window.innerWidth);
	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		console.log(width);
		setNavBar(false);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	//******************************************** */
	const [name, setName] = useState("");
	const handleInput = (event) => {
		const { value } = event.target;
		setName(value);
	};
	const handleSearch = () => {
		if (name === "") {
			return dispatch(getAllPokemons());
		}
		dispatch(getPokemonsName(name));
		setName("");
	};
	const handleAllPokemons = () => {
		dispatch(getAllPokemons());
	};

	return (
		<div className={style.divConteinerNav}>
			{width < 500 ? (
				<div className={style.divMenuMobile}>
					<div className={style.divPokedex}>
						<h2>Pokedex</h2>
						<img src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725922517/wfy63cbgvm5oyuxhimm8.png"></img>
					</div>
					<button onClick={handleNavBar}>
						<h4>| | |</h4>
					</button>
					{navBar === true ? (
						<div className={style.DivMenuMobileNavBar}>
							<NavBarMobile />
						</div>
					) : null}
				</div>
			) : (
				<div className={style.divDescktop}>
					<div className={style.divPokedex}>
						<h2>Pokedex</h2>
						<img src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725922517/wfy63cbgvm5oyuxhimm8.png"></img>
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
			)}
		</div>
	);
};

export default NavBar;
