import React from "react";

const ResultsList = ({ resultsArray, type }) => {
	
	return (
		<div className="results-list">
			<h2>Results</h2>
			<div className="results-container">
				{resultsArray.map((item, index) =>
					type === "shop" ? (
						<div key={index} className="result-item">
							<h3>{item.name}</h3>
							<p>{item.address}</p>
							<p>{item.url}</p>
						</div>
					) : 
					type === "city" ? (
						<div key={index} className="result-item">
							<h3>{item.name}</h3>
							<p>{item.postal_code}</p>
						</div>
					) :
					type === "product" ? (
						<div key={index} className="result-item">
							<h3>{item.name}</h3>
						</div>
					) : null
				)}
			</div>
		</div>
	);
};

export default ResultsList;
