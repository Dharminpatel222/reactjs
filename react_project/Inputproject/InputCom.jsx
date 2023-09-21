import React, { useEffect, useState } from "react";

export default function InputCom() {
  const [name, setname] = useState("");
  const [arr, setarr] = useState(getlocalstoragedata());

  // useEffect(() => {
  //   let data = localStorage.getItem("data");
  //   setarr(JSON.parse(data));
  //   // console.log("🚀 ~ file: InputCom.jsx:9 ~ useEffect ~ data:", data);
  // }, []);

  function getdata(e) {
    setname(e.target.value);
  }

  function adddata() {
    //   console.log("----->");
    setarr([...arr, name]);
    setname("");
    console.log(arr);

    localStorage.setItem("data", JSON.stringify([...arr, name]));
  }

    function getlocalstoragedata() {
      let data = localStorage.getItem("data");
      console.log(JSON.parse(data));

      if (data) {
        return JSON.parse(data);
      } else {
        return [];
      }
    }
  function Deleteall(){
    setarr([]);
    localStorage.removeItem("data");
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
          onChange={(e) => getdata(e)}
          style={{ padding: "10px 100px", outline: "none" }}
        />
        <button
          className="btn btn-danger"
          onClick={() => adddata()}
          style={{ marginLeft: "10px", padding: "10px 20px" }}
        >
          Add Name
        </button>

        <button className="btn btn-danger" onClick={()=>Deleteall()}>delete all</button>

        {arr.map((e, i) => {
          return (
            <h1 style={{ marginTop: "50px" }} key={i}>
              {e}
            </h1>
          );
        })}
      </div>
    </>
  );
}
