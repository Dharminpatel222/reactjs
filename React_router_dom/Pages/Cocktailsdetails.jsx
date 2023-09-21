import React,{useState,useEffect} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Cocktailsdetails() {
  const drinks = useParams();
  const { cocktailID } = drinks;

  const [Cocktaildetail, setCocktaildetail] = useState([]);

  const navigate = useNavigate();

  const data = useLocation();
  const{state} = data;

  function FetchSingleCocktail(){
     fetch(
       `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`
     )
       .then((resp) => resp.json())
       .then((data) => setCocktaildetail(data.drinks[0]));
  }

  useEffect(() => {
  //  FetchSingleCocktail();
  setCocktaildetail(state);
  }, []);

  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strInstructionsDE,
    strInstructionsES,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = Cocktaildetail;

  return (
    <>
      <div className="container">

        <button className="btn btn-primary" onClick={()=>navigate("/Cocktail-drink")}>Back</button>

        <h1>Cocktail Details</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <img className="w-100" src={strDrinkThumb} alt="" />
          </div>
          <div className="col-md-8">
            <h1>{strDrink}</h1>
            <p>{strInstructions}</p>
            <p>{strInstructionsDE}</p>
            <p>{strInstructionsES}</p>
            <ul>
              <li>{strIngredient1}</li>
              <li>{strIngredient2}</li>
              {strIngredient3 && <li>{strIngredient3}</li>}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
