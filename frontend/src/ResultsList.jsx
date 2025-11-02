import "./resultslist.css";
import { useParams, useSearchParams } from "react-router-dom";
import { Product } from "../sample_data.json";
import { City } from "../sample_data.json";

const ResultsList = ({ resultsArray, type }) => {
	function AverageResult({ item, index }) {
		return (
			<div key={index} className="result-item">
				<h3>{item.name}</h3>
				<p>Nombre d'adultes : {NB_A}</p>
				<p>Prix Moyen adulte : {item.average_cart_adult.toFixed(2)}</p>
				<p>Nombre d'enfants : {NB_E}</p>
				<p>Prix Moyen enfant : {item.average_cart_kid.toFixed(2)}</p>
				<p>Prix Moyen total : {(item.average_cart_adult * NB_A + item.average_cart_kid * NB_E).toFixed(2)}</p>
			</div>
		);
	}

	function ProductResult({ item, index }) {
		return (
			<div key={index} className="result-item">
				<h3>{item.name}</h3>
				<p>Adresse : {item.address}</p>
				<p>Prix: {item.items.find((prod) => prod.idProduct.toString() === productId).price.toFixed(2)}</p>
			</div>
		);
	}

	const { cityId, productId } = useParams();
	const [searchParams] = useSearchParams();
	const NB_A = Number(searchParams.get("nombre_adultes")) || 0;
	const NB_E = Number(searchParams.get("nombre_enfants")) || 0;

	//Filter by cityId
	let filteredResults = resultsArray.filter((item) => {
		return item.cityId.toString() === cityId;
	});

	console.log("Filtered Results:", filteredResults);

	// Filter by type
	switch (type) {
		case "paniermoyen":
			filteredResults = filteredResults.sort((a, b) => {
				const totalA = a.average_cart_adult * NB_A + a.average_cart_kid * NB_E;
				const totalB = b.average_cart_adult * NB_A + b.average_cart_kid * NB_E;
				return totalA - totalB;
			});
			break;
		case "product":
			filteredResults = filteredResults
				.filter((shop) => {
					return shop.items.some((product) => product.idProduct.toString() === productId);
				})
				.sort((a, b) => {
					return a.items.find((item) => item.idProduct.toString() === productId).price - b.items.find((item) => item.idProduct.toString() === productId).price;
				});
			break;
	}

	return (
		<div className="results-list">
			<h2>Résultats ({type})</h2>
			<h3>Ville : {City.find((city) => city.id === filteredResults[0]?.cityId)?.name}</h3>
			{type === "product" && <h3>Produit : {Product.find((prod) => prod.id === Number(productId))?.name}</h3>}
			<div className="results-container">
				{type === "paniermoyen"
					? filteredResults.map((item, index) => <AverageResult item={item} index={index} />)
					: type === "product"
					? filteredResults.map((item, index) => <ProductResult item={item} key={item.idProduct} index={index} />)
					: null}
			</div>
		</div>
	);
};

export default ResultsList;
