import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchableSelect from "./SearchableSelect";

function ProductForm({ city , data }) {
	const [productList, setProductList] = useState([]);
	const [selectedProductId, setSelectedProductId] = useState("");

	// Set product list from props
	useEffect(() => {
		if (data && data.Product) {
			setProductList(data.Product);
		}
	}, [data]);

	const productOptions = productList.map((p) => ({ label: p.name, value: p.id }));

	return (
		<div className="search-form">
			<h1>Recherche de produit</h1>
			<SearchableSelect options={productOptions} onChange={setSelectedProductId} placeholder="Rechercher un produit..." isDisabled={city !== null ? false : true} />
			<Link id="search-link" to={`/results/${city}/${selectedProductId}`}>
				<button disabled={city !== null && selectedProductId !== "" ? false : true}>Rechercher le produit le moins cher</button>
			</Link>
		</div>
	);
}

export default ProductForm;
