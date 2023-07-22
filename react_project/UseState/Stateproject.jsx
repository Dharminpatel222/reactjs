import React, {useState} from 'react'

function Stateproject(){
    const [textcolor,settextcolor] = useState("red");

    function changecolor(){
        settextcolor("green");
    }
  return (
    <div>
        <h1 style={{color:textcolor}}>My name is Dharmin</h1>
        <button onClick={()=>changecolor()}>chnage color</button>
    </div>
  )
}
export default Stateproject