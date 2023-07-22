import React from 'react'

function MapKey() {

    let arr = ["uv","meet","yash","dharmin"]

  return (
    <>
     {arr.map((e,i)=>{
        return <h1 key= {i}>{e}</h1>;
     })}
    </>
  );
}

export default MapKey