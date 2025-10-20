import reactLogo from "./assets/react.svg";
import "./App.css";
import sampleData from "../sample_data.json";
import ResultsList from "./ResultsList";

function App() {
	return (
		<>
			<div className="header">
				<a href="https://react.dev" target="_blank" className="title">
					<img src={reactLogo} className="logo react" alt="React logo" />
					<h1>EcoFood</h1>
				</a>
			</div>
			<ResultsList resultsArray={sampleData.City} type={"city"} />
		</>
	);
}

export default App;
