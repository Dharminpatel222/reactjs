import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div>
          <img className="" src={props?.cardData?.img} alt="image" />
        </div>
        <div className="">
          <h3>Bike Name :{props?.cardData?.BikeName}</h3>
          <h3>Price :{props?.cardData?.Price}</h3>
          <h3>Description :{props?.cardData?.Description}</h3>
        </div>
      </div>
    </>
  );
}
