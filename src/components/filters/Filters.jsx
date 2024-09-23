import { useDispatch, useSelector } from "react-redux";
import style from "./Filters.module.css";
import { useEffect } from "react";
import {
	getAllTypes,
	pokemonByApiOrDb,
	pokemonsByOrder,
	pokemonsByType
} from "../../redux/actions";
const Filters = () => {
	const dispatch = useDispatch();
	const allTypes = useSelector((state) => state.allTypes);
	useEffect(() => {
		const axiosData = () => {
			dispatch(getAllTypes());
		};
		axiosData();
	}, [dispatch]);
	const handleFiltrosOrigin = ({ target }) => {
		dispatch(pokemonByApiOrDb(target.value));
	};

	const handleFiltrosOrden = ({ target }) => {
		dispatch(pokemonsByOrder(target.value));
	};

	const handleFiltroType = ({ target }) => {
		dispatch(pokemonsByType(target.value));
	};

	return (
		<div className={style.filtros}>
			<div className={style.filtroTypes}>
				<label>Types: </label>
				<select
					name="filtro"
					id="filtro"
					defaultValue="sin filtro"
					onChange={handleFiltroType}
				>
					<option value="sin filtro" key="sin filtro">
						Sin filtro
					</option>
					{allTypes.map((type) => (
						<option value={type.name} key={type.name}>
							{type.name}
						</option>
					))}
				</select>
			</div>
			<div className={style.filtroAZ}>
				<label>Order: </label>
				<select
					name="filtro"
					id="filtro"
					defaultValue="sin filtro"
					onChange={handleFiltrosOrden}
				>
					<option value="sin filtro" key="sin filtro">
						Unfiltered
					</option>
					<option value="a-z" key="a-z">
						Upward
					</option>
					<option value="z-a" key="z-a">
						Falling
					</option>
				</select>
			</div>
			<div className={style.filtroDBoAPI}>
				<label>Api/Create: </label>
				<select
					name="filtro"
					id="filtro"
					defaultValue="ambos"
					onChange={handleFiltrosOrigin}
				>
					<option value="ambos" key="ambos">
						Both
					</option>
					<option value="api" key="api">
						API
					</option>
					<option value="db" key="db">
						Create
					</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;
