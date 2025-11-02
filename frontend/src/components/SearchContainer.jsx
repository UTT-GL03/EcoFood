import { useState } from "react";
import { City } from "../../sample_data.json";
import ProductForm from "./ProductForm";
import CartForm from "./CartForm";
import "./searchcontainer.css";
import SearchableSelect from "./SearchableSelect";

export default function SearchContainer() {
	// Transform datas to options for SearchableSelect
	// (1) Sort by postal code
	// (2) Map to { label: "City Name - Postal Code", value: cityId }
	const cityOptions = City.sort((a, b) => a.postal_code - b.postal_code).map((c) => ({ label: `${c.name} - ${c.postal_code}`, value: c.id }));
	const [city, setCity] = useState("");

	return (
		<div className="search-container">
			<div className="city-search-container">
				<h1>Etape 1 : Choisir la ville</h1>
				<SearchableSelect options={cityOptions} onChange={setCity} placeholder="Rechercher la ville..." />
			</div>
			<h1>Etape 2 : Choisir le type de recherche</h1>
			<div className="search-forms">
				<ProductForm city={city} />
				<CartForm city={city} />
			</div>
		</div>
	);
}
