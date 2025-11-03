import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchableSelect from "./SearchableSelect";

function ProductForm({ city }) {
	const [productList, setProductList] = useState([]);
	const [selectedProductId, setSelectedProductId] = useState("");

	// Fetch product list data from JSON file
	useEffect(() => {
		fetch("../../sample_data.json")
			.then((x) => x.json())
			.then((data) => {
				setProductList(data.Product);
			});
	}, []);

	const productOptions = productList.map((p) => ({ label: p.name, value: p.id }));

	return (
		<div className="search-form">
			<h1>Recherche de produit</h1>
			<SearchableSelect options={productOptions} onChange={setSelectedProductId} placeholder="Rechercher un produit..." isDisabled={city !== null ? false : true} />
			<Link to={`/results/${city}/${selectedProductId}`}>
				<button disabled={city !== null && selectedProductId !== "" ? false : true}>Rechercher le produit le moins cher</button>
			</Link>
		</div>
	);
}

export default ProductForm;
