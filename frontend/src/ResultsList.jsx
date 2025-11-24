import "./resultslist.css";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const getShops = async (cityId) => {
	const response = await fetch("http://localhost:5984/ecofood-db/_find", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({
			selector: {
				cityId: parseInt(cityId.split("_")[1]),
			},

			limit: 100,
		}),
	});
	const data = await response.json();
	return data.docs;
};

const getProduct = async (productId) => {
	const response = await fetch("http://localhost:5984/ecofood-db/_find", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({
			selector: {
				_id: productId,
			},
		}),
	});
	const data = await response.json();
	return data.docs[0];
};

const ResultsList = ({ type }) => {
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
		const numericProductId = parseInt(productId.split("_")[1]);
		return (
			<div key={index} className="result-item">
				<h3>{item.name}</h3>
				<p>Adresse : {item.address}</p>
				<p>Prix: {item.items.find((prod) => prod.idProduct === numericProductId).price.toFixed(2)}</p>
			</div>
		);
	}

	const { cityId, productId } = useParams();
	const [searchParams] = useSearchParams();
	const NB_A = Number(searchParams.get("nombre_adultes")) || 0;
	const NB_E = Number(searchParams.get("nombre_enfants")) || 0;

	const [shops, setShops] = useState([]);
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const [shopsData, productData] = await Promise.all([getShops(cityId), productId ? getProduct(productId) : Promise.resolve(null)]);
				setShops(shopsData);
				setProduct(productData);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	let filteredResults = shops || [];

	// Filter by type
	switch (type) {
		case "paniermoyen":
			filteredResults = filteredResults.sort((a, b) => {
				const totalA = a.average_cart_adult * NB_A + a.average_cart_kid * NB_E;
				const totalB = b.average_cart_adult * NB_A + b.average_cart_kid * NB_E;
				return totalA - totalB;
			});
			break;
		case "product": {
			const numericProductId = parseInt(productId.split("_")[1]);
			filteredResults = filteredResults
				.filter((shop) => {
					return shop.items.some((product) => product.idProduct === numericProductId);
				})
				.sort((a, b) => {
					return a.items.find((item) => item.idProduct === numericProductId).price - b.items.find((item) => item.idProduct === numericProductId).price;
				});
			break;
		}
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="results-list">
			<h2>Résultats ({type})</h2>
			<h3>Ville : {shops.find((city) => city.id === filteredResults[0]?.cityId)?.name}</h3>
			{type === "product" && product && <h3>Produit : {product.name}</h3>}
			<div className="results-container">
				{type === "paniermoyen"
					? filteredResults.map((item, index) => <AverageResult item={item} key={index} index={index} />)
					: type === "product"
					? filteredResults.map((item, index) => <ProductResult item={item} key={item.idProduct} index={index} />)
					: null}
			</div>
		</div>
	);
};

export default ResultsList;
