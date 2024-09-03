import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import validate from "./validate";
import style from "./Forms.module.css";
import Cloudinary from "../Cloudinary/Cloudinary.jsx";

const Forms = () => {
	const navigate = useNavigate();
	const allTypes = useSelector((state) => state.allTypes);
	const urlImgForm = useSelector((state) => state.imgForms);
	const [post, setPost] = useState({
		name: "",
		image: urlImgForm,
		hp: 0,
		attack: 0,
		defense: 0,
		speed: 0,
		height: 0,
		weight: 0,
		typeId: [],
		origin: "DB"
	});
	useEffect(() => {
		setPost({ ...post, image: urlImgForm });
	}, [urlImgForm]);
	const [errors, setErrors] = useState({
		name: "Nombra a tu Pokemon!!",
		image: "Foto de tu Pokemon!!",
		hp: "Cuanta vida tiene?",
		attack: "Cuanto daño hace?",
		defense: "Cuanta defensa tiene?",
		speed: "Cual es su velocidad?",
		height: "Cual es su altura?",
		weight: "Cuanto pesa tu pokemon?"
	});
	const imgTypePokemon = [
		{
			value: "normal",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321385/dl6qie7b7lbaclsx5sc7.png"
		},
		{
			value: "fighting",
			url: "	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321515/tszcp34fdhtaix12pbbg.png"
		},
		{
			value: "flying",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321307/gg42oohvpl0q0xrwmlqn.png"
		},
		{
			value: "poison",
			url: "	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321448/q7w1ye2hvxwhbtpgubfk.png"
		},
		{
			value: "ground",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321482/lc8jcgo83cv9bocqravb.png"
		},
		{
			value: "rock",
			url: "	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321204/ttafqr2eiozfx5x0phbe.png"
		},
		{
			value: "bug",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321408/lpdx6vdtqolrwzb7naua.png"
		},
		{
			value: "ghost",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321265/zlm7gms45lyg4km9y1lz.png"
		},
		{
			value: "steel",
			url: "	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321580/vevhucccha20mpw2apih.png"
		},
		{
			value: "fire",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725319176/wxyujjgx4z2uhce0gqxk.png"
		},
		{
			value: "water",
			url: "	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725319227/qilyoonhz5dg5jiadq4o.png"
		},
		{
			value: "grass",
			url: "	https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321239/xfdecmrfmxcgsqu7jo4d.png"
		},
		{
			value: "electric",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725311244/jhjce9oh0vihdss63exf.png"
		},
		{
			value: "psychic",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321459/nthohhof4lbw1fd7i5le.png"
		},
		{
			value: "ice",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321331/lifgtlmlyxdjkvml5vqx.png"
		},
		{
			value: "dragon",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321366/jana6mpldajixl6zfapg.png"
		},
		{
			value: "dark",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321543/bct37qceeqwkcrvqyyzt.png"
		},
		{
			value: "fairy",
			url: ""
		},
		{
			value: "unknown",
			url: ""
		},
		{
			value: "shadow",
			url: "https://res.cloudinary.com/dwvdvzg1k/image/upload/v1725321691/dudkt8y8azs5bpremzuf.png"
		}
	];
	const handleChange = (event) => {
		const { name, value } = event.target;

		setPost({
			...post,
			[name]: value
		});

		setErrors(
			validate({
				...post,
				[name]: value
			})
		);
	};

	const handleSummit = async (event) => {
		event.preventDefault();
		try {
			await axios.post(`http://localhost:3001/pokemon`, post);
			alert("se cargo con exito");
			navigate("/home");
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSelector = (event) => {
		const { value } = event.target;
		if (!post.typeId.includes(value)) {
			if (value === "" || value === "--") {
				setPost({ ...post });
			}
			setPost({
				...post,
				typeId: [...post.typeId, value]
			});
		}
	};
	const handleDeleteType = (event, typeDelete) => {
		event.stopPropagation();
		const newTypes = post.typeId.filter((type) => type !== typeDelete);
		setPost({
			...post,
			typeId: newTypes
		});
	};

	return (
		<div className={style.divPadre}>
			<div className={style.divCabeza}>
				<div className={style.divTittle}>
					<h1>Create your favorite pokemon!!</h1>
				</div>
				<div className={style.divBack}>
					<Link to="/home">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="size-6"
							>
								<path d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
							</svg>
						</button>
					</Link>
				</div>
			</div>
			<div className={style.divBody}>
				<div className={style.divForm}>
					<form onSubmit={handleSummit}>
						<div className={style.divEx}>
							<div className={style.divName}>
								<div className={style.inputs}>
									<label htmlFor="name">Name: </label>
									<input
										type="text"
										placeholder="name"
										name="name"
										id="name"
										onChange={handleChange}
										maxLength="20"
									/>
								</div>
								<div className={style.error}>
									<p style={{ color: "coral" }}>
										{errors.name ? errors.name : null}
									</p>
								</div>
							</div>
							<div className={style.divName}>
								<div className={style.inputs}>
									<label htmlFor="image">Image: </label>
									<Cloudinary />
									{/* <div className={style.cloudinary}></div> */}
								</div>

								{/* <div className={style.error}>
									<p style={{ color: "coral" }}>
										{errors.image ? errors.image : null}
									</p>
								</div> */}
							</div>
							<div className={style.divName}>
								<div className={style.inputs}>
									<label htmlFor="hp">HP: </label>
									<input
										type="number"
										placeholder="hp"
										name="hp"
										id="hp"
										onChange={handleChange}
									/>
								</div>
								<div className={style.error}>
									<p style={{ color: "coral" }}>
										{errors.hp ? errors.hp : null}
									</p>
								</div>
							</div>
							<div className={style.divName}>
								<div className={style.inputs}>
									<label htmlFor="attack">Attack: </label>
									<input
										type="number"
										placeholder="attack"
										name="attack"
										id="attack"
										onChange={handleChange}
									/>
								</div>
								<div className={style.error}>
									<p style={{ color: "coral" }}>
										{errors.attack ? errors.attack : null}
									</p>
								</div>
							</div>
							<div className={style.divName}>
								<div className={style.inputs}>
									<label htmlFor="defense">Defense: </label>
									<input
										type="number"
										placeholder="defense"
										name="defense"
										id="defense"
										onChange={handleChange}
									/>
								</div>
								<div className={style.error}>
									<p style={{ color: "coral" }}>
										{errors.defense ? errors.defense : null}
									</p>
								</div>
							</div>
							<div className={style.divName}>
								<div className={style.inputs}>
									<label htmlFor="speed">Speed: </label>
									<input
										type="number"
										placeholder="speed"
										name="speed"
										id="speed"
										onChange={handleChange}
									/>
								</div>
								<div className={style.error}>
									<p style={{ color: "coral" }}>
										{errors.speed ? errors.speed : null}
									</p>
								</div>
							</div>
							<div className={style.divName}>
								<div className={style.inputs}>
									<label htmlFor="height">Height: </label>
									<input
										type="number"
										placeholder="height"
										name="height"
										id="height"
										onChange={handleChange}
									/>
								</div>
								<div className={style.error}>
									<p style={{ color: "coral" }}>
										{errors.height ? errors.height : null}
									</p>
								</div>
							</div>
							<div className={style.divName}>
								<div className={style.inputs}>
									<label htmlFor="weight">Weight: </label>
									<input
										type="number"
										placeholder="weight"
										name="weight"
										id="weight"
										onChange={handleChange}
									/>
								</div>
								<div className={style.error}>
									<p style={{ color: "coral" }}>
										{errors.weight ? errors.weight : null}
									</p>
								</div>
							</div>
						</div>
						<div className={style.divTypesSelect}>
							<div className={style.formsSelect}>
								<select
									name="type"
									id="type"
									value=""
									onChange={handleSelector}
								>
									<option value="" disabled hidden>
										--
									</option>

									{allTypes.map((type) => (
										<option key={type.id} value={type.id}>
											{type.name}
										</option>
									))}
								</select>
								<p style={{ color: "coral" }}>
									{post.typeId.length === 0 ? errors.typeId : null}
								</p>
							</div>
							<div className={style.typesSelect}>
								{post.typeId.map((type) => (
									<div className={style.typesButton} key={type}>
										<button onClick={() => handleDeleteType(event, type)}>
											{allTypes[type - 1].name}
										</button>
									</div>
								))}
							</div>
						</div>
						<div className={style.buttonSubmit}>
							<button
								type="submit"
								disabled={
									errors.name ||
									errors.image ||
									errors.hp ||
									errors.attack ||
									errors.defense ||
									errors.speed ||
									errors.height ||
									errors.weight ||
									errors.typeId
								}
							>
								Create
							</button>
						</div>
					</form>
				</div>

				<div className={style.divDetail}>
					<h1 className={style.h1DivDetail}>{post.name}</h1>
					<div className={style.divDetailInterno}>
						<div className={style.divSup}>
							<div className={style.divDetailImg}>
								<img
									src={post.image}
									alt={post.name}
									className={
										post.image ==
										"https://res.cloudinary.com/dwvdvzg1k/image/upload/v1724722529/necxkzdyexaet9fh7cal.png"
											? style.rotarImg
											: ""
									}
								/>
							</div>
							<div className={style.divDetailTypes}>
								<h1>Type</h1>
								{post.typeId.map((type) => (
									<div key={type}>
										<h3>{allTypes[type - 1].name}</h3>
										<img
											src={imgTypePokemon[type - 1].url}
											alt=""
											width="15%"
										/>
									</div>
								))}
							</div>
						</div>
						<div className={style.divDetailProps}>
							<div className={style.divDetailProp}>
								<h3>HP: {post.hp}</h3>
							</div>
							<div className={style.divDetailProp}>
								<h3>Attack: {post.attack}</h3>
							</div>
							<div className={style.divDetailProp}>
								<h3>Defense: {post.defense}</h3>
							</div>
							<div className={style.divDetailProp}>
								<h3>Speed: {post.speed}</h3>
							</div>
							<div className={style.divDetailProp}>
								<h3>Height: {post.height}</h3>
							</div>
							<div className={style.divDetailProp}>
								<h3>weight: {post.weight}</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forms;
