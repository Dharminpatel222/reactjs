import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cocktail() {
  const [drinks, setDrinks] = useState([]);

  const navigate = useNavigate()

  function fetchDrinks() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((resp) => resp.json())
      .then((data) => setDrinks(data.drinks));
  }
  useEffect(() => {
    fetchDrinks();
  }, []);

  console.log("-----", drinks);
  return (
    <>
      <div className="container">
        <h1>Cocktail</h1>
        <hr />
        <div className="row">
          {drinks?.map((item) => {
            const { idDrink, strDrink, strDrinkThumb } = item;
            return (
              <div className="col-md-4 col-6 mb-5" key={idDrink}>
                <div className="card">
                  <img src={strDrinkThumb} alt="" />
                  <div className="card-body">
                    <h4>{strDrink}</h4>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary" onClick={()=>navigate(`/Cocktail-drink/${idDrink}`,{state:item})}>View Details</button>
                    {/* <Link to={`/Cocktail-drink/${idDrink}`} className="btn btn-primary">View Details</Link> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
