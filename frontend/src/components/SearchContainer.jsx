import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import CartForm from "./CartForm";
import "./searchcontainer.css";
import SearchableSelect from "./SearchableSelect";

export default function SearchContainer() {
	const [citiesList, setCitiesList] = useState([]);
	const [selectedCity, setSelectedCity] = useState("");

	// Fetch city data from JSON file
	useEffect(() => {
		fetch("../../sample_data.json")
			.then((x) => x.json())
			.then((data) => {
				setCitiesList(data.City);
			});
	}, []);

	// Transform datas to options for SearchableSelect
	// (1) Sort by postal code
	// (2) Map to { label: "City Name - Postal Code", value: cityId }
	const cityOptions = citiesList.sort((a, b) => a.postal_code - b.postal_code).map((c) => ({ label: `${c.name} - ${c.postal_code}`, value: c.id }));

	return (
		<div className="search-container">
			<div className="city-search-container">
				<h1>Etape 1 : Choisir la ville</h1>
				<SearchableSelect options={cityOptions} onChange={setSelectedCity} placeholder="Rechercher la ville..." />
			</div>
			<h1>Etape 2 : Choisir le type de recherche</h1>
			<div className="search-forms">
				<ProductForm city={selectedCity} />
				<CartForm city={selectedCity} />
			</div>
		</div>
	);
}
