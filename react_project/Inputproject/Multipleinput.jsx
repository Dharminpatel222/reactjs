import React, { useState } from "react";
import { Button, Form, FormGroup, FormText, Table } from "react-bootstrap";
import { Input, Label } from "reactstrap";

export default function Multipleinput() {
  const [userData, SetuserData] = useState({
    email: "",
    name: "",
    text: "",
  });

  const [arr, setarr] = useState(getlocalstoragedata());

  const[ind,setind] = useState();

  function getdata(e) {
    SetuserData({ ...userData, [e.target.name]: e.target.value });
  }

  function addData(e) {
       e.preventDefault();
    setarr([...arr, userData]);
    SetuserData({
      email: "",
      name: "",
      text: "",
    });
    localStorage.setItem("data",JSON.stringify([...arr,userData]))
  }
  function Deletehandler(index) {
    arr.splice(index, 1);
    setarr([...arr]);

    localStorage.setItem("data",JSON.stringify([...arr]))
  }
  function  AllDelete(e){
    setarr([]);
  }
  function Updatefun(data,index){
    SetuserData(data); //
    setind(index);
  }

  function SaveChanges(){
    
    if(ind || ind === 0){
      arr.splice(ind, 1, userData);
      setarr([...arr]);
      SetuserData({
        email: "",
        name: "",
        text: "",
      });
      setind(null)
    }

    localStorage.setItem('data',JSON.stringify([...arr]));
  }

  function getlocalstoragedata(){
    let data = localStorage.getItem("data");
    console.log(JSON.parse(data));

    if(data){
      return JSON.parse(data);
    }else{
      return [];
    }
  }
  return (
    <>
      {/* <h1>{userData.email}</h1>
      <h1>{userData.name}</h1>
      <h1>{userData.text}</h1> */}

      <Form style={{ marginLeft: "100px", marginTop: "100px" }}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            style={{ width: "50%" }}
            onChange={(e) => getdata(e)}
            value={userData.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Name</Label>
          <Input
            id="exampleName"
            name="name"
            placeholder="name placeholder"
            type="text"
            style={{ width: "50%" }}
            onChange={(e) => getdata(e)}
            value={userData.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            style={{ width: "50%" }}
            onChange={(e) => getdata(e)}
            value={userData.text}
          />
        </FormGroup>
        <Button style={{ marginTop: "10px" }} onClick={(e) => addData(e)}>
          Submit
        </Button>
        <Button
          style={{ marginTop: "10px", marginLeft: "10px" }}
          onClick={(e) => AllDelete(e)}
        >
          All Delete
        </Button>
        <Button
          style={{ marginTop: "10px", marginLeft: "10px" }}
          onClick={(e) => SaveChanges(e)}>
          SaveChanges
        </Button>
      </Form>
      <Table striped bordered hover dsty style={{ marginLeft: "100px",marginTop:'20px' }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>email</th>
            <th>name</th>
            <th>text</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.email}</td>
                <td>{e.name}</td>
                <td>{e.text}</td>
                <td>
                  <button
                    className="btn btn-primary" style={{marginRight:"10px"}}
                    onClick={() => Deletehandler()}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
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
    </>
  );
}
