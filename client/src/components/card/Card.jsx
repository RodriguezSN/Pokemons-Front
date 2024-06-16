import style from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, type }) => {
	return (
		<div className={style.divConteinerCard} key={id}>
			<h1>{name}</h1>
			{/* <h3>Type:</h3> */}
			<div className={style.additionalInfo}>
				<div className={style.divTypePadre}>
					<div className={style.divTitleType}>
						<h3>Type:</h3>
					</div>
					<div className={style.divLine}></div>
					<div className={style.divMapTypes}>
						{type?.map((type) => (
							<div className={style.divTypeHijos} key={type}>
								<label>{type}</label>
								<br />
							</div>
						))}
					</div>
					<div className={style.divLine}></div>
					<div className={style.divButtonDetail}>
						<Link to={`/detail/${id}`}>
							<button>Detail</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={style.divImg}>
				<Link to={`/detail/${id}`}>
					<img src={image} alt={name} />
				</Link>
			</div>
		</div>
	);
};

export default Card;
