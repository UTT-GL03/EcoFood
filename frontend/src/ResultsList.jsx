import React from "react";

const ResultsList = ({ resultsArray }) => {
	return (
		<div className="results-list">
			<h2>Results</h2>
			<div className="results-container">
				{resultsArray.map((item, index) => (
					<div key={index} className="result-item">
						<h3>{item.name}</h3>
						<p>{item.address}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ResultsList;
