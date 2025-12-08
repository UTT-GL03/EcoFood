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

const getLocalProducers = async (cityId) => {
	const response = await fetch("http://localhost:5984/ecofood-db/_find", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({
			selector: {
				type: "local_producer",
				city_id: parseInt(cityId.split("_")[1]),
			},
			limit: 100,
		}),
	});
	const data = await response.json();
	return data.docs;
};

const ResultsList = ({ type }) => {
	const ITEMS_PER_PAGE = 4;

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
	const [localProducers, setLocalProducers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const [shopsData, productData, localProducersData] = await Promise.all([getShops(cityId), productId ? getProduct(productId) : Promise.resolve(null), getLocalProducers(cityId)]);
				setShops(shopsData);
				setProduct(productData);
				setLocalProducers(localProducersData);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	let filteredResults = shops || [];
	console.log(filteredResults);

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

	const displayedResults = filteredResults.slice(0, displayedCount);
	const hasMore = filteredResults.length > displayedCount;

	return (
		<div className="results-list">
			<h2>Résultats ({type === "product" ? "par produit" : "par panier moyen"})</h2>
			<div className="results-content">
				<div className="results-container">
					{type === "product" && product && <h3>Produit : {product.name}</h3>}
					{type === "paniermoyen"
						? displayedResults.map((item, index) => <AverageResult item={item} key={index} index={index} />)
						: type === "product"
						? displayedResults.map((item, index) => <ProductResult item={item} key={item.idProduct} index={index} />)
						: null}
					{hasMore && (
						<div className="pagination-controls">
							<button onClick={() => setDisplayedCount(displayedCount + ITEMS_PER_PAGE)} className="load-more-btn">
								Afficher plus ({filteredResults.length - displayedCount} restants)
							</button>
						</div>
					)}
				</div>
				<div className="local_products">
					<h2>Produits locaux disponibles :</h2>
					{localProducers.length === 0 ? (
						<p>Aucun producteur local disponible dans cette ville.</p>
					) : (
						<ul>
							{localProducers.map((producer) => (
								<li key={producer._id}>
									<h3>{producer.name}</h3>
									<p>{producer.product}</p>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default ResultsList;
