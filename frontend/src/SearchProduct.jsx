import { use, useState } from "react";
import { Link } from "react-router-dom";
import './searchproduct.css';

function SearchProduct() {

const [adults, setAdults] = useState(0);
  const [city, setCity] = useState("");
  const [product, setProduct]=useState("");
  const onclick = () => {
    console.log(city);
    console.log(`/results/${city}/${product}`);
  }

  return (
    <div>
        <div className="search-form">
            <input 
                id = "city"
                placeholder="Ville"
                className="inputSearch"
                name="city" 
                onChange={(e) => setCity(e.target.value)}
                type="text"/>
            <input 
                id = "product"
                placeholder="Produit"
                className="inputSearch"
                name="product" 
                onChange={(e) => setProduct(e.target.value)}
                type="text"/>

            <Link to={`/results/${city}/${product}`}>
            <button onClick={onclick}>Rechercher le produit le moins cher</button>
            </Link>
        </div>
    </div>
  )
}

export default SearchProduct;