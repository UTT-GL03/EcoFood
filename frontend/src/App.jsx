import "./App.css";
import ResultsList from "./components/ResultsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import { useState, useEffect } from "react";

function App() {
	const [jsonData, setJsonData] = useState(null);

	// Fetch JSON data once at app load
	useEffect(() => {
		fetch("http://localhost:5984/ecofood-db/_find", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				selector: {
					_id: {
						$gt: null,
					},
					type: {
						$in: ["product", "city", "shop"],
					},
				},
				fields: ["name", "postal_code", "_id", "type"],
				limit: 9999,
			}),
		})
			.then((x) => x.json())
			.then((response) => {
				const data = { City: [], Product: [], Shop: [] };
				response.docs.forEach((doc) => {
					if (doc.type === "city") data.City.push({ id: doc._id, name: doc.name, postal_code: doc.postal_code });
					else if (doc.type === "product") data.Product.push({ id: doc._id, name: doc.name });
					else if (doc.type === "shop") data.Shop.push(doc);
				});
				setJsonData(data);
			})
			.catch((err) => console.error("Error loading sample_data.json:", err));
	}, []);

	return (
		<>
			<BrowserRouter>
				<div className="header">
					<a href="/" className="title">
						<h1>EcoFood</h1>
					</a>
				</div>
				<Routes>
					<Route path="/" element={<SearchContainer data={jsonData} />}></Route>
					<Route path="/results/:cityId/paniermoyen" element={<ResultsList type={"paniermoyen"} data={jsonData} />} />
					<Route path="/results/:cityId/:productId" element={<ResultsList type={"product"} data={jsonData} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
