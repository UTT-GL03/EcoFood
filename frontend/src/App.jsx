import "./App.css";
import ResultsList from "./ResultsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
					<Route path="/results/:cityId/paniermoyen" element={<ResultsList type={"paniermoyen"} />} />
					<Route path="/results/:cityId/:productId" element={<ResultsList type={"product"} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
