import style from "./Detail.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonId } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const pokemon = useSelector((state) => state.pokemonById);
	const [landing, setLanding] = useState(true);
	useEffect(() => {
		const axiosData = async () => {
			try {
				dispatch(getPokemonId(id));
				setTimeout(() => {
					setLanding(false);
				}, 2000);
			} catch (error) {
				console.log(error);
			}
		};
		axiosData();
	}, [dispatch]);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [dispatch]);
	let idPokemon = undefined;
	if (pokemon.origin === "DB") {
		idPokemon = pokemon.id.slice(-5, -1);
	} else {
		idPokemon = pokemon.id;
	}
	return (
		<div className={style.divGeneralDetail}>
			<div className={style.divBack}>
				<Link to="/home">
					<button>{"<"}</button>
				</Link>
			</div>
			<div className={style.pokemonDetail}>
				<div className={style.pokemonNameImg}>
					<div className={style.pokemonNameId}>
						<h1>{pokemon.name}</h1>
						<h2>N.° {idPokemon}</h2>
					</div>
					{landing ? (
						<img src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif" />
					) : (
						<img src={pokemon.image} alt={pokemon.name} />
					)}
				</div>
				<div className={style.pokemonDetalles}>
					<h2>Life: {pokemon.hp} Hp</h2>
					<h2>Defense: {pokemon.defense}</h2>
					<h2>Speed: {pokemon.speed}</h2>
					<h2>Height: {pokemon.height} M</h2>
					<h2>Weight: {pokemon.weight}Kg</h2>
					<h2>Style:</h2>
					<div className={style.divTypePadre}>
						{pokemon.type?.map((type) => (
							<div className={style.divTypeHijos} key={type}>
								<label>{type}</label>
								<br />
							</div>
						))}
					</div>
					<h2>Origin: {pokemon.origin}</h2>
				</div>
			</div>
		</div>
	);
};

export default Detail;
