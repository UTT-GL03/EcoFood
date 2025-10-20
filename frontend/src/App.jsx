import reactLogo from "./assets/react.svg";
import "./App.css";
import sampleData from "../sample_data.json";
import ResultsList from "./ResultsList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from 'react';

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
          <Route path="/" element={
            <div className="navigation">
              <Link to="/results/city">
                <button>Go to Results</button>
              </Link>
            </div>
          }></Route>
          <Route path="/results/city" element={<ResultsList resultsArray={sampleData.City} type={"city"} />} />
          <Route path="/results/shop" element={<ResultsList resultsArray={sampleData.Shop} type={"shop"} />} />
          <Route path="/results/product" element={<ResultsList resultsArray={sampleData.Product} type={"product"} />} />
        </Routes>
    </BrowserRouter>
		</>
	);
}

export default App;
