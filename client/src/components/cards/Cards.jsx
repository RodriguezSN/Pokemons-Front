import style from "./Cards.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Card from "../card/Card";
const Cards = ({ page, setPage }) => {
	const allPokemons = useSelector((state) => state.allPokemons);
	const dispatch = useDispatch();
	const [loanding, setLoanding] = useState(true);
	useEffect(() => {
		const axiosData = async () => {
			try {
				setPage(1);
				dispatch(getAllPokemons());
				setTimeout(() => {
					setLoanding(false);
				}, 800);
			} catch (error) {
				console.log("Error en los datos", error);
			}
		};
		axiosData();
	}, [dispatch]);
	//PAGINADO
	useEffect(() => {
		window.scrollTo({
			top: 180,
			behavior: "smooth"
		});
	}, [page]);

	const pokemonsForPage = 12;

	const startIndex = (page - 1) * pokemonsForPage;
	const endIndex = startIndex + pokemonsForPage;

	const nextPage = () => {
		setPage(page + 1);
	};
	const prevPage = () => {
		setPage(page - 1);
	};
	const goToFirsPage = () => {
		setPage(1);
	};
	const goToLastPage = () => {
		const totalPages = Math.ceil(allPokemons.length / pokemonsForPage);
		setPage(totalPages);
	};
	return (
		<div className={style.divGeneralDesdeCards}>
			<div className={style.divCards}>
				{loanding ? (
					<div className={style.divHijoCardsLandings}>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
						<div className={style.cardLanding}>
							<div className={style.fuminado}>
								<img
									src="	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1726603340/worxnyi7uszwfabjctbg.gif"
									alt=""
								/>
							</div>
						</div>
					</div>
				) : (
					<div className={style.divHijoCards}>
						{allPokemons.length >= 0 ? (
							allPokemons
								.slice(startIndex, endIndex)
								.map((pokemon, index) => <Card {...pokemon} key={index}></Card>)
						) : (
							<h1>No hay coincidencias</h1>
						)}
					</div>
				)}
			</div>
			<div className={style.paginadoBelow}>
				<button
					className={style.paginadoleft}
					onClick={goToFirsPage}
					disabled={page === 1}
				>
					◄◄
				</button>
				<button
					className={style.paginadoleft}
					onClick={prevPage}
					disabled={page === 1}
				>
					◄
				</button>
				<span>{page}</span>
				<button
					className={style.paginadoRight}
					onClick={nextPage}
					disabled={endIndex >= allPokemons.length}
				>
					►
				</button>
				<button
					className={style.paginadoRight}
					onClick={goToLastPage}
					disabled={endIndex >= allPokemons.length}
				>
					►►
				</button>
			</div>
		</div>
	);
};

export default Cards;
