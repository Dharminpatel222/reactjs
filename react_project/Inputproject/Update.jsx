import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function Update() {
  const [name, setname] = useState("");
  const [arr, setarr] = useState( getlocalstoragedata());
  const [ind, setind] = useState();

  function getdata(e) {
    setname(e.target.value);
  }
  function adddata() {
    //   console.log("----->");
    setarr([...arr, name]);
    setname("");
    console.log(arr);

    localStorage.setItem("data",JSON.stringify([...arr,name]))
  }
  function Deletehandler(index) {
    arr.splice(index, 1);
    setarr([...arr]);

    localStorage.setItem('data',JSON.stringify([...arr]))
  }
  function Deleteallhandler() {
    setarr([]);
  }

  function Updatefun(data, index) {
    setname(data);
    setind(index);
  }

  function Updatechanges(){
    arr.splice(ind,1,name);
    setarr([...arr]);
    setname('');
    setind(null);

    localStorage.setItem('data',JSON.stringify([...arr]))
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
        <button
          className="btn btn-secondary ms-5"
          onClick={() => Updatechanges()}
        >
          Save changes
        </button>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "200px" }}
          onClick={() => Deleteallhandler()}
        >
          Delete All
        </button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => Deletehandler()}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success ms-3"
                      onClick={() => Updatefun(e, i)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
