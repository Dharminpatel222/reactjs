import React, { useContext } from "react";
import ComponetC from './ComponetC'
import { wrappercontext } from './Usecontext';

export default function ComponetB() {

    const data = useContext(wrappercontext);

    const{product,setproduct} = data;

    function setprooduct(){
        setproduct([]);
    }

  return (
    <>
      <div className="container">
        <ComponetC />
        <h4>product listing</h4>
        <hr />
        {product.map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
        <button onClick={() => setprooduct()}>clear</button>
      </div>
    </>
  );
}
