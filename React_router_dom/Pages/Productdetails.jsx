import React,{useState,useEffect} from "react";
import { productlist } from "./Productlist";
import { useLocation, useParams } from "react-router-dom";

export default function Productdetails() {
  const myproductid = useParams(); // get dynamic value get //
  const { id } = myproductid;

  const[ProductDetail,setproductdetail] = useState({})

  const data = useLocation()

  const { state } = data;

  useEffect(() => {
    // let findproduct = productlist.find((item) => item.id === Number(id));

    setproductdetail(state);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="mb-3">Product details {id}</h1>
        <hr />
        <h2>{ProductDetail.name}</h2>
        <h2>{ProductDetail.Price}</h2>
        <h2>{ProductDetail.Description}</h2>
      </div>
    </>
  );
}
