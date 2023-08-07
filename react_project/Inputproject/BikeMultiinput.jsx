import React, { useState } from "react";
import { Button, Form, FormGroup, Table } from "react-bootstrap";
import { Input, Label } from "reactstrap";

export default function BikeMultiinput() {
  const [userData, setuserdata] = useState({
    BikeName: "",
    OwnerName: "",
    Model: "",
    Color: "",
    Price: "",
  });

  const [arr, setarr] = useState([]);

  const [ind,setind] = useState();

  function getdata(e) {
    setuserdata({ ...userData, [e.target.name]: e.target.value });
  }

  function addData(e) {
    e.preventDefault();
    setarr([...arr, userData]);
    setuserdata({
      BikeName: "",
      OwnerName: "",
      Model: "",
      Color: "",
      Price: "",
    });
    // console.log(arr); => only reference base
  }

  function Deletehandler(index){
    arr.splice(index,1);
    setarr([...arr]);
  }

  function AllDelete(){
    setarr([]);
  }

  function Updatefun(data,index){
    setuserdata(data);
    setind(index);
  }

  function SaveChanges(e){
    if(ind || ind === 0){
      arr.splice(ind, 1, userData);
      setarr([...arr]);
      setuserdata({
        BikeName: "",
        OwnerName: "",
        Model: "",
        Color: "",
        Price: "",
      });
      setind(null)
    }
  }
  return (
    <>
      <Form style={{ marginLeft: "100px", marginTop: "100px" }}>
        <FormGroup>
          <Label for="exampleBikeName">Bike Name</Label>
          <Input
            id="exampleBikeName"
            name="BikeName"
            placeholder="BikeName"
            type="text"
            style={{ width: "50%", marginBottom: "10px" }}
            value={userData.BikeName}
            onChange={(e) => getdata(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleOwnerName">Owner Name</Label>
          <Input
            id="exampleOwnerName"
            name="OwnerName"
            placeholder="OwnerName"
            type="text"
            style={{ width: "50%", marginBottom: "10px" }}
            value={userData.OwnerName}
            onChange={(e) => getdata(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleModelName">Model</Label>
          <Input
            id="exampleModel"
            name="Model"
            placeholder="ModelName"
            type="text"
            style={{ width: "50%", marginBottom: "10px" }}
            value={userData.Model}
            onChange={(e) => getdata(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleColor">Color</Label>
          <Input
            id="exampleColor"
            name="Color"
            placeholder="ColorName"
            type="text"
            style={{ width: "50%", marginBottom: "10px" }}
            value={userData.Color}
            onChange={(e) => getdata(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePrice">Price</Label>
          <Input
            id="examplePrice"
            name="Price"
            placeholder="BikePrice"
            type="text"
            style={{ width: "50%", marginBottom: "10px" }}
            value={userData.Price}
            onChange={(e) => getdata(e)}
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
          onClick={(e) => SaveChanges(e)}
        >
          SaveChanges
        </Button>
      </Form>
      <Table
        striped
        bordered
        hover
        dsty
        style={{ marginLeft: "100px", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>No.</th>
            <th>BikeName</th>
            <th>OwnerName</th>
            <th>Model</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.BikeName}</td>
                <td>{e.OwnerName}</td>
                <td>{e.Model}</td>
                <td>{e.Color}</td>
                <td>{e.Price}</td>

                <td>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
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
