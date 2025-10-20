import React from "react";
import "./resultslist.css";

const ResultsList = ({ resultsArray, type }) => {
	return (
		<div className="results-list">
			<h2>Résultats ({type})</h2>
			<div className="results-container">
				{resultsArray.map((item, index) =>
					type === "shop" ? (
						<Shop name={item.name} address={item.address} url={item.url} index={index} />
					) : type === "city" ? (
						<City name={item.name} postal_code={item.postal_code} index={index} />
					) : type === "product" ? (
						<Product name={item.name} index={index} />
					) : null
				)}
			</div>
		</div>
	);
};

function City({name, postal_code, index}) {
  return (
    
      	<div key={index} className="result-item">
			<h3>{name}</h3>
			<p>{postal_code}</p>
		</div>
  )
}

function Shop({name, address, url, index}) {
  return (
    <div key={index} className="result-item">
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{url}</p>
    </div>
  )
}

function Product({name, index}) {
	  return (
		<div key={index} className="result-item">
			<h3>{name}</h3>
		</div>
	)

}

export default ResultsList;
