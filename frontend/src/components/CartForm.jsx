import { useState } from "react";
import { Link } from "react-router-dom";

function CartForm({ city }) {
	const [adults, setAdults] = useState(0);
	const [children, setChildren] = useState(0);
	return (
		<div>
			<div className="search-form">
				<h1>Recherche de panier moyen</h1>
				<label htmlFor="nb_a">Nombre d'adultes</label>
				<input id="nb_a" placeholder="Nombre d'adultes" className="inputSearch" name="nb_a" onChange={(e) => setAdults(e.target.value)} type="number" disabled={city !== null ? false : true} min={0} />
				<label htmlFor="nb_e">Nombre d'enfants</label>
				<input
					className="inputSearch"
					id="nb_e"
					name="nb_e"
					onChange={(e) => setChildren(e.target.value)}
					placeholder="Nombre d'enfants"
					type="number"
					disabled={city !== null ? false : true}
					min={0}
				/>

				<Link to={`/results/${city}/paniermoyen?nombre_adultes=${adults}&nombre_enfants=${children}`}>
					<button onClick={onclick} disabled={city !== null && (adults > 0 || children > 0) ? false : true}>
						Chercher le panier le moins cher
					</button>
				</Link>
			</div>
		</div>
	);
}

export default CartForm;
