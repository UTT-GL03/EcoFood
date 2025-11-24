import "./App.css";
import ResultsList from "./ResultsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import { useState, useEffect } from "react";

function App() {
	const [jsonData, setJsonData] = useState(null);

	// Fetch JSON data once at app load
	useEffect(() => {
		fetch("http://localhost:5984/ecofood-db/_all_docs?include_docs=true")
			.then((x) => x.json())
			.then((response) => {
				// Transform CouchDB structure to original format
				const data = {
					Shop: response.rows.filter((row) => row.doc.type === "shop").map((row) => row.doc),
					City: response.rows.filter((row) => row.doc.type === "city").map((row) => row.doc),
					Product: response.rows.filter((row) => row.doc.type === "product").map((row) => row.doc),
				};
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
