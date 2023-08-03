import React, { useState } from "react";

export default function InputCom() {

    const[name,setname] = useState('');
    const[arr,setarr] = useState([]);

    function getdata(e){
        setname(e.target.value);
    }

    function adddata(){
        //   console.log("----->");
        setarr([...arr,name]);
        setname('');
        console.log(arr);
    }

  return (
    <>
      <div
        className="inputDiv"
        style={{
          backgroundColor: "lightblue",
          textAlign: "center",
          flexDirection: "column",
          width: "100vw",
          padding: "40px",
        }}
      >
        <label htmlFor="">Name : </label>
        <input
          type="text"
          placeholder="Please enter your name"
          id="MyBox"
          value={name}
          onChange={(e)=>getdata(e)}
          style={{ padding: "10px 100px",outline:"none"}}
        />
        <button className="btn btn-danger" onClick={()=>adddata()} style={{marginLeft:"10px",padding:"10px 20px"}}>Add Name</button>
        
        {
            arr.map((e,i)=>{
                return <h1 style={{ marginTop: "50px" }} key={i}>{e}</h1>;
            })
        }
      </div>
    </>
  );
}
