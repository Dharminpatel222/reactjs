import React, { useState } from 'react'

function Stateproject2() {

    const[index,setindex] = useState(0);

    let arr = ["red","green","black","blue"];


    function changecolor(){
        if(index<3){
            setindex(index + 1);
        }else{
            setindex(0);
        }
    }

  return (
    <div>
        <h1 style={{color : arr[index]}}>Box Box</h1>
        <button onClick={()=>changecolor()}>click here</button>
    </div>

  )
}

export default Stateproject2