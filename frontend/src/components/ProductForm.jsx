import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../sample_data.json";
import SearchableSelect from "./SearchableSelect";

function ProductForm({ city }) {
	const [product, setProduct] = useState("");
	const productOptions = Product.map((p) => ({ label: p.name, value: p.id }));

	return (
		<div className="search-form">
			<h1>Recherche de produit</h1>
			<SearchableSelect options={productOptions} onChange={setProduct} placeholder="Rechercher un produit..." isDisabled={city !== null ? false : true} />
			<Link to={`/results/${city}/${product}`}>
				<button disabled={city !== null && product !== null ? false : true}>Rechercher le produit le moins cher</button>
			</Link>
		</div>
	);
}

export default ProductForm;
