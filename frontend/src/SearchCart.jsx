import { useState } from "react";
import { Link } from "react-router-dom";
import './searchcart.css';

function SearchCart() {

const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [city, setCity] = useState("");
  const onclick = () => {
    console.log(city);
    console.log(`/results/${city}/paniermoyen?nombre_adultes=${adults}&nombre_enfants=${children}`);
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
                id = "nb_a"
                placeholder="Nombre d'adultes"
                className="inputSearch"
                name="nb_a" 
                onChange={(e) => setAdults(e.target.value)}
                type="number"/>
            <input 
                className="inputSearch"
                id = "nb_e" 
                name="nb_e" 
                onChange={(e) => setChildren(e.target.value)}
                placeholder="Nombre d'enfants"
                type="number"/>

            <Link to={`/results/${city}/paniermoyen?nombre_adultes=${adults}&nombre_enfants=${children}`}>
            <button onClick={onclick}>Go to Results</button>
            </Link>
        </div>
    </div>
  )
}

export default SearchCart;