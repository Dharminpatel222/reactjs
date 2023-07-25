import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img className="card_img" src={props?.cardData?.img} alt="image" />
      </div>
      <div className="card_con">
        <h3>Bike Name :{props?.cardData?.BikeName}</h3>
        <h3>Price :{props?.cardData?.Price}</h3>
        <h3>Description :{props?.cardData?.Description}</h3>
      </div>
    </>
  );
}
