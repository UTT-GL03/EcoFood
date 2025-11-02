import "./App.css";
import sampleData from "../sample_data.json";
import ResultsList from "./ResultsList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="header">
					<a href="/" className="title">
						<h1>EcoFood</h1>
					</a>
				</div>
				<Routes>
					<Route path="/" element={<SearchContainer />}></Route>
					<Route path="/results/city" element={<ResultsList resultsArray={sampleData.City} type={"city"} />} />
					<Route path="/results/:cityId/paniermoyen" element={<ResultsList resultsArray={sampleData.Shop} type={"paniermoyen"} />} />
					<Route path="/results/:cityId/:productId" element={<ResultsList resultsArray={sampleData.Shop} type={"product"} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
