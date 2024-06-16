import style from "./Home.module.css";
import React, { useState } from "react";
import Cards from "../cards/Cards";
import NavBar from "../navBar/NavBar";
import Filters from "../filters/Filters";
import Footer from "../footer/Footer";

const Home = ({ page, setPage }) => {
	return (
		<div className={style.divConteinerHome}>
			<NavBar />
			<Filters />
			<Cards page={page} setPage={setPage} />
			<Footer />
		</div>
	);
};

export default Home;
