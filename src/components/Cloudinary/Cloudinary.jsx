import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUrlImgForms } from "../../redux/actions";
import style from "./Cloudinary.module.css";

const Cloudinary = () => {
	const preset_name = process.env.REACT_APP_PRESET_NAME;
	const cloud_name = process.env.REACT_APP_CLOUD_NAME;

	const dispatch = useDispatch();
	const handleUrl = (imgUrl) => {
		dispatch(getUrlImgForms(imgUrl));
	};

	const [image, setImage] = useState("");
	const [loading, setLoiding] = useState(false);

	const uploadImage = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", preset_name);

		setLoiding(true);

		try {
			const response = await fetch(
				`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
				{
					method: "POST",
					body: data
				}
			);

			const file = await response.json();
			setImage(file.secure_url);
			handleUrl(file.secure_url);
			setLoiding(false);
		} catch (error) {
			console.error("Error uploading image: ", error);
			setLoiding(false);
		}
	};

	return (
		<div className={style.divPadre}>
			<input
				type="file"
				name="file"
				placeholder="subir img"
				onChange={(e) => uploadImage(e)}
			/>
		</div>
	);
};

export default Cloudinary;
